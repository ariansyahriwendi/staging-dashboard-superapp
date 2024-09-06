export default new class purchaseOrder {
    // V4
    get purchasing() { return $('//span[@data-testid="Menu-Purchasing"]'); }
    get POv4() { return $('//span[@class="ant-menu-title-content"]/a[@data-testid="Menu-PurchaseOrder V4"]'); }
    get POv3() { return $('//*[@data-testid="Menu-PurchaseOrder V3"]'); }

    // Expect
    get titleV4() { return $('//div[@class="flex gap-size-16"]'); }
    get titleV3() { return $('//section[@class="s_qzwtq9Zy"]'); }

    // List
    get menuPurchasingPO() { return $('//*[@data-testid="menu-Purchase Order V3"]'); }
    get titleListPOPage() { return $('//*[@id="page-title"]//text()="Purchase Order"]'); }
    get btnCreateNewPO() { return $('//*[@id="purchase-create-btn"]'); }
    get btnSearch() { return $('//*[@id="btnSearch"]'); }
    get fieldInputSearch() { return $('//*[@id="po-search-bar"]'); }
    get btnCari() { return $('//*[@data-id="enter-btn"]'); }
    get btnFilter() { return $('//*[@data-id="filter-modal-trigger"]'); }
    get btnExportCSV() { return $('//div[@class="ant-dropdown-trigger PurchaseOrder_btnExportPo__Oc06b"]/*[contains(text() "Export CSV")]'); }
    get textStatusPO() { return $('//*[contains(@id "purchase-status")]'); }
    get textStatusPaymentRequest() { return $('//*[@id="payment-request-prepayment-status-0"]'); }
    get textProductName() { return $('(//*[@class="ant-table-cell"])[11]'); }
    get textProductName2() { return $('(//*[@class="ant-table-cell"])[20]'); }
    get textBonusProductPO() { return $('Card_bonus'); }
    get kodePORow0() { return $('//*[@id="purchase-po-code-0"]'); }
    get kodePORow1() { return $('//tbody[@class="ant-table-tbody"]/*[2]/*[2]/*[1]'); }
    get prepaymentStatus() { return $('//tbody[@class="ant-table-tbody"]/*[2]/*[8]/*/*[contains(text() "Ditolak")]'); }
    get statusPO() { return $('//tbody[@class="ant-table-tbody"]/*[2]/*[10]/*/*[contains(text() "Cancelled")]'); }

    // Edit PO
    get btnDetailRow0() { return $('//*[@id="purchase-po-code-0"]'); }
    get btnEditPO() { return $('//*[@id="btn-edit-po"]'); }
    get btnCancelPO() { return $('//*[@data-testid="btn-cancel"]'); }
    get btnLanjutkanCancel() { return $('//button//*[text()="Ya Lanjutkan"]'); }
    get btnAturProdukBonus() { return $('//*[@id="btn-open-modal-bonus"]'); }
    get btnForceClose() { return $('//*[@data-testid="btn-cancel"]'); }
    get btnSubmitFC() { return $('//*[@data-testid="btn-submit"]'); }

    // Pre Payment
    get btnPrepayment() { return $('//*[@id="btn-request-prepayment"]'); }
    get btnBatalPrepayment() { return $('//[@class="ReactModalPortal"]//[@data-testid="btn-cancel"]'); }
    get btnSubmitPO() { return $('//*[@id="btn-submit-po"]'); }
    get fieldNominalPrepayment() { return $('//*[@id="payment-request-nominal-input"]'); }
    get modalPrepayment() { return $('//*[@class="modal-title" and text()="Request Prepayment"]'); }
    get alertPengajuan() { return $('//*[@class="ant-alert-message" and text()="[Nota Pengajuan] wajib diisi"]'); }
    get reqnavRincianPO() { return $('//[@class="ant-tabs-nav-list"]//[@data-node-key="detail_po"]'); }
    get reqnavNotaPengajuan() { return $('//[@class="ant-tabs-nav-list"]//[@data-node-key="filing_note"]'); }
    get reqnavDiskonOffFaktur() { return $('//[@class="ant-tabs-nav-list"]//[@data-node-key="discount_off_note"]'); }
    get reqnavDocTambahan() { return $('//[@class="ant-tabs-nav-list"]//[@data-node-key="additional_note"]'); }
    get dropzonePrepaymentNota() { return $('//[@class="ant-card-body"]//[@id="upload-file"]'); }
    get fieldDeskripsiPrepayment() { return $('//*[@id="filing_note-note"]'); }
    get btnSimpanPrepayment() { return $('//*[@data-testid="btn-start-searching"]'); }
    get btnYes() { return $('//*[@id="btn-yes"]'); }
    get allertNotification() { return $('(//div[@class="ant-alert-content"])[1]'); }

    // Modal Filter
    get optModalFilterGudang() { return $('//div[@class="ant-tabs-nav-list"]/*[@data-node-key="warehouse_ids"]'); }
    get optModalFilterTipePT() { return $('//div[@class="ant-tabs-nav-list"]/*[@data-node-key="company_type"]'); }
    get optModalFilterSupplier() { return $('//div[@class="ant-tabs-nav-list"]/*[@data-node-key="supplier_id"]'); }
    get optModalFilterPeriode() { return $('//div[@class="ant-tabs-nav-list"]/*[@data-node-key="period"]'); }
    get optModalFilterStatusPO() { return $('//div[@class="ant-tabs-nav-list"]/*[@data-node-key="status"]'); }
    get optModalFilterStatusPrePayment() { return $('//[@class="ant-modal-content"]//[@data-node-key="status_prepayment"]'); }
    get optModalFilterPOPIC() { return $('//div[@class="ant-tabs-nav-list"]/*[@data-node-key="pic"]'); }
    get btnResetFilter() { return $('//button[@data-id="filter-reset-button"]'); }
    get btnTerapkanFilter() { return $('//button[@data-id="filter-apply-button"]'); }

    // Radio Filter
    get optModalFilterPeriodeCustom() { return $('//div[@data-id="filter-radio-periode"]//*[contains(text() "Custom")]'); }
    get optModalFilterPeriode30HariTerakhir() { return $('//div[@data-id="filter-radio-periode"]//*[contains(text() "30 hari terakhir")]'); }
    get optModalFilterPeriodeCustomStart() { return $('//*[@id="date-range-start"]'); }
    get optModalFilterPeriodeCustomEnd() { return $('//*[@id="date-range-end"]'); }

    // Create New PO
    // Section 1 Detail
    get titleCreatePO() { return $('//[@id="page-title"]//[text()="Buat PO"]'); }
    get fieldJenisPO() { return $('//span[@title="Finish Good"]'); }
    get fieldGudang() { return $('(//*[@class="ant-row"])[5]'); }
    get fieldTipePT() { return $('//*[@id="po-type-pt-dropdown"]'); }
    get fieldSupplier() { return $('//*[@id="po-supplier-dropdown"]'); }
    get textAlamatPT() { return $('//*[@id="form-purchase-order"]/div/div[3]/div/div/div[2]/div/div[5]/div/div/p[2]/text()[1]'); }
    get fieldTanggalPO() { return $('//*[@id="tanggal-po-dropdown"]'); }
    get fieldTanggalKirimPO() { return $('//*[@id="tanggal-kirim-dropdown"]'); }
    get textAreaCatatanPO() { return $('//*[@id="note-po-textarea"]'); }
    get fieldMetodePembayaran() { return $('//*[@id="metode-pembayaran-po-dropdown"]'); }
    get fieldPengiriman() { return $('//*[@id="delivery-type-dropdown"]'); }
    get fieldPIC() { return $('//*[@id="delivery-pic-dropdown"]'); }
    get fieldBankSupplier() { return $('//*[@id="supplier-bank-dropdown"]'); }
    get textNamaAkunBank() { return $('(//*[@class="ant-row"])[16]'); }
    get textNomorRekening() { return $('(//*[@class="ant-row"])[17]'); }
    get fieldCatatan() { return $('//textarea[@placeholder="Tambahkan catatan untuk PO ini"]'); }

    // Option Section 1 Detail
    get optJenisPOFinishGood() { return $('//*[@data-testid="dropdown-options" and @title="Finish Good"]'); }
    get optJenisPORM() { return $('//*[@data-testid="dropdown-options" and @title="Raw Material"]'); }
    get optGudangPOAloha() { return $('//*[@data-testid="dropdown-options" and @title="Aloha"]'); }
    get optTipePTPO() { return $('//*[@id="PT Coba Coba"]'); }
    get optSupplier() { return $('//*[@data-testid="autosuggest-options" and @id=" PT. Ganda Segar Arum"]'); }
    get optSupplierPKP() { return $('//*[@data-testid="autosuggest-options" and @id="Supplier PKP"]');}

    }
