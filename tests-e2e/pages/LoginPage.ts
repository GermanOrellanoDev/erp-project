import {expect, Locator, Page} from '@playwright/test';

export class LoginPage {

    readonly page: Page;

    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;
    private readonly loginForm: Locator;

    constructor(page: Page){
        this.page = page;

        this.loginForm = page.getByTestId('login-form');
        this.usernameInput = page.getByTestId('username-input');
        this.passwordInput = page.getByTestId('password-input');
        this.loginButton = page.getByTestId('login-button');   
    }

    async goto() {
        await this.page.goto('/login/');
    }

    async login(username: string, password: string){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async expectLoaded(){
        await expect(this.loginForm).toBeVisible();
        await expect(this.usernameInput).toBeVisible();
        await expect(this.passwordInput).toBeVisible();
        await expect(this.loginButton).toBeVisible();        
    }
}