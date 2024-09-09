import { $ } from '@wdio/globals';

export default new class Logistic {

    get logistic(){ 
        return $('//span[@data-testid="Menu-Logistic"]');
    }

    get newOutgoingGoods() {
        return $('//span[@class="ant-menu-title-content"]/a[@data-testid="Menu-OutgoingGoods V4"]');
    }

    get tanggalKirim() {
        return $('//span[@class="ant-select-selection-item" and @title="Besok"]');
    }

    get tanggalHariIni() {
        return $('//div[@class="rc-virtual-list-holder-inner"]/*[@title="Hari Ini"]')
    }

    get inputKodeInvoice() {
            return $('//input[@placeholder="Cari kode invoice"]');
        }

    get inputKodeTransaksi() {
            return $('//input[@placeholder="Cari kode transaksi"]');
        }

    get checkbox() {
        return $('//*[@id="__next"]/div/div/main/div/div/div[2]/div[3]/div[2]/div[4]/div/div/div/div/div[2]/table/tbody/tr[2]/td[2]/label/span/input');
    }

    get detailOutgoing() {
        return $('//div[@class="Table_regular__xL3JO"]/*/*[contains(text(), "Detail Outgoing")]');
    }

    get assignKurir() {
        return $('//*[@id="__next"]/div/div/main/div/footer/div/div/div[2]/button[3]');
    }

    get driver() {
        return $('//*[@label="Driver"]');
    }

    get inputDriver() {
        return $('//div[@class="ant-select-selector"]/*[2][contains(text(), "Pilih driver")]');
    }


    get choosenDriver() {
        return $('//div[@title="SANGAR SURABAYA"]');
    }

    get noPlate() {
        return $('//*[@label="No. Plat"]');
    }

    get choosenPlate() {
        return $('//div[@title="S9430NG"]')
    }

    get btnAssign() {
        return $('(//*[contains(text(), "Assign")])[3]');
        // return $('//div[@data-id="btn-submit-modal"]'); //('//div[@class="ModalHalfFrame_footerRight__zutId"]/*[@type="button"]');
    }

    get btnSiapDikirim() {
        return $('//*[@class="ant-col flex gap-size-8 css-1vp3ixv"]/*[4]');
    }

    get btnUbahStatus() {
        return $('//div[@class="ModalIllustration_modalDefaultFooter___8umW"]/*[1]')
    }

    get btnDikirim() {
        return $('//div[@class="ant-col flex gap-size-8 css-1vp3ixv"]/*[4]');
    }


}