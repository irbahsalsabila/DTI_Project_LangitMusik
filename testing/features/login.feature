# ./features/login.features

Feature: Login on the website
    As a user
    I want to login in the website

    @success
    Scenario: User success to login on the website
        Given user browsing langit musik page
        And user cliklogin
        And user get a pop up login
        And user fill misdn
        And user fillpassword
        When user click button login
        Then user sucess to login