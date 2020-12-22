
module.exports = {

    url: 'https://www.langitmusik.co.id/',

    elements: {
        fieldpassword : by.xpath("//input[@id='pwd']")
    },

    performFill: function () {

        var selector = page.fieldpassword.elements.fieldpassword;
        return driver.findElement(selector).sendKeys(shared.id.password1);
    }
};
