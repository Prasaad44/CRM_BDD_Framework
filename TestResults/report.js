$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CRMFeatures/CreateContacts.feature");
formatter.feature({
  "line": 1,
  "name": "Login to CRM Application",
  "description": "",
  "id": "login-to-crm-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Open Firefox and Login to CRM",
  "description": "",
  "id": "login-to-crm-application;open-firefox-and-login-to-crm",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Invoke Firefox Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Launch CRM Application",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Application launched enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Validate user navigated to Home screen",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Navigate to Create Contact Page and enter \"\u003cfirstname\u003e\", \"\u003clastname\u003e\" and \"\u003cposition\u003e\" and save",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "login-to-crm-application;open-firefox-and-login-to-crm;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 13,
      "id": "login-to-crm-application;open-firefox-and-login-to-crm;;1"
    },
    {
      "cells": [
        "naveenk",
        "test@123",
        "vinayak",
        "mahadev",
        "leader"
      ],
      "line": 14,
      "id": "login-to-crm-application;open-firefox-and-login-to-crm;;2"
    },
    {
      "cells": [
        "naveenk",
        "test@123",
        "ajith",
        "kumar",
        "actor"
      ],
      "line": 15,
      "id": "login-to-crm-application;open-firefox-and-login-to-crm;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 138987,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Open Firefox and Login to CRM",
  "description": "",
  "id": "login-to-crm-application;open-firefox-and-login-to-crm;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Invoke Firefox Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Launch CRM Application",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Application launched enter \"naveenk\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Validate user navigated to Home screen",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Navigate to Create Contact Page and enter \"vinayak\", \"mahadev\" and \"leader\" and save",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CreateContacts.invoke_Firefox_Browser()"
});
formatter.result({
  "duration": 5981399649,
  "status": "passed"
});
formatter.match({
  "location": "CreateContacts.launch_CRM_Application()"
});
formatter.result({
  "duration": 8748797332,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naveenk",
      "offset": 28
    },
    {
      "val": "test@123",
      "offset": 42
    }
  ],
  "location": "CreateContacts.application_launched_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 137532432,
  "status": "passed"
});
formatter.match({
  "location": "CreateContacts.click_on_login_button()"
});
formatter.result({
  "duration": 5874419193,
  "status": "passed"
});
formatter.match({
  "location": "CreateContacts.validate_user_navigated_to_Home_screen()"
});
formatter.result({
  "duration": 61597037,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vinayak",
      "offset": 43
    },
    {
      "val": "mahadev",
      "offset": 54
    },
    {
      "val": "leader",
      "offset": 68
    }
  ],
  "location": "CreateContacts.create_contacts(String,String,String)"
});
formatter.result({
  "duration": 7517694368,
  "status": "passed"
});
formatter.after({
  "duration": 435337331,
  "status": "passed"
});
formatter.before({
  "duration": 63292,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Open Firefox and Login to CRM",
  "description": "",
  "id": "login-to-crm-application;open-firefox-and-login-to-crm;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Invoke Firefox Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Launch CRM Application",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Application launched enter \"naveenk\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Validate user navigated to Home screen",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Navigate to Create Contact Page and enter \"ajith\", \"kumar\" and \"actor\" and save",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CreateContacts.invoke_Firefox_Browser()"
});
formatter.result({
  "duration": 4544677577,
  "status": "passed"
});
formatter.match({
  "location": "CreateContacts.launch_CRM_Application()"
});
formatter.result({
  "duration": 8394086753,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naveenk",
      "offset": 28
    },
    {
      "val": "test@123",
      "offset": 42
    }
  ],
  "location": "CreateContacts.application_launched_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 75186575,
  "status": "passed"
});
formatter.match({
  "location": "CreateContacts.click_on_login_button()"
});
formatter.result({
  "duration": 6052301138,
  "status": "passed"
});
formatter.match({
  "location": "CreateContacts.validate_user_navigated_to_Home_screen()"
});
formatter.result({
  "duration": 58936178,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ajith",
      "offset": 43
    },
    {
      "val": "kumar",
      "offset": 52
    },
    {
      "val": "actor",
      "offset": 64
    }
  ],
  "location": "CreateContacts.create_contacts(String,String,String)"
});
formatter.result({
  "duration": 7287468519,
  "status": "passed"
});
formatter.after({
  "duration": 405482429,
  "status": "passed"
});
});