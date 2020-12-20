module.exports = function () {
    this.Given(/^user redirect to laguku page$/, function () {
        helpers.loadPage('https://laguku.id/#/home.html')
    });

    this.When(/^user click Gabung Sekarang$/, function () {
        driver.then(function(){
            return page.fieldGabung.performClick();  
        })
    });

    this.When(/^user can see login pop up$/, function () {
        driver.then(function () {
            return driver.findElements(by.xpath("//div[@class='modal-dialog modal-md']//div[@class='modal-content']"))
        
            .then(function (elements) {
                expect(elements.length).to.not.equal(0);
            });
        });    
    });
    this.When(/^user fill username$/, function () {
        driver.then(function(){
            return page.fieldUser.performFill();  
        })
    }); 
    this.When(/^user fill password$/, function () {
        driver.then(function(){
            return page.fieldPass.performFill();  
        })
    });
    this.When(/^user click login$/, function () {
        driver.then(function(){
            return page.fieldLogin.performClick();  
        })
    });
    this.Given(/^user click album$/, function () {
        helpers.loadPage('https://laguku.id/homes#/album')
    });
    this.When(/^user choose album and click view/, function () {
        driver.then(function(){
            return page.fieldview.performClick();  
        })
    // });
    //     return driver.wait(until.elementsLocated(by.css("tbody tr:nth-child(1) td:nth-child(11) div:nth-child(1) a:nth-child(2)")), 50000).then(function () {
      
    //             // return the promise of an element to the following then.
    //         return driver.findElements(by.css("tbody tr:nth-child(1) td:nth-child(11) div:nth-child(1) a:nth-child(2)")).click();
    //     });
        // return driver.findElements(by.xpath("//span[normalize-space()='View']")).click()
    });
    
    this.When(/^user can see pop up album form$/, function () {
        driver.then(function () {
            return driver.findElements(by.xpath("div[@id='albumModal']//div[@class='row']"))
        
            .then(function (elements) {
                expect(elements.length).to.equal(0);
            });
        });   
    }); 
    this.When(/^user click add song$/, function () {
        return driver.wait(until.elementsLocated(by.xpath("//button[normalize-space()='Add Song']")), 40000).then(function () {
      
                // return the promise of an element to the following then.
            return driver.findElements(by.xpath(("//button[normalize-space()='Add Song']")));
        });
    });
    this.When(/^user add song pop up$/, function () {
        driver.then(function () {
            return driver.findElements(by.xpath("//div[@id='songsAddModal']//div[@class='modal-content']"))
        
            .then(function (elements) {
                expect(elements.length).to.equal(0);
            });
        });    
    });
    this.When(/^user click new$/, function () {
        return driver.wait(until.elementsLocated(by.xpath("/html[1]/body[1]/div[5]/div[2]/div[1]/div[2]/div[1]/div[7]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/button[1]")), 50000).then(function () {
      
            // return the promise of an element to the following then.
            return driver.findElements(by.xpath(("/html[1]/body[1]/div[5]/div[2]/div[1]/div[2]/div[1]/div[7]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/button[1]")));
        });
    });
    this.Given(/^user input Song Name$/, function () {
        driver.then(function(){
            return page.fieldsong.performFill();  
        })
    });

}
