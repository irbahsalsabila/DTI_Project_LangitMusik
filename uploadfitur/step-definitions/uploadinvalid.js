module.exports = function () {
    this.Given(/^user redirect to page$/, function () {
        helpers.loadPage('https://laguku.id/#/home.html')
    });

    this.When(/^user click Gabung$/, function () {
        driver.then(function(){
            return page.fieldGabung.performClick();  
        })
    });

    this.When(/^user can see pop up login$/, function () {
        driver.then(function () {
            return driver.findElements(by.xpath("//div[@class='modal-dialog modal-md']//div[@class='modal-content']"))
        
            .then(function (elements) {
                expect(elements.length).to.not.equal(0);
            });
        });    
    });
    this.When(/^user fill wrong username$/, function () {
        driver.then(function(){
            return page.fieldwronguser.performFill();  
        })
    }); 
    this.When(/^user fill wrong password$/, function () {
        driver.then(function(){
            return page.fieldwrongpass.performFill();  
        })
    });
    this.When(/^user click login to laguku$/, function () {
        driver.then(function(){
            return page.fieldLogin.performClick();  
        })
    });
    this.Then(/^user invalid to login$/, function () {
        driver.then(function () {
            return driver.findElements(by.xpath("//a[@class='dropdown-toggle']"))
        
                .then(function (elements) {
                    expect(elements.length).to.not.equal(0);
                });
        })
    });
        
}
