Feature: Login to CRM Application

  Scenario: Open Firefox and Login to CRM
    Given Invoke Firefox Browser
    Then Launch CRM Application
    When Application launched enter username and password
    Then Click on login button
    And Validate user navigated to Home screen
