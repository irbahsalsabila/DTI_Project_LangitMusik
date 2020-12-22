
module.exports = {

    url: 'https://laguku.id/homes#/album',

    elements: {
        fieldsong : by.xpath("//input[@ng-model='$parent.songName']")
    },

    performFill: function () {

        var selector = page.fieldsong.elements.fieldsong;
        return driver.findElement(selector).sendKeys(shared.id.song);
    }
};
