import { test } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { DashboardPage } from "../../pages/DashboardPage";
import { users } from "../../fixtures/users";

test('Debe cerrar la sesión correctamente', async ({page}) => {

    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.goto();

    await loginPage.login(
        users.admin.username,
        users.admin.password
    );

    await dashboardPage.expectLoaded();

    await dashboardPage.logout();

    await loginPage.expectLoginPage();

});