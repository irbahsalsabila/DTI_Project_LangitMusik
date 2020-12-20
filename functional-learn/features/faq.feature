# ./features/faq.features

Feature: See faq on the website
    As a user
    I want to be able to see faq

    @success
    Scenario: User success to see faq on the website
        Given user browse langit musikk page
        When user click link FAQ
        Then user can see the faq on the website
