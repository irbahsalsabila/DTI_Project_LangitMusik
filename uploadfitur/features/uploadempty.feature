# ./features/uploadempty.features

Feature: Upload Music on the website
    As a user
    I want to be able to upload music

    @success
    Scenario: User fail to upload on the website because user just fill song name
        Given user redirect to the LagukuPage
        And user klik Gabung Sekarang
        And user can see a login pop up
        And user fill an username
        And user fill a password
        And user click button login
        And user click button album
        And user choose album then click view
        And user can see pop up 
        And user click button add song
        And user click button new 
        And user get a pop up fill the information
        And user input Song Name
        And user input Song Name Original
        When user click button save
        Then user get a pop up notif



        
        