package testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
	features = "CRMFeatures/CreateContacts.feature",
	glue = {"testscenarios"},
	format = {"html:TestResults","json:TestJsonResults/CRMResults.json","pretty"},
	strict = true,
	dryRun = false,
	monochrome = true
)

public class TestRunner {

}
