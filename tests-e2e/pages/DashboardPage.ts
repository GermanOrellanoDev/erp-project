import { expect, Expect, Locator, Page } from "@playwright/test";

export class DashboardPage {

    private readonly dashboardTitle: Locator;
    private readonly loggedUser: Locator;
    private readonly userMenuButton: Locator;
    private readonly logoutLink: Locator;

    constructor(private readonly page: Page){
        this.dashboardTitle = page.getByTestId('dashboard-title');
        this.loggedUser = page.getByTestId('logged-user');
        this.userMenuButton = page.getByTestId('user-menu-button');
        this.logoutLink = page.getByTestId('logout-link');
    }

    async expectLoaded(){
        await expect(this.page).toHaveURL("/dashboard/");

        await expect(this.dashboardTitle).toBeVisible();
    }

    async expectLoggedUser(username: string){
        await expect(this.loggedUser).toContainText(username);
    }

    async openUserMenu(){
        await this.userMenuButton.click();
    }

    async logout() {
        await this.openUserMenu();
        await this.logoutLink.click();
    }
}