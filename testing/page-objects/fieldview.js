module.exports = {

    url: 'https://laguku.id/homes#/album',

    elements: {
        fieldview: by.xpath("//tbody/tr[3]/td[1]")
    },
    
    performClick: function () {

        var selector = page.fieldview.elements.fieldview;
        return driver.findElement(selector).click();
    }
};