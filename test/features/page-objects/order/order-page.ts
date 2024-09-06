import { $ } from '@wdio/globals';

export default new class Order {

    get order(){ 
        return $('//span[contains(text(),"Order")]');
    }

    get penjualan(){ 
        return $('//span[@class="ant-menu-title-content"]/a[@data-testid="Menu-Penjualan"]');
    }

    get buttonAdd(){ 
        return $('//button[@id="btnAdd"]');
    }

    get marketplace(){ 
        return $('//*[contains(text(), "MarketPlace")]');
    }
      
}