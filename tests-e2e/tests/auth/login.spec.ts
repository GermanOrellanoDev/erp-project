import {test} from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";

test.describe('Login', ()=> {
    test('Debe mostrar el formulario de login', async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.expectLoaded();
    })
})