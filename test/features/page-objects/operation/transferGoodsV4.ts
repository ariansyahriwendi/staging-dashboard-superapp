export default new class TransferGoodsv4 {
    get logistikModul() { return $('//span[@data-testid="Menu-Logistic"]'); }
    get transferGoodsMenu() { return $('//span[@class="ant-menu-title-content"]/*[@data-testid="Menu-TransferGoods V4"]'); }
    get btnBuatTransferGoods() { return $('//a[@href="/logistic/transfer-goods-v4/new"]'); }
    get gudangAsal() { return $('//div[@data-testid="dropdown-warehouse-from"]/*[2]'); }
    get gudangTujuan() { return $('//div[@data-testid="dropdown-warehouse-to"]/*[2]'); }
    get choosenGudangAsal() { return $('//div[@class="rc-virtual-list-holder-inner"]/*[1]'); }
    get tanggalKirim() { return $('//div[@class="ant-picker-input"]'); }
    get tambahkanProduk() { return $('//div[@class="flex flex-row space-x-12"]'); }
    get btnTambahProduk() { return $('//div[@class="ModalFullFrame_footerRight__c5wWR"]/*[1]'); }
    get pilihProduk() { return $('//*[contains(text(), "Pilih produk")]'); }
    get choosenPilihProduk() { return $('//div[@name="44S Hijau Beras 5kg"]'); }
    get pilihSatuan() { return $('//*[contains(text(), "Pilih satuan")]'); }
    get choosenPilihSatuan() { return $('//div[@title="Karton"]'); }
    get qtyTransfer() { return $('//div[@class="ant-input-number ant-input-number-sm css-1vp3ixv"]'); }
    get btnSimpan() { return $('//div[@class="ModalFullFrame_footerRight__c5wWR"]/*[2]'); }
    get btnSimpanUtama() { return $('//div[@class="ant-col css-1vp3ixv"]/*[@type="button"]'); }
    get btnKonfirmasiValidasi() { return $('//*[contains(text(), "Ya, Simpan")]'); }
    get validasiSimpan() { return $('//main[@class="ModalIllustration_modalBody__VucKT"]'); }
    get title() { return $('//div[@class="flex gap-size-16"]'); }
    get kodeTransfer() { return $('//tbody[@class="ant-table-tbody"]/*/*[3]/*'); }
}
