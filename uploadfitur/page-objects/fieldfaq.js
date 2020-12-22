module.exports = {

    url: 'https://www.langitmusik.co.id/',

    elements: {
        fieldfaq : by.xpath("//span[normalize-space()='FAQ']")
    },
    
    performClick: function () {
        var selector = page.fieldfaq.elements.fieldfaq;
        return driver.findElement(selector).click();
    }
};
