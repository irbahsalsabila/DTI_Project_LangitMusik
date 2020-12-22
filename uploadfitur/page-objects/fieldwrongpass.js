
module.exports = {

    url: 'https://laguku.id/homes#/home.html',

    elements: {
        fieldwrongpass : by.xpath("//input[@placeholder='TYPE YOUR PASSWORD']")
    },

    performFill: function () {

        var selector = page.fieldwrongpass.elements.fieldwrongpass;
        return driver.findElement(selector).sendKeys(shared.id.wrongpass);
    }
};
