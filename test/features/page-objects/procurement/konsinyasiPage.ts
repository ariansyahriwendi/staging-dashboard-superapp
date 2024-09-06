export default new class konsinyasiPage {
     get order() { return $('//ul[@class="ant-menu ant-menu-root ant-menu-inline ant-menu-light NavigationLayout_menu__i23qT css-1tkgq9j"]/*[9]'); }
     get konsinyasimenu() { return $('//span[@class="ant-menu-title-content"]/a[@data-testid="Menu-Konsinyasi"]'); }
     get inputsearch() { return $('//input[@data-id="input-search"]'); }
     get btnAdd() { return $('//button[@data-id="btn-add-consigment"]'); }
     get chooseGudang() { return $('//input[@id="Gudang"]'); }
     get choosenGudang() { return $('//ul[@role="listbox"]/*[1]'); }
     get chooseSalesPIC() { return $('//input[@id="Sales PIC"]'); }
     get choosenSalesPIC() { return $('//ul[@role="listbox"]/*[1]'); }
     get chooseTipePT() { return $('//input[@id="Tipe PT"]'); }
     get choosenTipePT() { return $('//ul[@role="listbox"]/*[9]'); }
     get chooseCustomer() { return $('//input[@id="Customer"]'); }
     get choosenCustomer() { return $('//ul[@role="listbox"]/*[1]'); }
     get alamat() { return $('//input[@id="Alamat"]'); }
     get choosenAlamat() { return $('//ul[@role="listbox"]/*[1]'); }
     get tglKirim() { return $('//input[@title="26-08-2024"]'); }
     get choosenTglKirim() { return $('//td[@title="2024-08-26"]'); }
     get periodeKonsinyasi() { return $('//span[@class="ant-select-selection-search"]/*[@type="search"]'); }
     get simpan() { return $('//button[@data-testid="btn-submit"]'); }
     get btnTambahkanProduk() { return $('//button[@class="ant-btn ant-btn-link"]'); }
     get btnTambah() { return $('//button[@data-id="btn-add-product"]'); }
     get btnSimpan() { return $('//div[@data-id="btn-submit-swipeable"]'); }
     get namaProduk() { return $('//div[@class="s_2qdcJJli   w-full"]/*[@type="text"]'); }
     get choosenProduk() { return $('//ul[@role="listbox"]/*[1]'); }
     get satuan() { return $('//div[@class="ant-select ant-select-lg w-full ant-select-single ant-select-show-arrow"]/*[@class="ant-select-selector"]'); }
     get choosenSatuan() { return $('//div[@data-testid="dropdown-options" and @title="Bag"]'); }
     get qty() { return $('//input[@id="qty"]'); }
     get btnSimpanModal() { return $('//div[@class="d-flex justify-center"]/*[@data-testid="btn-save"]'); }
     get btnBatalModal() { return $('//div[@class="d-flex justify-center"]/*[@data-testid="btn-cancel"]'); }
     get title() { return $('//section[@class="s_qzwtq9Zy"]'); }
     get kodeTransaksi() { return $('//tbody[@class="ant-table-tbody"]/*[2]/*[@data-id="invoice-0"]'); }
}
