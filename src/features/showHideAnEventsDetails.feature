Feature: Show/Hide an Event's details

    Scenario:  An event element is collapsed by default.
        Given that an event is displayed
        When I view the event
        Then I can see the details are collapsed by default

    Scenario: User can expand an event to see its details.
        Given that an events details is collapsed
        When I choose to expand the event
        Then I can see the event details

    Scenario: User can collapse an event to hide its details.
        Given that an events details is expanded
        When I choose to collapse the event
        Then I can see the event details are hidden