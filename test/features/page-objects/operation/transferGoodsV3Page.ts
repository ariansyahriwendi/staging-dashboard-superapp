export default new class transferGoodsv3 {
     get logistikModul() {return $('//span[@data-testid="Menu-Logistic"]');}
     get transferGoodsMenu() {return $('//span[@class="ant-menu-title-content"]/*[@data-testid="Menu-TransferGoods"]');}
     get buttonAddTransferGoods() {return $('//button[@data-id="btn-add-tg"]');}
     get warehouseFrom() {return $('//div[@data-id="warehouse_from"]');}
     get warehouseTo() {return $('//div[@data-id="warehouse_to"]');}
     get choosenWarehouseFrom() {return $('//div[@data-id="opt-from-input-0"]');}
     get choosenWarehouseTO() {return $('//div[@data-id="opt-to-input-0"]');}
     get companyType() {return $('//input[@id="Company Type"]');}
     get choosenCompanyType() {return $('//ul[@role="listbox"]/*[@id="react-autowhatever-1--item-0"]');}
     get addProduct() {return $('//button[@data-id="btn-add-list"]');}
     get inputSearch() {return $('//input[@placeholder="Cari SKU atau nama produk"]');}
     get kategoriFinishedGoods() {return $('//div[@data-testid="btn-input-segment"]/*[@id="btn0"]');}
     get kategoriRawmaterial() {return $('//div[@data-testid="btn-input-segment"]/*[@id="btn1"]');}
     get kategoriAddProduct() {return $('//div[@data-testid="category"]');}
     get addKarton() {return $('//div[@class="action-container"]/*[1]/*[3]');}
     get addPack() {return $('//div[@class="action-container"]/*[2]/*[3]');}
     get btnSearchProduct() {return $('//button[@data-testid="btn-start-searching"]');}
     get btnSelectedProduct() {return $('//span[@data-id="btn-selected-prod"]');}
     get btnClear() {return $('//button[@data-id="btn-reset"]');}
     get btnCancel() {return $('//span[@class="font-normal"]//button[@data-id="btn-cancel"]');}
     get btnAddProduct() {return $('//button[@data-id="btn-add-product"]');}
     get btnCreateTransfer() {return $('//button[@data-id="btn-submit"]');}
     get btnOpenSearch() {return $('//button[@data-id="btn-search-tg"]');}
     get btnInputSearch() {return $('//input[@placeholder="Cari Transfer Goods"]');}
    
    // Expect
     get productList() {return $('//tbody[@class="ant-table-tbody"]/*[2]/*[2]/*');}
     get transferId() {return $('//tbody[@class="ant-table-tbody"]/*[2]/*[3]/*');}
}
