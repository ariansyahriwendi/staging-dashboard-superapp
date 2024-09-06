export default new class returOrder {
     get order() { return $('//ul[@class="ant-menu ant-menu-root ant-menu-inline ant-menu-light NavigationLayout_menu__i23qT css-1tkgq9j"]/*[9]'); }
     get returpenjualanmenu() { return $('//span[@class="ant-menu-title-content"]/a[@data-testid="Menu-ReturPenjualan"]'); }
     get btnAdd() { return $('//button[@id="btnAdd"]'); }
     get inputSearch() { return $('//input[@data-testid="search-bar"]'); }
     get btnSearch() { return $('//span[@class="ant-input-group-addon"]'); }
     get sumber() { return $('//span[@class="ant-select-selection-item" and @title="Penjualan"]'); }
     get choosenSumber() { return $('//div[@class="rc-virtual-list-holder-inner"]/*[@data-id="undefined-0"]'); }
     get kodeSumbar() { return $('//input[@id="Kode Sumber"]'); }
     get choosenKodeSumbar() { return $('//ul[@role="listbox"]/*[contains(text(), "T-GSA240827-125")]'); }
     get klasifikasi() { return $('//div[@class="ant-col ant-col-24"]/*[@data-testid="component-dropdown"]'); }
     get choosenKlasifikasi() { return $('//div[@class="rc-virtual-list-holder-inner"]/*[@title="Soft Complaint"]'); }
     get btnTambahkanProduk() { return $('//button[@class="ant-btn ant-btn-link"]'); }
     get returPenjualan() { return $('//textarea[@placeholder="Masukkan catatan retur"]'); }
     get btnSimpan() { return $('//div[@data-id="btn-submit-swipeable"]'); }
     get qtyRetur() { return $('//div[@class="ant-input-number-input-wrap"]/input[@class="ant-input-number-input"]'); }
     get alasanRetur() { return $('//div[@class="ant-select ant-select-lg w-full ant-select-single ant-select-show-arrow"]'); }
     get choosenAlasanRetur() { return $('//div[@class="rc-virtual-list-holder-inner"]/*[@title="Rusak"]'); }
     get imgUpload() { return $('//span[@class="ant-upload"]/*[@id="img-upload"]'); }
     get title() { return $('//section[@class="s_qzwtq9Zy"]'); }
}

