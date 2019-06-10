 @sanity
Feature: Login and verify the basic test
   
    Scenario outline: Launch and verify the application
        Given I launch the application
        When I click on signin
        Then I verify title
        |var|increment|result|
        |<var>|<increment>|<result>|
        Examples:
        | var | increment | result |
        | 100 |         5 |    105 |
        |  99 |      1234 |   1333 |

    

    