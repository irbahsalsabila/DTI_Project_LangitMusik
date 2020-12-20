module.exports = {

    url: 'https://www.langitmusik.co.id/',
    //url elemen itu berada 

    elements: {
        trendingBtn: by.xpath("//span[normalize-space()='Trending']")
    },

    performClick: function () {

        var selector = page.trendingBtn.elements.trendingBtn;
        return driver.findElement(selector).click();

   }
};
