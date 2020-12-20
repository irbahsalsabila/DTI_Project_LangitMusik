module.exports = function () {
    this.Given(/^user browsing langit musik page$/, function () {
        helpers.loadPage('https://www.langitmusik.co.id/')
    });
    this.Given(/^user cliklogin$/, function () {
        driver.then(function () {
            return page.loginBtn.performClick();
        })
    });
    this.Given(/^user get a pop up login$/, function () {
        driver.then(function () {
            return driver.findElements(by.xpath("//body/div[@class='pop-outer loginBox']/div[@class='pop-inner']/div[@class='dvLoginHolder']/div[@class='col-md-12']/div[1]"))
        
            .then(function (elements) {
                expect(elements.length).to.not.equal(0);
            });
        });    
    });
    this.Given(/^user fill misdn$/, function (callback) {
        driver.then(function () {
            return page.fieldmisdn.performFill();
        })
    });



}