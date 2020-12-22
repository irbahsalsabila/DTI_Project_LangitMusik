module.exports = {

    url: 'https://laguku.id/homes#/album',

    elements: {
        fieldsongname : by.xpath("//input[@ng-model='$parent.songNameOriginal']")
    },

    performFill: function () {

        var selector = page.fieldsongname.elements.fieldsongname;
        return driver.findElement(selector).sendKeys(shared.id.song);
    }
};
