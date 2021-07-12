Feature: Login into an application under test.

  Scenario: Unsuccessful login to the application.

    Given Open Chrome browser and launch the application.

    When User enters wrong username onto the username field.

    And User enters wrong password into the password field.

    When User clicks on the Login button.

    Then User should not be redirected to homepage.

  Scenario: Successful login to the application.

    Given Open Chrome browser and launch the application.

    When User enters correct username onto the username field.

    And User enters correct password into the password field.

    When User clicks on the Login button.

    Then User should be redirected to homepage.