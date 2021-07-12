package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class LoginPage {

    private static final WebElement element = null;

    public static WebElement username_field(WebDriver driver) {
        return driver.findElement(By.name("username"));
    }

    public static WebElement username_xpath_field(WebDriver driver) {
        return driver.findElement(By.xpath("//input[@name='username']"));
    }

    public static WebElement password_field(WebDriver driver) {
        return driver.findElement(By.name("password"));
    }

    public static WebElement password_xpath_field(WebDriver driver) {
        return driver.findElement(By.xpath("//input[@name='password']"));
    }

    public static WebElement login_button(WebDriver driver) {
        return driver.findElement(By.name("login"));
    }

    public static WebElement login_xpath_button(WebDriver driver) {
        return driver.findElement(By.xpath("//ion-button[@type='submit']"));
    }
}
