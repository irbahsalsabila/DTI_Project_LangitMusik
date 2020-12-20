# ./features/upload1.features

Feature: Upload Music on the website Langit Music
    As a user
    I want to be able to upload music

    @success
    Scenario: User success to upload on the website
        Given user browse in langit music page
        When user click link Upload Lagu
        Then user redirect to Laguku page
       