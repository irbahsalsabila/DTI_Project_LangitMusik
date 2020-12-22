module.exports = {
    url: 'https://laguku.id/homes#/album',

    elements: {
        clickgenre : by.xpath("//select[@class='form-control ng-valid ng-touched ng-dirty ng-not-empty ng-valid-parse']")
    },

    performFill: function () {

        var selector = page.clickgenre.elements.clickgenre;
        return driver.findElement(selector).sendKeys("Dance");
    }
};
