@A
Feature: Coba

@1
  Scenario: As a user, I want to use coba 1
    Given I send login url
    When I login with credential
    Then I see usernameDisplay

    Given I am on the dashboard
    When I click order

@2
  Scenario: As a user, I want to use coba 2
    Given I send login url
    When I login with credential
    Then I see usernameDisplay

    Given I am on the dashboard
    When I click order