Feature: Order

  Scenario: As a user, I want to use order
    Given I send login url
    When I login with credential
    Then I see usernameDisplay

    Given I am on the dashboard
    When I click analytic