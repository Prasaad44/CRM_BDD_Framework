package temps;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginTest {

	WebDriver driver;
	
	
	@Before
	public void setUpGeckoDriverPath()
	{		
		System.setProperty("webdriver.gecko.driver", "G:\\Eclipse_Workspace\\AllJars\\geckodriver-v0.19.1-win64\\geckodriver.exe");		
	}
	
	@Given("^Invoke Firefox Browser$")
	public void invoke_Firefox_Browser()  {
	     driver = new FirefoxDriver();
	     
	}

	@Then("^Launch CRM Application$")
	public void launch_CRM_Application()  {
	     driver.get("https://www.freecrm.com");
	     driver.manage().window().maximize();
	     driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
	}

	@When("^Application launched enter username and password$")
	public void application_launched_enter_username_and_password()  {
	     driver.findElement(By.name("username")).sendKeys("naveenk");
	     driver.findElement(By.name("password")).sendKeys("test@123");
	}

	@Then("^Click on login button$")
	public void click_on_login_button()  {
	     driver.findElement(By.xpath("//div[@class='input-group-btn']//input")).click();	     
	}

	@SuppressWarnings("deprecation")
	@Then("^Validate user navigated to Home screen$")
	public void validate_user_navigated_to_Home_screen()  {
		driver.switchTo().frame("mainpanel");
	    String actualTxt =  driver.findElement(By.xpath("//td[@class='headertext']//a[target=(contains(text(),'blank'))]")).getText();
	    Assert.assertEquals("Upgrade your account", actualTxt);
	}
	
	@After
	public void killDriver()
	{
		System.out.println("Quitting Driver");
		driver.quit();
	}
	
	
}
