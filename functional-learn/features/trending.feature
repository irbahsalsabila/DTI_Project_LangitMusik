# ./features/trending.features

Feature: See trending on the website
    As a user
    I want to be able to see trending

    @success
    Scenario: User success to see trending on the website
        Given user browse langitmusik page
        When user click trending button 
        Then user can see trending page
