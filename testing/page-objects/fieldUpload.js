module.exports = {

    url: 'https://www.langitmusik.co.id/',

    elements: {
        fieldUpload : by.xpath("//span[normalize-space()='Upload Lagu']")
    },
    
    performClick: function () {

        var selector = page.fieldUpload.elements.fieldUpload;
        return driver.findElement(selector).click();
    }
};
