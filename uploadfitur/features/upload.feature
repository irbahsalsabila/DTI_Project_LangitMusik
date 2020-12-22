# ./features/upload.features

Feature: Failed to upload music on the website
    As a user
    I want to be able to upload music

    @success
    Scenario: User failed to upload music on the website because user not fill a information
        Given user redirect to laguku page
        And user click Gabung Sekarang
        And user can see login pop up
        And user fill username
        And user fill password
        And user click login
        And user click album
        And user choose album and click view
        And user can see pop up album form
        And user click add song
        And user click new 
        And user get pop up fill the information
        When user click save
        Then user get a pop up to fill information
       


        
        