module.exports = {

    url: 'https://laguku.id/homes#/album',

    elements: {
        fieldAdd : by.xpath("//button[normalize-space()='Add Song']")
    },
    
    performClick: function () {
        var selector = page.fieldAdd.elements.fieldAdd;
        return driver.findElement(selector).click();
    }
};
