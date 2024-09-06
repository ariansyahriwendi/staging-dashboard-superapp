import { Given, When, Then } from '@cucumber/cucumber';
import Order from '../../page-objects/order/order-page.ts';

const order = Order;


Given('I am on the dashboard', async () => {
});

When('I click analytic', async() => {
    await Order.analytic.click();
    await browser.pause(5000);
    

    // await Login.loginWithGoogleButton.click();
    });