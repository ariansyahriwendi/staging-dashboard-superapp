import { Given, When, Then } from '@cucumber/cucumber';
import Login from '../../page-objects/login//login-page';

const login = Login;


Given('I send login url', async () => {

});

When('I login with credential', async() => {
    
    let btnlog = false;
        let maxAttempts = 1;

        do {
            try {

// Click google button
                await Login.loginWithGoogleButton.click();
                btnlog = true;
            } catch (e) {
                const error = e as Error; 
                console.error('Error clicking button:', error.message);

                await new Promise(resolve => setTimeout(resolve, 7000)); 

                maxAttempts--;
                if (maxAttempts === 0) {
                    console.error('Maximum attempts reached. Reloading the page.');
                    await browser.refresh();
                    maxAttempts = 1;
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

// Click next        
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

Given('I am on the dashboard', async () => {
});

Given('I am on the dashboard v4', async () => {
    await browser.url('https://v3-web-app-micro.staging.superapp.co.id/dashboard');
    // await browser.url('https://v3-web-app-micro.staging.superapp.co.id/logistic/outgoing-goods-v4/detail?vendor_pic_id=499&name=Mobil%20tamia%20&type=2&warehouse_id=1&period=today&group_type=grosir&search=T240909-187&page=1&customer=-1&driver=-1&plate_number=-1&status=all')
    await browser.pause(3000);
});

When('I login with keys', async() => {
    
                await Login.loginWithGoogleButton.click();
                // await browser.pause(3000);

                const parentHandle = await browser.getWindowHandle();
        const childHandles = await browser.getWindowHandles();

        for (const handle of childHandles) {
            if (handle !== parentHandle) {
                await browser.switchToWindow(handle);
                console.log(`Switched to window with title: ${await browser.getTitle()}`);
                break;
            }
        }

                await browser.keys(['mariansyah.riwendi@nusantara.technology']);
                await browser.keys(['Meta', 'Enter']);

                await browser.pause(2000);

                await browser.keys('passwordsuperapp');
                await browser.keys(['Meta', 'Enter']);

                await browser.switchToWindow(parentHandle);

                await browser.pause(13000);


        })
