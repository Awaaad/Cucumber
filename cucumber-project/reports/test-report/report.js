$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("sample.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Feature: Login"
    },
    {
      "line": 2,
      "value": "#"
    },
    {
      "line": 3,
      "value": "#  I want to login on Keepfy"
    },
    {
      "line": 4,
      "value": "#"
    },
    {
      "line": 5,
      "value": "#  Background:"
    },
    {
      "line": 6,
      "value": "#    Given I go to \u0027/login\u0027"
    },
    {
      "line": 7,
      "value": "#    And the field \u0027email\u0027 is empty"
    },
    {
      "line": 8,
      "value": "#    And the field \u0027password\u0027 is empty"
    },
    {
      "line": 9,
      "value": "#"
    },
    {
      "line": 10,
      "value": "#  Scenario: Error on empty fields"
    },
    {
      "line": 11,
      "value": "#    When I click on \u0027enter\u0027"
    },
    {
      "line": 12,
      "value": "#    Then field \u0027email\u0027 should be with error"
    },
    {
      "line": 13,
      "value": "#    And field \u0027password\u0027 should be with error"
    },
    {
      "line": 14,
      "value": "#"
    },
    {
      "line": 15,
      "value": "#  Scenario: Wrong password"
    },
    {
      "line": 16,
      "value": "#    When I type \u0027john.test@keepfy.com\u0027 in \u0027email\u0027"
    },
    {
      "line": 17,
      "value": "#    And I type \u0027123456\u0027 in \u0027password\u0027"
    },
    {
      "line": 18,
      "value": "#    And I click on \u0027enter\u0027"
    },
    {
      "line": 19,
      "value": "#    Then I should see \u0027E-mail or password is incorrect\u0027"
    },
    {
      "line": 20,
      "value": "#"
    },
    {
      "line": 21,
      "value": "#  Scenario: Login successfully"
    },
    {
      "line": 22,
      "value": "#    Given I have users:"
    },
    {
      "line": 23,
      "value": "#      | name           | email             | password |"
    },
    {
      "line": 24,
      "value": "#      | Vitor Batista  | vitor@keepfy.com  | abcdef   |"
    },
    {
      "line": 25,
      "value": "#    When I type \u0027vitor@keepfy.com\u0027 in \u0027email\u0027"
    },
    {
      "line": 26,
      "value": "#    And I type \u0027abcdef\u0027 in \u0027password\u0027"
    },
    {
      "line": 27,
      "value": "#    And I click on \u0027enter\u0027"
    },
    {
      "line": 28,
      "value": "#    Then I shouldn\u0027t see \u0027Access your account\u0027"
    }
  ],
  "line": 31,
  "name": "Login into an application under test.",
  "description": "",
  "id": "login-into-an-application-under-test.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 30,
      "name": "@smokeTest"
    }
  ]
});
formatter.scenario({
  "line": 33,
  "name": "Login to the application.",
  "description": "",
  "id": "login-into-an-application-under-test.;login-to-the-application.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 35,
  "name": "Open Chrome browser and launch the application.",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "User enters username onto the UserName field.",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "User enters a password into the Password field.",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User clicks on the Login button.",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});