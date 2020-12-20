# ./features/upload.features

Feature: Upload Music on the website
    As a user
    I want to be able to upload music

    @success
    Scenario: User success to upload on the website
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
        And user input Song Name
        And user input Song Name Original
        And User choose genre
        And user input Issue Date
        And user input Uniq Search Keyword
        And user choose type music
        And user input Track No
        And user click generate for label song code
        And user choose Price
        And user click add lyric
        And user add lyric
        And user click save to lyric
        And user input audio in format wav/mp3
        And user click browse
        And user click Upload
        And user wait until process upload done
        And user get a pop up file succes to upload
        And user click save
        And user get a pop up to save data
        And user click yes
        When user get a pop up sucess to upload music
        Then user click ok



        
        