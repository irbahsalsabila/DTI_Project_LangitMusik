module.exports = {

    url: 'https://laguku.id/homes#/home.html',

    elements: {
        fieldalbum : by.xpath("//span[normalize-space()='ALBUM']]")
    },
    
    performClick: function () {

        var selector = page.fieldalbum.elements.fieldalbum;
        return driver.findElement(selector).click();
    }
};
