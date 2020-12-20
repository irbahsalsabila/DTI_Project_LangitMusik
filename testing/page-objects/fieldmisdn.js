
module.exports = {

    url: 'https://www.langitmusik.co.id/',

    elements: {
        fieldmisdn : by.xpath("//input[@id='msisdn']")
    },

    performFill: function () {

        var selector = page.fieldmisdn.elements.fieldmisdn;
        return driver.findElement(selector).sendKeys(shared.id.misdn);
    }
};
