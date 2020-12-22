# ./features/uploadinvalid.features

Feature: Upload Music on the website
    As a user
    I want to be able to upload music

    @success
    Scenario: User success to upload on the website
        Given user redirect to page
        And user click Gabung 
        And user can see pop up login
        And user fill wrong username
        And user fill wrong password
        When user click login to laguku
        Then user invalid to login