module.exports = {

    url: '',

    elements: {
        view : by.css("tbody tr:nth-child(1) td:nth-child(11) div:nth-child(1) a:nth-child(2)")
    },
    
    perform: function () {
        var selector = page.view.elements.view;
        return driver.findElement(selector).click();
    }
};
