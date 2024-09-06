export default new class MutasiStockPage {
     get inventory() {return $('//span[@data-testid="Menu-Stock"]');}
     get mutasiStockMenu() {return $('//span[@class="ant-menu-title-content"]/*[@data-testid="Menu-MutasiStock V4"]');}
     get stockBagusTab() {return $('//div[@class="ant-tabs-nav-list"]/*[@data-node-key="good"]');}
     get stockRusakTab() {return $('//div[@class="ant-tabs-nav-list"]/*[@data-node-key="good"]');}
     get stockVendorTab() {return $('//div[@class="ant-tabs-nav-list"]/*[@data-node-key="good"]');}
     get stockBagus() {return $('//*[@id="rc-tabs-0-tab-good"]/div/div/span');}
     get stockRusak2() {return $('//*[@id="rc-tabs-0-tab-good"]/div/div/span');}
     get stockVendor3() {return $('//*[@id="rc-tabs-0-tab-good"]/div/div/span');}
     get startDate() {return $('//*[@data-testid="filter-datepicker-good"]');}
     get choosenStartDate() {return $('//td[@title="2023-09-01"]');}
     get btnPrevyear() {return $('//button[@aria-label="super-prev-year"]');}
     get startTime() {return $('//*[@id="rc-tabs-0-panel-good"]//div[1]/div[2]/main//div[1]/div[2]//div/span/input');}
     get endDate() {return $('//*[@data-testid="filter-end-date-good"]');}
     get endTime() {return $('//*[@id="rc-tabs-0-panel-good"]//div[1]/div[2]/main//div[2]/div[2]//div/span/input');}
     get warehouseGoods() {return $('//*[@data-testid="filter-warehouse-good"]/*[2]');}
     get choosenWarehouseGoods() {return $('//div[@class="rc-virtual-list-holder-inner"]/*[@title="Aloha"]');}
     get productGoods() {return $('//*[@data-testid="filter-product-good"]/*[2]');}
     get choosenProductGoods() {return $('//div[@class="rc-virtual-list-holder-inner"]/*[@title="SKL"]');}
     get satuan() {return $('//div[@data-testid="filter-unit-good"]/*[2]');}
     get choosenSatuan() {return $('//div[@class="rc-virtual-list-holder-inner"]/*[@title="Karton"]');}
     get unitGoods() {return $('//*[@data-testid="filter-unit-good"]');}
     get companyType() {return $('//*[@data-testid="filter-company-type-good"]');}
     get choosenCompanyType() {return $('//div[@class="rc-virtual-list-holder-inner"]/*[@title="PT. Putra Abyudaya Nusantara"][1]');}
     get btnShow() {return $('//*[@id="rc-tabs-0-panel-good"]/div/div[1]/div[2]/main/div/div[7]/button/span');}
     get btnExport() {return $('//button[@data-testid="btn-export-csv"]');}
     get mutasiListStockBagus() {return $('(//tbody[@class="ant-table-tbody"])[position()=1]');}
     get listMutasiStockBagus() {return $('(//tbody[@class="ant-table-tbody"])[position()=1]/*[1]/*[6]');}
     get listMutasiStockBagus2() {return $('(//tbody[@class="ant-table-tbody"])[position()=1]/*[2]/*[6]');}
     get listMutasiStockBagus3() {return $('(//tbody[@class="ant-table-tbody"])[position()=1]/*[3]/*[6]');}
     get listMutasiStockBagus4() {return $('(//tbody[@class="ant-table-tbody"])[position()=1]/*[4]/*[6]');}
     get listMutasiStockBagus5() {return $('(//tbody[@class="ant-table-tbody"])[position()=1]/*[5]/*[6]');}
     get mutasiListStockRusak() {return $('(//tbody[@class="ant-table-tbody"])[position()=1]');}
     get mutasiListStockVendor() {return $('(//tbody[@class="ant-table-tbody"])[position()=1]');}
     get productList() {return $('//tbody[@class="ant-table-tbody"]/*[2]/*[2]/*');}
     get transferId() {return $('//tbody[@class="ant-table-tbody"]/*[2]/*[3]/*');}
     get title() {return $('//div[@class="flex gap-size-16"]');}
     get warehouseKolomValidation() {return $('//*[@data-testid="filter-warehouse-good"]/*[3]');}
     get produkKolomValidation() {return $('//*[@data-testid="filter-product-good"]/*[3]');}
     get satuanKolomValidation() {return $('//*[@data-testid="filter-unit-good"]/*[3]');}
     get tipePtKolomValidation() {return $('//*[@data-testid="filter-company-type-good"]/*[3]');}
     get mutasiList1() {return $('(//tbody[@class="ant-table-tbody"])/*[1]');}
     get mutasiList2() {return $('(//tbody[@class="ant-table-tbody"])/*[2]');}
     get mutasiList3() {return $('(//tbody[@class="ant-table-tbody"])/*[3]');}
     get mutasiList4() {return $('(//tbody[@class="ant-table-tbody"])/*[4]');}
     get mutasiList5() {return $('(//tbody[@class="ant-table-tbody"])/*[5]');}
     get mutasiList6() {return $('(//tbody[@class="ant-table-tbody"])/*[6]');}
     get mutasiList7() {return $('(//tbody[@class="ant-table-tbody"])/*[7]');}
     get mutasiList8() {return $('(//tbody[@class="ant-table-tbody"])/*[8]');}
     get mutasiList9() {return $('(//tbody[@class="ant-table-tbody"])/*[9]');}
     get mutasiList10() {return $('(//tbody[@class="ant-table-tbody"])/*[10]');}
}
