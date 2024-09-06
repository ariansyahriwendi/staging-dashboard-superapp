export default new class IncomingGoods {
     get inputSearch() { return $('//*[@id="searchBar"]/div/span/span/span[1]/input'); }
     get btnCari() { return $('//*[@data-id="enter-btn"]'); }
     get btnFilterGudang() { return $('//*[@id="site-layout-background"]/div/div[2]/div[1]/div/div[2]/div/button[1]'); }
     get btnFilterPeriode() { return $('//*[@id="site-layout-background"]/div/div[2]/div[1]/div/div[2]/div/button[2]'); }
     get btnFilterSupplier() { return $('//*[@id="site-layout-background"]/div/div[2]/div[1]/div/div[2]/div/button[3]'); }
     get btnFilterStatus() { return $('//*[@id="site-layout-background"]/div/div[2]/div[1]/div/div[2]/div/button[4]'); }
     get btnExport() { return $('//*[@data-id="export-csv"]'); }
     get tabSupplier() { return $('//*[@id="rc-tabs-0-tab-purchasing"]/div/span'); }
     get tabReturSupplier() { return $('//*[@id="rc-tabs-0-tab-returnSupplier"]/div/span'); }
     get tabTolakan() { return $('//*[@id="rc-tabs-0-tab-canceled"]/div/span'); }
     get tabReturPenjualan() { return $('//*[@id="rc-tabs-0-tab-returnOrder"]/div/span'); }
     get tabTransferStock() { return $('//*[@id="rc-tabs-0-tab-transfer"]/div/span'); }
     get tabConsignment() { return $('//*[@id="rc-tabs-0-tab-transfer"]/div/span'); }
     get tabTolakanVendor() { return $('//*[@id="rc-tabs-0-tab-canceledPending"]/div/span'); }
}
