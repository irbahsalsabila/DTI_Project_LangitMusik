# ./features/search.features

Feature: Searching on the website
    As a user
    I want to be able to searching

    @success
    Scenario: User success to searching on the website
        Given user browse langitmusik page
        When user fill search field
        Then user can see the information
