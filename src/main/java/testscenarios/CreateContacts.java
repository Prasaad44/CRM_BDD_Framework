package testscenarios;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class CreateContacts {
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
	     driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	}

	@When("^Application launched enter \"(.*)\" and \"(.*)\"$")
	public void application_launched_enter_username_and_password(String user,String password)  {
	     driver.findElement(By.name("username")).sendKeys(user);
	     driver.findElement(By.name("password")).sendKeys(password);
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
	
	
	@Then("^Navigate to Create Contact Page and enter \"(.*)\", \"(.*)\" and \"(.*)\" and save$")
	public void create_contacts(String fname, String lname, String position) throws InterruptedException
	{
		WebElement contactElement = driver.findElement(By.xpath("//li//a[@title='Contacts']"));
		
		Actions act = new Actions(driver);
		act.moveToElement(contactElement).build().perform();
		act.moveToElement(driver.findElement(By.xpath("//ul//li//a[@title='New Contact']"))).click().build().perform();
		
		driver.findElement(By.id("first_name")).sendKeys(fname);
		driver.findElement(By.id("surname")).sendKeys(lname);
		driver.findElement(By.id("company_position")).sendKeys(position);
		driver.findElement(By.xpath("//form[@name='contactForm']//descendant::input[@type='submit' and @value='Save']")).click();
		Thread.sleep(3000);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	@After
	public void killDriver()
	{
		System.out.println("Quitting Driver");
		driver.quit();
	}
	
	
}
