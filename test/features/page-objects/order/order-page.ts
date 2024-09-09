import { $ } from '@wdio/globals';

export default new class Order {

    get order(){ 
        return $('//span[contains(text(),"Order")]');
    }

    get penjualan(){ 
        return $('//span[@class="ant-menu-title-content"]/a[@data-testid="Menu-Penjualan"]');
    }

    get btnAdd(){ 
        return $('//button[@id="btnAdd"]');
    }

    get marketplace(){ 
        return $('//*[contains(text(), "MarketPlace")]');
    }

    get agenPemesanan(){ 
        return $('//input[@id="Agen Pemesan"]');
    }

    get optAgenPemesan() {
        return $('//ul[@role="listbox"]/*[@id="react-autowhatever-1--item-0"]');
    }

    get alamatKirim(){
        return $('//input[@id="Pilih alamat kirim"]');
    }

    get optAlamatKirim() {
        return $('//*[contains(text(), "Warung")]');
    }

    get superagen(){
        return $('//input[@id="Superagen"]');
    }

    get optSuperagen() {
        return $('//*[contains(text(), "Bobby")]');
    }

    get btnTambahProduk() {
        // return $('//button[@class="ant-btn ant-btn-default ant-btn-lg btn"]/*[contains(text(), "Tambah Produk")]');
        return $('//*[contains(text(), "Tambah Produk")]');

    }

    get namaProduct() {
        return $('//input[@id="Produk"]');
    }

    get optNamaProduct() {
        return $('//*[contains(text(), "Automated Stock | ra")]');
    }

    get satuan() {
        return $('//span[@title=""]');
    }

    get optSatuan() {
        return $('//*[contains(text(), "Bag")]');
    }

    get quantity() {
        return $('//input[@id="quantity"]');
    }

    public get btnSave() {
        return $('//span[@data-testid="btn-save"]');
    }

    public get btnUpdate() {
        return $('//button[@id="updateBtnEdit"]');
    }

    public get btnSubmit() {
        return $('//button[@data-testid="btn-submit"]');
    }

    public get kodeTransaksi() {
        return $('//tbody[@class="ant-table-tbody"]/*[2]/*[4]/*/span');
    }

    public get inputKodeTransaksi() {
        return $('//input[@placeholder="Cari kode penjualan"]');
    }



}