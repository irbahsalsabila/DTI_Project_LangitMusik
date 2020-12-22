module.exports = {

    url: 'https://laguku.id/homes#/album',

    elements: {
        isitanggal : by.xpath("//input[@class='form-control ng-empty ng-touched ng-dirty ng-invalid ng-invalid-date']")
    },

    performFill: function () {

        var selector = page.isitanggal.elements.isitanggal;
        return driver.findElement(selector).sendKeys(shared.id.tanggal);
    }
};
