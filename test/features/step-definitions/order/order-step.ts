import { Given, When, Then } from '@cucumber/cucumber';
import Order from '../../page-objects/order/order-page.ts';

const order = Order;


Given('I am on the dashboard', async () => {
});

When('I click order', async() => {
    await Order.order.scrollIntoView();
    await Order.order.click();
    await browser.pause(3000);
        });
    
When('I click penjualan', async() => {
    await Order.penjualan.scrollIntoView();
    await Order.penjualan.click();
    await browser.pause(3000);
        });        

When('I click button add', async() => {
    await Order.buttonAdd.isClickable;
    await Order.buttonAdd.click();
    await browser.pause(3000);
        });
        
When('I click marketplace', async() => {
    await Order.marketplace.click();
    await browser.pause(3000);
        });  