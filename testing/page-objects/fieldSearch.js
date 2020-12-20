module.exports = {

    url: 'https://www.langitmusik.co.id/',

    elements: {
        fieldSearch: by.xpath("//input[contains(@placeholder,'Search')]")
    },

    performFill: function () {

        var selector = page.fieldSearch.elements.fieldSearch;
        return driver.findElement(selector).sendKeys(shared.id.Search);
    }
};
