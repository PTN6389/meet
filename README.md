## Features

**_FILTER EVENTS BY CITY_**

As a user, I should be able to “filter events by city”, So that I can see the list of events that take place in that city

**Scenario**: When user hasn't searched for a city, show upcoming events from all cities

> **Given** user hasn’t searched for any city
> **When** the user opens the app
> **Then** the user should see a list of all upcoming events

**Scenario**: User should see a list of suggestions when they search for a city

> **Given** the main page is open
> **When** user starts typing in the city textbox
> **Then** the user should see a list of cities (suggestions) that match what they’ve typed

**Scenario**: User can select a city from the suggested list

> **Given** the user was typing “Berlin” in the city textbox
> **And** the list of suggested cities is showing
> **When** the user selects a city (e.g., “Berlin, Germany”) from the list
> **Then** their city should be changed to that city (i.e., “Berlin, Germany”)
> **And** the user should receive a list of upcoming events in that city

**_SHOW/HIDE AN EVENT'S DETAILS_**

As a user, I want to show/hide an event’s details, So that I can see more details for the event as needed

**Scenario**: An event element is collapsed by default

> **Given** that an event is displayed
> **When** I view the event
> **Then** I can see the details are collapsed by default

**Scenario**: User can expand an event to see its details

> **Given** that an event’s details is collapsed
> **When** I choose to expand the event
> **Then** I can see the event details

**Scenario**: User can collapse an event to hide its details

> **Given** that an event’s details is expanded
> **When** I choose to collapse the event
> **Then** I can see the event details are hidden

**_SPECIFY NUMBER OF EVENTS_**

As a user, I want to specify the number of events, So that I can determine how many events I see at one time

**Scenario**: When user hasn’t specified a number, 32 is the default number

> **Given** that I see a list of events displayed
> **When** there are 32 or more events displayed
> **And** I have not specified the number of events I want to see
> **Then** I can see 32 events at one time

> **When** there are less than 32 events
> **And** I have not specified the number of events I want to see
> **Then** I can see all the events displayed

**Scenario**: User can change the number of events they want to see

> **Given** that I see a list of events displayed
> **When** I enter the number of events I want to see
> **Then** I can see the number of events specified at one time

**_USE THE APP WHEN OFFLINE_**

As a user, I want to use the app when offline, So that I can see the events I viewed the last time

**Scenario**: Show cached data when there’s no internet connection

> **Given** that there is no internet connection
> **When** I view the events
> **Then** I can see the events from the cached data

**Scenario**: Show error when user changes the settings (city, time range)

> **Given** that there is no internet connection
> **When** I change the settings
> **Then** I can see an error message

**_DATA VISUALIZATION_**

As a user, I want to see a chart showing upcoming events in each city, So that I know what events are organized in which city

**Scenario**: Show a chart with the number of upcoming events in each city

> **Given** that there are events in a city
> **When** I view the chart for upcoming events
> **Then** I can see the number of upcoming events in each city

## Serverless Functions

Authorization

Get all events

Get events based on city

Get event details

Get number of events for each city
