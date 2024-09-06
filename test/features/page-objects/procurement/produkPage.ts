export default new class produkPage {
     get purchasing() { return $('//ul[@class="ant-menu ant-menu-root ant-menu-inline ant-menu-light NavigationLayout_menu__i23qT css-1tkgq9j"]/*[5]'); }
     get ProductMenu() { return $('//span[@class="ant-menu-title-content"]/a[@data-testid="Menu-Product"]'); }
     get addProductbtn() { return $('//button[@id="product-create-btn"]'); }
     get imgUpload() { return $('//input[@id="img-upload"]'); }
     get tipeProduct() { return $('//span[@title="Non RTP"]'); }
     get subTipe() { return $('//input[@id="input-subtipe-product"]'); }
     get nameProduct() { return $('//input[@id="input-name-product"]'); }
     get brand() { return $('//input[@id="input-brand_id-product"]'); }
     get category() { return $('//input[@id="input-category_id-product"]'); }
     get btnSave() { return $('//button[@id="btnSave"]'); }
     get tipeProductChoosen() { return $('//*[contains(text(), "Non RTP") and @class="ant-select-item-option-content"]'); }
     get subTipeChoosen() { return $('//*[contains(text(), "SNI")]'); }
     get brandChoosen() { return $('//*[contains(text(), "Keraton")]'); }
     get categoryChoosen() { return $('//*[contains(text(), "Bahan Dapur")]'); }
     get satuanChoosen() { return $('//li[contains(text(), "Bag")]'); }
     get addAtribute() { return $('//span[contains(text(), "Tambah Atribut")]'); }
     get satuan() { return $('//input[@id="input-product-unit"]'); }
     get conversion() { return $('//input[@id="conversion"]'); }
     get inputProduct() { return $('//input[@id="input-product-content"]'); }
     get updateBtnedit() { return $('//button[@id="updateBtnEdit"]'); }
     get title() { return $('//section[@class="s_qzwtq9Zy"]'); }
}
