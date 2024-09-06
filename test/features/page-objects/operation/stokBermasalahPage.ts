export default new class StokBermasalah {
     get createStokBermasalah() {return $('//*[@data-testid="add-button"]');}
     get inputSearch() {return $('//*[@data-testid="search-bar"]');}
     get btnCari() {return $('//*[@id="searchBar"]/div/span/span/span[2]/button');}
     get filterGudang() {return $('//*[@data-testid="btn-filter-warehouse"]');}
     get filterPeriode() {return $('//*[@data-testid="btn-filter-period"]');}
     get filterTipeStok() {return $('//*[@data-testid="btn-filter-type"]');}
     get filterStatus() {return $('//*[@data-testid="btn-filter-status"]');}
     get btnExport() {return $('//*[@data-testid="export-csv-bad-stock"]');}
     get tabDaftarPengajuan() {return $('//*[@data-node-key="daftar-pengajuan"]');}
     get btnExpand() {return $('//*[@id="rc-tabs-3-panel-daftar-pengajuan"]/div[1]//div/table/tbody/tr[2]/td[1]/button');}
     get source() {return $('//*[@data-testid="source-0"]');}
     get kodeNG() {return $('//*[@id="rc-tabs-2-panel-daftar-pengajuan"]//div[1]//div/table/tbody/tr[2]/td[3]/a');}
     get colStatus() {return $('//*[@id="rc-tabs-3-panel-daftar-pengajuan"]/div/div[1]//div/table/tbody/tr[2]/td[7]/div/span');}
     get btnPrint() {return $('//*[@data-testid="btn-print"]');}
     get tabSkuStokRusak() {return $('//*[@data-node-key="list-badstock"]');}
     get colTotalNG() {return $('//*[@id="rc-tabs-3-panel-list-badstock"]/div/div[1]//div/table/tbody/tr[2]/td[6]/div[2]');}
     get tabSkuStokRetur() {return $('//*[@id="tabs-parent-container"]/div/div[1]/div[1]/div/div[3]');}
     get colTotalNGRetur() {return $('//*[@id="rc-tabs-3-panel-list-returnstock"]/div[1]//div/table/tbody/tr[3]/td[6]/div[2]');}
}
