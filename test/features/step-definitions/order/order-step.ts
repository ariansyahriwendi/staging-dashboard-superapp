import { Given, When, Then } from '@cucumber/cucumber';
import Order from '../../page-objects/order/order-page.ts';
import Logistic from '../../page-objects/logistic/logistic-page.ts';
import { Key } from 'webdriverio';

let x: string;

When('I click order', async() => {
    await Order.order.scrollIntoView();
    await Order.order.click();
        });
    
When('I click penjualan', async() => {
    await Order.penjualan.scrollIntoView();
    await Order.penjualan.click();
        });


When('I click button add', async() => {
    await Order.btnAdd.isClickable;
    await Order.btnAdd.click();
        });
        
When('I click marketplace', async() => {
    await Order.marketplace.click();
        });  

 When('I select agen pemesanan', async() => {
    await Order.agenPemesanan.click();
    await Order.optAgenPemesan.click();
         });

 When('I select alamat kirim', async() => {
    await Order.alamatKirim.click();
    await Order.optAlamatKirim.click();
         }); 
         
 When('I select superagen', async() => {
    await Order.superagen.click();
    await Order.optSuperagen.click();
         });
         
When('I click button tambah produk', async() => {
    await Order.btnTambahProduk.scrollIntoView();
    await Order.btnTambahProduk.click();
         });  
        
When('I select nama produk', async() => {
    await Order.namaProduct.click();
    await Order.optNamaProduct.click();
         });
         
When('I select satuan', async() => {
    await Order.satuan.click();
    await Order.optSatuan.click();
         });

When('I select quantity {string}', async(x : string) => {
    // await Order.quantity.clearValue();
    await Order.quantity.setValue(x);
    await browser.pause(2000);
         });

 When('I click simpan item', async() => {
    await Order.btnSave.click();
         });

When('I click simpan form', async() => {
    await Order.btnUpdate.click();
         });

When('I click simpan order', async() => {
    await Order.btnSubmit.click();
         });

Then('I get kode transaksi', async() => {
    await Order.kodeTransaksi.isDisplayed();
    x = await Order.kodeTransaksi.getText();
    expect (console.log('#Kode Transaksi is : ' + x));
    await browser.pause(3000);
         });

When('I input kode invoice', async() => {
    await Logistic.inputKodeInvoice.setValue(x);
    await browser.pause(10000);
         });

When('I input kode transaksi', async() => {
    await Logistic.inputKodeTransaksi.setValue(x);
    await browser.pause(10000);
         });

         