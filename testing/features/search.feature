# ./features/search.features

Feature: Searching Music on the website
    As a user
    I want to be able to searching music

    @success
    Scenario: User success to searching music on the website
        Given user browse langit music page
        When user field Search song
        Then user can get the information about the song