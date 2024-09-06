import { Given, When, Then } from '@cucumber/cucumber';
import login from '../../page-objects/login//login-page';

const Login = login;


Given('I send login url', async () => {
    // await browser.url('http://v3-web-app-micro.staging.superapp.co.id/auth/login');
    // await browser.maximizeWindow();
    // //screenshoot opened login page
    // await browser.takeScreenshot();

});

When('I login with credential', async() => {
    
    let btnlog = false;
        let maxAttempts = 0;

        do {
            try {

// Click google button
                await Login.loginWithGoogleButton.click();
                btnlog = true;
            } catch (e) {
                const error = e as Error; 
                console.error('Error clicking button:', error.message);

                await new Promise(resolve => setTimeout(resolve, 1500)); 

                maxAttempts--;
                if (maxAttempts === 0) {
                    console.error('Maximum attempts reached. Reloading the page.');
                    await browser.refresh();
                    maxAttempts = 0;
                }
            }
        } while (!btnlog);

// Switch to Google login window
        const parentHandle = await browser.getWindowHandle();
        const childHandles = await browser.getWindowHandles();

        for (const handle of childHandles) {
            if (handle !== parentHandle) {
                await browser.switchToWindow(handle);
                console.log(`Switched to window with title: ${await browser.getTitle()}`);
                break;
            }
        }

// Handle potential iframe situation
        const iframes = await $$('iframe');
        if (await iframes.length > 0) {
            await browser.switchToFrame(iframes[0]);
            console.log('Switched to iframe containing the email input');
        }

        try {

// Input email
            await Login.emailInput.setValue('mariansyah.riwendi@nusantara.technology');

// Click next            
            await Login.nextButton.click();
        } catch (e) {
            const error = e as Error;
            console.error('Error interacting with email input:', error.message);
            throw error; 
        }

// Input password
        await Login.passwordInput.setValue('passwordsuperapp');
        await Login.nextButton.click();
        await browser.pause(3000);

// Switch back to the original window
        await browser.switchToWindow(parentHandle);
        await browser.pause(3000);
})

Then('I see usernameDisplay', async() => {
    await expect (login.usernameDisplay).toBeExisting();
    const title = await login.usernameDisplay.getText();
    console.log(title);
})

