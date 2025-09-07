import { Page, expect } from "@playwright/test";
import { loginSelectors } from "../selectors/login.selectors";

export class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("/#/login");
    await expect(
      this.page.getByRole("button", {
        name: "Button to display the password",
      })
    ).toBeVisible();
  }

  async closeWelcomeBanner() {
    await this.page
      .getByRole("button", { name: "Close Welcome Banner" })
      .click();
  }

  async fillEmail(email) {
    await this.page.locator(loginSelectors.emailInput).first().click();
    await this.page
      .getByRole("textbox", { name: "Text field for the login email" })
      .fill(email);
  }

  async fillPassword(password) {
    await this.page.getByText("Password", { exact: true }).click();
    await this.page
      .getByRole("textbox", { name: "Text field for the login password" })
      .fill(password);
  }

  async login(email, password) {
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.page.getByRole("button", { name: "Login" }).click();
  }
}
