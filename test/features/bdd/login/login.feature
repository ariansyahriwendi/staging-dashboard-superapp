Feature: Login

  Scenario: As a user, I want to login to superapp dashboard
    Given I send login url
    When I login with credential
    Then I see usernameDisplay


