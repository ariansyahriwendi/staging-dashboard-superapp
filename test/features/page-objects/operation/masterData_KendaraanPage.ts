export default new class materData_KendaraanPage {
     get masterData() {return $('//span[@data-testid="Menu-MasterData"]');}
     get kendaraanV4Menu() {return $('//span[@class="ant-menu-title-content"]/*[@data-testid="Menu-KendaraanV4"]');}
     get buatKendaraan() {return $('//button[@data-testid="btn-create-vehicle"]');}
     get inputSearch() {return $('//input[@placeholder="Cari nama kendaraan"]');}
     get btnExport() {return $('//button[@data-testid="btn-export-csv"]');}
     get btnImport() {return $('//button[@data-testid="btn-import-csv"]');}
     get Motor() {return $('//span[@class="ant-radio ant-wave-target"]/*[@value="Motor"]');}
     get Mobil() {return $('//span[@class="ant-radio ant-wave-target ant-radio-checked"]/*[@value="Mobil"]');}
     get inputKendaraan() {return $('//input[@placeholder="Ketik atau cari nama kendaraan"]');}
     get inputPlatNomor() {return $('//input[@placeholder="Ketik plat nomor kendaraan"]');}
     get switchStatusBtn() {return $('//button[@data-testid="vehicle-form-select-status"]');}
     get batalBtn() {return $('//button[@type="button"]/*[contains(text(), "Batal")]');}
     get simpanBtn() {return $('//button[@type="button"]/*[contains(text(), "Simpan")]');}
     get simpanBtnKonfirmasi() {return $('//button[@data-testid="btn-confirm-modal"]');}
     get tidakJadiBtn() {return $('//button[@class="ant-btn css-1vp3ixv ant-btn-ghost ant-btn-lg Button_button_QU6uO Button_ghostt9rWe Button_large_Z_hZd"]');}
     get kembaliKeFormBtn() {return $('//button[@type="button"]/*[contains(text(), "Kembali ke Form")]');}
     get title() {return $('//div[@class="flex gap-size-16"]');}
     get namaKendaraan() {return $('//tbody[@class="ant-table-tbody"]//tr[2]//td[3]');}
     get errorPlatNomor() {return $('//div[@class="VehicleForm_title__C5G_4"]');}
}
