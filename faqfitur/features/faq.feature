# ./features/trending.features

Feature: See FAQ on the website
    As a user
    I want to see FAQ on the website

    @success
    Scenario: User success to see FAQ the website
       Given website langit music
       When user click link FAQ
       Then User can see the FAQ on the website
       