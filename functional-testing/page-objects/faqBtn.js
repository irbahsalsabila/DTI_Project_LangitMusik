module.exports = {

    url: 'https://www.langitmusik.co.id/',

    elements: {
        faqBtn : by.xpath("//span[normalize-space()='FAQ']")
    },
    
    performClick: function () {
        var selector = page.faqBtn.elements.faqBtn;
        return driver.findElement(selector).click();
    }
};