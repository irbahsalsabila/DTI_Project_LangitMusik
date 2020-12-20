
module.exports = {

    url: 'https://laguku.id/homes#/home.html',

    elements: {
        fieldPass : by.xpath("//input[@ng-model='$parent.songName']")
    },

    performFill: function () {

        var selector = page.fieldPass.elements.fieldPass;
        return driver.findElement(selector).sendKeys(shared.id.song);
    }
};
