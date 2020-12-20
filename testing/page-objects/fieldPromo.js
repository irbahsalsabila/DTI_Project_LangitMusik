module.exports = {

    url: 'https://www.langitmusik.co.id/new/promo',

    elements: {
        fieldPromo : by.xpath("//div[@ng-repeat='promo in promoDataList']//a[@class='item-media-content']")
    },
    
    performClick: function () {
        var selector = page.fieldPromo.elements.fieldPromo;
        return driver.findElement(selector).click();
    }
};
