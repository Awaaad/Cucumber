package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class NavigationPage {
    private static final WebElement element = null;

    public static WebElement menu_button_xpath_field(WebDriver driver) {
        return driver.findElement(By.xpath("//ion-menu-button[@name='menu']"));
    }
}
