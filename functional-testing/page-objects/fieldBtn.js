module.exports = {

    url: 'https://www.langitmusik.co.id/',

    elements: {
        fieldBtn : by.xpath("//span[normalize-space()='Promo']")
    },
    
    performClick: function () {
        var selector = page.fieldBtn.elements.fieldBtn;
        return driver.findElement(selector).click();
    }
};