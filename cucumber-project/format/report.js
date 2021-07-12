$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/sample.feature");
formatter.feature({
  "line": 1,
  "name": "Login into an application under test.",
  "description": "",
  "id": "login-into-an-application-under-test.",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login to the application.",
  "description": "",
  "id": "login-into-an-application-under-test.;login-to-the-application.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open Chrome browser and launch the application.",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters username onto the UserName field.",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters a password into the Password field.",
  "keyword": "And "
});
formatter.step({
  "line": 11,
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