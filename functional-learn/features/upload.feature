# ./features/upload.feature

Feature: Upload music on the website
    As a user
    I want to be able to upload music

    @success
    Scenario: User success to upload on the website
        Given user browse langit musik page
        And user click menu upload lagu
        And user click gabung sekarang 
        When user click masuk button
        Then user can see lagukuId page