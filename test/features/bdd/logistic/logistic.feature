Feature: Logistic

  Scenario: As a user, I want to use order
    Given I send login url
    When I login with credential
    Then I see usernameDisplay

    Given I am on the dashboard v4
    # When I click logistic
    # And I click new outgoing goods
    # And I click tanggal kirim
    # And I select hari ini

    # And I input kode invoice
    # And I click detail outgoing

    # And I input kode transaksi
    And I click checkbox
    And I click assign kurir
    And I select driver
    And I select plat nomor
    And I click assign

    And I click checkbox
    And I click siap dikirim
    And I click ubah status

    When I click checkbox
    And I click dikirim
    And I click ubah status

