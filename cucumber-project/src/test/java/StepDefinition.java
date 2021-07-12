import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import pages.LoginPage;

public class StepDefinition {
    WebDriver driver;
    @Given("Open Chrome browser and launch the application.")
    public void openChromeBrowserAndLaunchTheApplication() {

        System.setProperty("webdriver.chrome.driver", "C:/Users/mal/Downloads/webdriver/chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("https://somedico-pharmacy.web.app/login");
    }

    @When("User enters wrong username onto the username field.")
    public void userEntersWrongUsernameOntoTheUsernameField() {
        LoginPage.username_xpath_field(driver).sendKeys("demo@demo.com");
    }

    @And("User enters wrong password into the password field.")
    public void userEntersWrongPasswordIntoThePasswordField() {
        LoginPage.password_xpath_field(driver).sendKeys("demo");
    }

    @When("User clicks on the Login button.")
    public void userClicksOnTheLoginButton() {
        LoginPage.login_xpath_button(driver).click();
    }

    @Then("User should not be redirected to homepage.")
    public void userShouldNotBeRedirectedToHomepage() throws InterruptedException {
        Thread.sleep(5000);
        if (!driver.getCurrentUrl().equals("https://somedico-pharmacy.web.app/dashboard")) {
            driver.quit();
        };
    }

    @When("User enters correct username onto the username field.")
    public void userEntersCorrectUsernameOntoTheUsernameField() {
        LoginPage.username_xpath_field(driver).sendKeys("awad");
    }

    @And("User enters correct password into the password field.")
    public void userEntersCorrectPasswordIntoThePasswordField() {
        LoginPage.password_xpath_field(driver).sendKeys("mal");
    }

    @Then("User should be redirected to homepage.")
    public void userShouldBeRedirectedToHomepage() throws InterruptedException {
        Thread.sleep(5000);
        if (driver.getCurrentUrl().equals("https://somedico-pharmacy.web.app/dashboard")) {
            driver.quit();
        };
    }
}
