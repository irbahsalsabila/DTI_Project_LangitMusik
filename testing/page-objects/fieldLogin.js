module.exports = {

    url: 'https://laguku.id/homes#/home.html',

    elements: {
        fieldLogin : by.xpath("//button[normalize-space()='MASUK']")
    },
    
    performClick: function () {

        var selector = page.fieldLogin.elements.fieldLogin;
        return driver.findElement(selector).click();
    }
};
