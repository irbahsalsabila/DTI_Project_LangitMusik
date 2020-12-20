module.exports = {

    url: 'https://www.langitmusik.co.id/',

    elements: {
        invalidsearch: by.xpath("//input[@ng-model='txtSearch']")
    },

    performFill: function () {

        var selector = page.invalidsearch.elements.invalidsearch;
        return driver.findElement(selector).sendKeys(shared.id.Invalid);
    }
};
