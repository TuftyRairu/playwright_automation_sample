import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { loginAssertions } from "../assertions/login.assetions";
import testData from "../data/loginData.json";

test.use({
  viewport: {
    height: 1080,
    width: 1920,
  },
});

test("Login invalid credentials", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();

  await loginPage.closeWelcomeBanner();
  await loginAssertions.expectButtonHomepage(page);

  await loginPage.login(testData.invalidUser.email, testData.invalidUser.password);
  await loginAssertions.expectLoginError(page, "Invalid email or password.");
});
