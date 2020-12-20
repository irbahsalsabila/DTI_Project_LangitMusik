module.exports = {

    url: 'https://laguku.id/homes#/home.html',

    elements: {
        fieldUser: by.xpath("//input[@placeholder='ENTER YOUR USERNAME']")
    },

    performFill: function () {

        var selector = page.fieldUser.elements.fieldUser;
        return driver.findElement(selector).sendKeys(shared.id.username);
    }
};
