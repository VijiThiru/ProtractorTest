 @sanity
Feature: Login and verify the basic test
   
    Scenario : Launch and verify the application
        Given I launch the browser and pass the url
        When I landed on HomePage
        Then I verify HomePage elements 
    
    Scenario : Verify Authentication
        Given I landed on HomePage
        When I click on SignIn button
        Then I verify Authentication page

        

    

    