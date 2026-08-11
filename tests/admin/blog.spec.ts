import { test, expect } from "../../src/fixtures/adminFixture";
import { allure } from "allure-playwright";
import { BlogPage } from "../../src/pages/admin/BlogPage";
import { validBlogData, invalidBlogCases } from "../../data/admin/blogData";
import { TestHelper } from "../../src/utils/TestHelper";
import { MenuHelper } from "../../src/utils/MenuHelper";

test.use({ video: 'on' });

if (MenuHelper.hasSubMenu(['Quản lý bài viết', 'Bài viết'], ['BLOG', 'Blog'])) {
    test.describe("Blog Management Tests", () => {
        let blogPage: BlogPage;

        test.beforeEach(async ({ page }) => {
            blogPage = new BlogPage(page);

            await allure.epic("Admin");
            await allure.feature("Add and Verify Blogs");
        });

        // ==================== DATA-DRIVEN NEGATIVE TEST CASES ====================
        invalidBlogCases.forEach((data) => {
            test(
                `Add blog should fail with ${data.scenario}`,
                {
                    tag: [
                        `@priority:${data.priority}`,
                        "@regression",
                        "@negative",
                    ],
                    annotation: [{ type: "severity", description: data.severity }],
                },
                async ({ page }) => {
                    await allure.story(`Invalid Blog: ${data.scenario.toUpperCase()}`);

                    await test.step("bước 1: Điều hướng đến trang admin quản lý Blog", async () => {
                        await blogPage.gotoAdminBlog();
                    });

                    await test.step("bước 2: Nhập thông tin không hợp lệ", async () => {
                        await blogPage.addBlog(
                            data.title,
                            data.slug,
                            data.desc,
                            data.content,
                            data.imagePath
                        );
                    });

                    await test.step("bước 3: Xác nhận hệ thống chặn lưu (Báo lỗi)", async () => {
                        if (data.assertionType === "form_block") {
                            try {
                                await expect(blogPage.successAdminMessage).toBeVisible({ timeout: 2000 });
                                throw new Error(`Web có bug: Test case '${data.scenario}' vẫn lưu thành công!`);
                            } catch (error: any) {
                                if (error.message.includes('Web có bug')) {
                                    throw error;
                                }
                                // Expected to fail validation
                            }
                        }
                    });
                }
            );
        });

        // ==================== POSITIVE TEST CASE ====================
        test(
            "Add blog successfully and verify on website",
            {
                tag: [
                    "@priority:critical",
                    "@smoke",
                    "@regression",
                    "@positive",
                ],
                annotation: [{ type: "severity", description: "blocker" }],
            },
            async ({ page }) => {
                await allure.story("Valid Blog Addition Flow");

                await test.step("bước 1: Điều hướng đến trang admin quản lý Blog", async () => {
                    await blogPage.gotoAdminBlog();
                });

                await test.step("bước 2: Nhập thông tin và lưu blog mới", async () => {
                    await blogPage.addBlog(
                        validBlogData.title,
                        validBlogData.slug,
                        validBlogData.desc,
                        validBlogData.content,
                        validBlogData.imagePath,
                        validBlogData.enData  // Nhập tiếng Anh nếu web hỗ trợ 2 ngôn ngữ
                    );
                });

                await test.step("bước 3: Xác nhận lưu thành công trong Admin", async () => {
                    await blogPage.verifyBlogInAdminSuccess();
                    await TestHelper.takeScreenshot(page, 'Thông báo lưu blog thành công');
                });

                // Sử dụng khối try...finally để đảm bảo luôn xóa dữ liệu dù test có bị lỗi ở giữa chừng
                let isCreated = true;
                try {
                    await TestHelper.delay(page, 1000);

                    await test.step("bước 4: Kiểm tra blog hiển thị ngoài Website", async () => {
                        await blogPage.verifyBlogOnWebsite(validBlogData.title);
                        await TestHelper.takeScreenshot(page, 'Blog hiển thị trên website');
                    });

                    await TestHelper.delay(page, 1000);
                } finally {
                    if (isCreated) {
                        await test.step("bước 5: Quay lại Admin và xóa blog vừa tạo (Cleanup)", async () => {
                            const baseUrl = process.env.BASE_URL?.endsWith('/') ? process.env.BASE_URL : process.env.BASE_URL + '/';
                            await page.goto(baseUrl + 'madmin/index.php');

                            await blogPage.gotoAdminBlog();

                            await blogPage.deleteBlog(validBlogData.title);
                            await TestHelper.takeScreenshot(page, 'Sau khi xóa blog');
                        });
                    }
                }
            }
        );

        // ==================== PERFORMANCE / BULK INSERT TEST CASE ====================
        test(
            "Bulk insert 35 blogs via Copy and verify Load More on website",
            {
                tag: ["@priority:high", "@smoke",
                    "@regression"],
                annotation: [{ type: "severity", description: "critical" }],
            },
            async ({ page }) => {
                test.setTimeout(10 * 60 * 1000);
                await allure.story("Bulk Insert and Pagination Verification");

                const timestamp = Date.now().toString();
                const bulkPrefix = `[AUTO-TEST] Blog LoadTest`;
                const baseTitle = `${bulkPrefix} ${timestamp}`;
                const baseSlug = `blog-loadtest-${timestamp}`;

                await TestHelper.runBulkPaginationTest(
                    page,
                    blogPage,
                    baseTitle,
                    baseSlug,
                    validBlogData.imagePath,
                    bulkPrefix,
                    "Blog"
                );
            }
        );
    });
}
