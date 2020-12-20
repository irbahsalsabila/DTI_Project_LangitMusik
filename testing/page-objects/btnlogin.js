
module.exports = {

    url: 'https://www.langitmusik.co.id/',

    elements: {
        btnlogin : by.xpath("//button[normalize-space()='LOGIN']")
    },

    performClick: function () {

        var selector = page.btnlogin.elements.btnlogin;
        return driver.findElement(selector).click();
    }
};
