const { expect } = require("@playwright/test");

const loginAssertions = {
  async expectButtonHomepage(page) {
    await expect(
      page.getByRole("button", { name: "Back to homepage" })
    ).toBeVisible();
  },
  async expectLoginError(page, error) {
    await expect(page.getByText(error)).toBeVisible();
    await expect(page.locator("mat-card")).toContainText(error);
  },
};

module.exports = { loginAssertions };
