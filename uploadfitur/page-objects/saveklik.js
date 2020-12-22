
module.exports = {

    url: 'https://laguku.id/homes#/album',

    elements: {
        saveklik : by.xpath("//button[@ng-click='saveSong()']")
    },

    performClick: function () {

        var selector = page.saveklik.elements.saveklik;
        return driver.findElement(selector).click();
    }
};
