# ./features/promo.features

Feature: Promo on the website
    As a user
    I want to be able to promo

    @success
    Scenario: User success to see promo on the website
        Given user browse langit musik page
        And user clik button content promo
        And user can see promo page
        When user clik ongoing promo
        Then user can see ongoing promo