export default new class setoranPage {
    public get tabHistorySetoran() { return $('//*[@id="__next"]//div/main//div[2]/div[3]//div[1]/div[1]//div[1]'); }
    public get inputSearch() { return $('//*[@id="rc-tabs-0-panel-history"]//div[1]//div/span'); }
    public get filterTanggalSetoran() { return $('//*[@id="rc-tabs-0-panel-history"]//div[2]//div/span[2]'); }
    public get filterGudang() { return $('//*[@id="rc-tabs-0-panel-history"]//div[2]/span[1]'); }
    public get filterJenisSetoran() { return $('//*[@id="rc-tabs-0-panel-history"]//div[2]/span[2]'); }
    public get namaPembuatSetoran() { return $('//*[@id="rc-tabs-0-panel-history"]//div[2]/span[3]'); }
    public get totalNilaiPesanan() { return $('//*[@id="rc-tabs-0-panel-history"]//div[3]/div[1]/span[1]'); }
    public get totalPembayaranCash() { return $('//*[@id="rc-tabs-0-panel-history"]//div[3]/div[2]/span[1]'); }
    public get totalPembayaranTransfer() { return $('//*[@id="rc-tabs-0-panel-history"]//div[3]/div[3]/span[1]'); }
    public get detailKodeSetoran() { return $('//*[@id="rc-tabs-0-panel-history"]//div[4]//div/table/tbody/tr[1]/td[2]/div/button'); }
    public get colNilaiTransaksi() { return $('//*[@id="rc-tabs-0-panel-history"]//div[4]//div/table/tbody/tr[1]/td[6]/div/span'); }
    public get detailNilaiTransaksi() { return $('//*[@id="rc-tabs-0-panel-history"]//div[4]//div/table/tbody/tr[1]/td[6]/div/button'); }
    public get btnPrint() { return $('//*[@id="rc-tabs-0-panel-history"]//div[4]//div/table/tbody/tr[1]/td[9]'); }
    public get btnAddSetoran() { return $('//*[@data-testid="btn-add-setoran"]'); }
    public get dropdownTipeOrder() { return $('//*[@id="rc_select_5"]'); }
    public get dropdownGudang() { return $('//*[@id="rc_select_6"]'); }
    public get dropdownNamaKurir() { return $('//*[@id="__next"]//div/main//div[2]/div[3]/form/div[1]/div[2]/main//div[3]//div/span[2]'); }
    public get btnDownloadTemplate() { return $('//*[@data-testid="btn-donwload-template"]'); }
    public get btnTemplateCSV() { return $('/html/body/div[6]//div[2]/div/div[2]//div/main//div[1]/a'); }
    public get uploadCSV() { return $('//*[@data-testid="form-file-import"]'); }
    public get submitImport() { return $('//*[@id="submit-import"]'); }
    public get btnImportCSV() { return $('//*[@data-testid="btn-import-csv"]'); }
    public get btnExportCSV() { return $('//*[@data-testid="btn-export-csv"]'); }
    public get printBuktiSetor() { return $('//*[@data-testid="btn-print"]'); }
    public get btnBuatSetoran() { return $('//*[@data-testid="btn-setor"]'); }
}
