import { test } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { DashboardPage } from "../../pages/DashboardPage";
import { users } from "../../fixtures/users";

test.describe('Login', ()=> {

    test('Debe mostrar el formulario de login', async ({page}) => {

        const loginPage = new LoginPage(page);

        await loginPage.goto();

        await loginPage.expectLoaded();

    });

    test('Debe iniciar sesión con credenciales válidas', async ({page}) => {

        const loginPage = new LoginPage(page);
        const dashboardPage = new DashboardPage(page);

        await loginPage.goto();

        await loginPage.login(
            users.admin.username,
            users.admin.password
        );

        await dashboardPage.expectLoaded();

        await dashboardPage.expectLoggedUser(
            users.admin.username
        );
    
    });

    test('No debe iniciar sesión con contraseña incorrecta', async ({page})=> {

        const loginPage = new LoginPage(page);
        const invalidPassword = 'contraseña_incorrecta'

        await loginPage.goto();

        await loginPage.login(
            users.admin.username,
            invalidPassword            
        )

        await loginPage.expectInvalidCredentials();
    })
});
