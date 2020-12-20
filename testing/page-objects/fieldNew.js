module.exports = {

    url: 'https://laguku.id/homes#/album',

    elements: {
        fieldNew : by.xpath("//button[normalize-space()='New']")
    },
    
    performClick: function () {
        var selector = page.fieldNew.elements.fieldNew;
        return driver.findElement(selector).click();
    }
};