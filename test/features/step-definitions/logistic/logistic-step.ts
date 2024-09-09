import { Given, When, Then } from '@cucumber/cucumber';
import Logistic from '../../page-objects/logistic/logistic-page.ts';
import { Key } from 'webdriverio';

let x: string;

When('I click logistic', async() => {
    await Logistic.logistic.scrollIntoView();
    await Logistic.logistic.click();
    await browser.pause(3000);
        });

When('I click new outgoing goods', async() => {
    await Logistic.newOutgoingGoods.scrollIntoView();
    await Logistic.newOutgoingGoods.click();
    await browser.pause(3000);
        });

When('I click tanggal kirim', async() => {
    await Logistic.tanggalKirim.click();
        });

When('I select hari ini', async() => {
    await Logistic.tanggalHariIni.click();
        });

When('I click detail outgoing', async() => {
    await Logistic.detailOutgoing.click();
        });

When('I click checkbox', async() => {
    await Logistic.checkbox.click();
        });

When('I click assign kurir', async() => {
    await Logistic.assignKurir.click();
});

When('I select driver', async() => {
    await Logistic.driver.click();
    await browser.pause(1000);
    await browser.keys(['sangar']);
    await Logistic.choosenDriver.click();
    await browser.pause(1000);
});

When('I select plat nomor', async() => {
    await Logistic.noPlate.click();
    await browser.pause(1000);
    await Logistic.choosenPlate.click();
});

When('I click assign', async() => {
    await Logistic.btnAssign.click();
});

When('I click siap dikirim', async() => {
    await Logistic.btnSiapDikirim.click();
});

When('I click ubah status', async() => {
    await Logistic.btnUbahStatus.click();
    await browser.pause(10000);
});

When('I click dikirim', async() => {
    await Logistic.btnSiapDikirim.click();
});

