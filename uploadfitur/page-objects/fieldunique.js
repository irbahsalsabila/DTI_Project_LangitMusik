
module.exports = {

    url: 'https://laguku.id/homes#/album',

    elements: {
        fieldunique : by.xpath("//textarea[@class='form-control ng-valid ng-touched ng-dirty ng-valid-parse ng-empty']")
    },

    performFill: function () {

        var selector = page.fieldunique .elements.fieldunique;
        return driver.findElement(selector).sendKeys(shared.id.uniquesearch);
    }
};
