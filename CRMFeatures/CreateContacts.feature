Feature: Login to CRM Application

  Scenario Outline: Open Firefox and Login to CRM
    Given Invoke Firefox Browser
    Then Launch CRM Application
    When Application launched enter "<username>" and "<password>"
    Then Click on login button
    And Validate user navigated to Home screen
    Then Navigate to Create Contact Page and enter "<firstname>", "<lastname>" and "<position>" and save
  
    
    Examples:    
    |username|password|firstname|lastname|position|
    |naveenk|test@123|vinayak|mahadev|leader|
    |naveenk|test@123|ajith|kumar|actor|
    
    