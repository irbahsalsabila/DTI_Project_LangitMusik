module.exports = {

    url: 'https://laguku.id/homes#/home.html',

    elements: {
        fieldwronguser: by.xpath("//input[@placeholder='ENTER YOUR USERNAME']")
    },

    performFill: function () {

        var selector = page.fieldwronguser.elements.fieldwronguser;
        return driver.findElement(selector).sendKeys(shared.id.wronguser);
    }
};
