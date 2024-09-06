export default new class orderPage {
    //Order menu
     get order() { return $('//span[@data-testid="Menu-Order"]'); }
     get menuPenjualan() { return $('//span[@class="ant-menu-title-content"]/a[@data-testid="Menu-Penjualan"]'); }
     get btnAddOrder() { return $('//button[@id="btnAdd"]'); }
     get btnMarketPlace() { return $('//*[contains(text(), "MarketPlace")]'); }
     get btnDirect() { return $('//*[contains(text(), "Direct")]'); }
     get inputSearchList() { return $('//input[@placeholder="Cari kode penjualan"]'); }
     get textKodeTransaksi() { return $('//tbody[@class="ant-table-tbody"]/*[2]/*[4]/*/span'); }
     get textTitle() { return $('//section[@class="s_qzwtq9Zy"]'); }
     get textStatus() { return $('//tr[@data-row-key="1435418948"]/*[11]/*[2]'); }

    //Order page footer button
     get btnSimpanPage() { return $('//button[@data-testid="btn-submit"]'); }
     get btnCancelPage() { return $('//button[@data-testid="btn-cancel"]'); }

    //Market Order
    //section 1 customer info
     get agenPemesanMarketpalce() { return $('//input[@id="Agen Pemesan"]'); }
     get alamatKirimMarketPlace() { return $('//input[@id="Pilih alamat kirim"]'); }
     get superAgenMarketPlace() { return $('//input[@id="Superagen"]'); }

    //section 1 option 
     get optSuperAgenMarketPlace() { return $('//*[contains(text(), "Bobby")]'); }
     get optAgenPemesan() { return $('//ul[@role="listbox"]/*[@id="react-autowhatever-1--item-0"]'); }
     get optAlamatKirimMarketPlace() { return $('//*[contains(text(), "Warung")]'); }

    //section 3 order item
     get addProductMP() { return $('//*[contains(text(), "Tambah Produk")]'); }
     get namaProductModalMP() { return $('//input[@id="Produk"]'); }
     get inputSatuanModalMP() { return $('//span[@title=""]'); }
     get inputQtyModalMP() { return $('//input[@id="quantity"]'); }
     get btnSimpanModalListMP() { return $('//span[@data-testid="btn-save"]'); }
     get btnSimpanModalMP() { return $('//button[@id="updateBtnEdit"]'); }
     get btnTambahProdukModalMP() { return $('//button[@class="ant-btn ant-btn-default ant-btn-lg btn"]/*[contains(text(), "Tambah Produk")]'); }

    //section 3 option modal
     get optNamaProduct() { return $('//*[contains(text(), "Automated Stock | ra")]'); }
     get optSatuanModalMP() { return $('//*[contains(text(), "Bag")]'); }

    //Direct Order
    //section 1 detail
     get alamatKirimDirect() { return $('//input[@id="Pilih alamat kirim"]'); }
     get agenPemesananDirect() { return $('//input[@id="Agen Pemesan"]'); }
     get tipePenjualanDirect() { return $('//span[@class="ant-select-selection-item" and @title="NON-RTP"]'); }
     get metodePembayaranDirect() { return $('//span[@class="ant-select-selection-item" and @title="COD"]'); }
     get tipePtDirect() { return $('//input[@id="Tipe PT"]'); }
     get superAgenDirect() { return $('//div[@class="s_2qdcJJli  s_PSIUVpV- "]/*[@id="Superagen"]'); }
     get agenPemesanDirect() { return $('//input[@id="Agen Pemesan"]'); }
     get btnTambahProduk() { return $('//button[@class="ant-btn ant-btn-default ant-btn-lg btn"]/*[contains(text(), "Tambah Produk")]'); }
     get inputSearch() { return $('//input[@placeholder="Cari kode penjualan"]'); }

    //section 1 option
     get optTipePTDirect() { return $('//ul[@role="listbox"]/*[@id="react-autowhatever-1--item-0"]'); }
     get optMetodePembayaran() { return $('//div[@data-id="undefined-1"]'); }
     get optTipePenjualanDirect() { return $('//div[@class="rc-virtual-list-holder-inner"]/*[@title="NON-RTP"]'); }
     get optAgenPemesanDirect() { return $('//ul[@role="listbox"]/*[@id="react-autowhatever-1--item-0"]'); }
     get optAlamatKirimDirect() { return $('//*[contains(text(), "Warung")]'); }
     get optSuperAgenDirect() { return $('//*[contains(text(), "Bobby")]'); }

    //section 2 detail list
     get tambahkanProdukDirect() { return $('//button[@class="ant-btn ant-btn-link"]/*[2]'); }
     get pilihProductModalDirect() { return $('//input[@id="Produk"]'); }
     get inputSatuanModalDirect() { return $('//span[@title=""]'); }
     get inputQtyModalDirect() { return $('//input[@id="qty"]'); }
     get btnModalSimpanListDirect() { return $('//span[@data-testid="btn-save"]'); }
     get btnModalSimpanDirect() { return $('//button[@id="updateBtnEdit"]'); }
     get btnModalTambahProdukDirect() { return $('//button[@class="ant-btn ant-btn-default ant-btn-lg btn"]/*[contains(text(), "Tambah Produk")]'); }

    // section 2 order list option 
     get optPilihProductModalDirect() { return $('//ul[@role="listbox"]/*[contains(text(), "ABC Kecap Manis 135ml")]'); }
     get optSatuanModalDirect() { return $('//div[@data-id="undefined-0" and @title="Botol"]'); }
}
