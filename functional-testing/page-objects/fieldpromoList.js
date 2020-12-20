module.exports = {

    url: 'https://www.langitmusik.co.id/new/promo',

    elements: {
        // Tidak muncul promo karena sedang tidak ada promo hari ini, sedangkan kemarin ada pakai xpath ini berhasil.
        fieldpromoList : by.xpath("//div[@ng-repeat='promo in promoDataList']//a[@class='item-media-content']")
    },
    
    performClick: function () {
        var selector = page.fieldpromoList.elements.fieldpromoList;
        return driver.findElement(selector).click();
    }
};