
module.exports = {

    url: 'https://laguku.id/homes#/home.html',

    elements: {
        fieldMasuk : by.xpath("//button[normalize-space()='MASUK']")
    },
    
    performClick: function () {

        var selector = page.fieldMasuk.elements.fieldMasuk;
        return driver.findElement(selector).click();
    }
};
