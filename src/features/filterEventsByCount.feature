Feature: Specify number of events

    Scenario: When user has not specified a number, 32 is the default number
        Given that I see a list of events displayed
        When I have not specified the number of events I want to see
        Then I can see 32 events at one time

    Scenario: User can change the number of events they want to see
        Given that I see a list of events displayed
        When I enter the number of events I want to see
        Then I can see the number of events specified at one time
