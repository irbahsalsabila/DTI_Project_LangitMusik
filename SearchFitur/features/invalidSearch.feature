# ./features/invalidSearch.features

Feature: Searching on the website
    As a user
    I want to be able to searching

    @success
    Scenario: User success to searching on the website
        Given user langitmusik page
        When user fill invalid search
        Then user cannot see correct information