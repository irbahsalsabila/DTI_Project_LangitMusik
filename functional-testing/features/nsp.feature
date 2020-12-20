# ./features/nsp.features


Feature: See nsp music on the website
    As a user
    I want to be able to see nsp 

    @success
    Scenario: User success to see nsp on the website
        Given user browse langit musik page
        And user click menu FAQ
        And user can see the FAQ on the website
        When user click NSP
        Then user can see NSP page