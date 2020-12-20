
module.exports = {

    url: 'https://www.langitmusik.co.id/',

    elements: {
        loginBtn : by.id("btnLogin")
    },

    performClick: function () {

        var selector = page.loginBtn.elements.loginBtn;
        return driver.findElement(selector).click();
    }
};
