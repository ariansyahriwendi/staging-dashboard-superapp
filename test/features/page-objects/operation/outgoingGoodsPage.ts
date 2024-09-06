export default new class OutgoingGoods {
     get logistikModul() {return $('//span[@data-testid="Menu-Logistic"]');}
     get outGoingGoodsMenu() {return $('//span[@class="ant-menu-title-content"]/a[@data-testid="Menu-OutgoingGoods V4"]');}
     get inputSearch() {return $('//input[@class="ant-input ant-input-sm css-1vp3ixv"]');}
     get tglKirim() {return $('//span[@class="ant-select-selection-item" and @title="Besok"]');}
     get customTgl() {return $('//div[@class="rc-virtual-list-holder-inner"]/*[@title="Custom"]');}
     get choosenTglKirim() {return $('//td[@title="2024-08-01"]');}
     get detailOutgoing() {return $('//div[@class="Table_regular__xL3JO"]/*/*[contains(text(), "Detail Outgoing")]');}
     get checkbox() {return $('//span[@class="ant-checkbox"]/*[@data-id="checkbox-0"]');}
     get checkBox() {return $('//tr[@data-row-key="1435418983"]/*[2]/*');}
     get btnSiapDikirim() {return $('//div[@data-id="btn-Siap Dikirim"]');}
     get btnDikirim() {return $('//div[@class="ant-col flex gap-size-8 css-1vp3ixv"]/*[4]');}
     get assignKurir() {return $('//div[@data-id="btn-assign-kurir"]');}
     get driver() {return $('//div[@class="ant-select-selector"]/*[2][contains(text(), "Pilih driver")]');}
     get choosenDriver() {return $('//div[@title="SANGAR SURABAYA"]');}
     get noPlate() {return $('//div[@class="ant-select-selector"]/*[2][contains(text(), "Pilih nomor plat kendaraan")]');}
     get choosenPlate() {return $('//div[@title="S9430NG"]');}
     get btnAssign() {return $('//div[@data-id="btn-submit-modal"]');}
     get btnUbahStatus() {return $('//div[@class="ModalIllustration_modalDefaultFooter___8umW"]/*[1]');}
     get tabMotor() {return $('//div[@class="Tabs_label__kDTL_"]/*[contains(text(), "Motor")]');}
     get tabMobil() {return $('//div[@data-node-key="car"]');}
     get openSearchBtn() {return $('//button[@data-id="btn-search-outgoing"]');}
     get openSearchDetailBtn() {return $('//button[@data-id="btn-search-detail-outgoing"]');}
     get inputSearchKodeInvoice() {return $('//input[@placeholder="Kode Invoice"]');}
     get btnCari() {return $('//button[@type="button"]/*[@data-id="enter-btn"]');}
     get tanggalKirim() {return $('//div[@data-node-key="period"]');}
     get Custom() {return $('//*[contains(text(), "Custom")]');}
     get choosenDate() {return $('//td[@title="August 1, 2024"]');}
     get seeDetailsBtn() {return $('//a[@data-id="btn-detail-outgoing"]');}
     get gantiVendor() {return $('//div[@data-id="btn-ganti-vendor"]');}
     get vendorTujuan() {return $('//*[contains(text(), "Pilih Vendor")]');}
     get alasan() {return $('//*[contains(text(), "Pilih alasan vendor diganti")]');}
     get btnGanti() {return $('//div[@data-id="btn-submit-modal"]');}
     get btnCancel() {return $('//div[@data-id="btn-cancel-modal"]');}
     get btnFilter() {return $('//button[@data-id="filter-modal-trigger"]');}
     get tglKirimModal() {return $('//div[@class="ant-tabs-nav-list"]/*[@data-node-key="warehouse_id"]');}
     get gudangModal() {return $('//div[@class="ant-tabs-nav-list"]/*[@data-node-key="period"]');}
     get tipeVendorModal() {return $('//div[@class="ant-tabs-nav-list"]/*[@data-node-key="vendor_type"]');}
     get cityModal() {return $('//div[@class="ant-tabs-nav-list"]/*[@data-node-key="city"]');}
     get kecamatanModal() {return $('//div[@class="ant-tabs-nav-list"]/*[@data-node-key="district"]');}
     get btnTerapkan() {return $('//button[@data-id="filter-apply-button"]');}
     get startDateTglKirimModal() {return $('//input[@id="date-range-start"]');}
     get endDateTglKirimModal() {return $('//input[@id="date-range-end"]');}
     get hariIniTglKirimModal() {return $('//div[@class="ant-radio-group ant-radio-group-outline"]//*[contains(text(), "Hari ini")]');}
     get besokTglKirimModal() {return $('//div[@class="ant-radio-group ant-radio-group-outline"]//*[contains(text(), "Besok")]');}
     get kemarinTglKirimModal() {return $('//div[@class="ant-radio-group ant-radio-group-outline"]//*[contains(text(), "Kemarin")]');}
     get customTglKirimModal() {return $('//div[@class="ant-radio-group ant-radio-group-outline"]//*[contains(text(), "Custom")]');}
     get title() {return $('//div[@class="flex gap-size-16"]');}
     get statusPengiriman() {return $('//tbody[@class="ant-table-tbody"]/*[2]/*[11]/*[2]/*');}
}
