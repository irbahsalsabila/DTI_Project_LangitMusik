module.exports = {

    url: 'https://laguku.id/homes#/home.html',

    elements: {
        Gabung : by.xpath("//button[normalize-space()='GABUNG SEKARANG']")
    },
    performClick: function () {

        var selector = page.fieldGabung.elements.Gabung;
        return driver.findElement(selector).click();
    }
};
