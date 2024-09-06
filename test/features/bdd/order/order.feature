Feature: Order

  Scenario: As a user, I want to use order
    Given I send login url
    When I login with credential
    Then I see usernameDisplay

    Given I am on the dashboard
    When I click order
    When I click penjualan
    When I click button add
    When I click marketplace

    # When I select agen pemesanan
    # When I choose alamat kirim
    # When I select superagen
    # When I input note "ini catatan pemesanan"

    # When I click tambah produk
    # When I select nama produk
    # When I select satuan
    # When I select quantity
    # When I click simpan
    # When I click submit simpan

    # When I click submit final simpan
