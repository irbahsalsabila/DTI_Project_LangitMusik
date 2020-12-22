module.exports = function () {
    this.Given(/^user redirect to the LagukuPage$/, function () {
        helpers.loadPage('https://laguku.id/#/home.html')
    });

    this.Given(/^user klik Gabung Sekarang$/, function () {
        driver.then(function () {
            return page.fieldGabung.performClick();
        })
    });

    this.Given(/^user can see a login pop up$/, function () {
        driver.then(function () {
            return driver.findElements(by.xpath("//div[@class='modal-dialog modal-md']//div[@class='modal-content']"))
        
                .then(function (elements) {
                    expect(elements.length).to.not.equal(0);
                });
        });
    });
    this.Given(/^user fill an username$/, function () {
        driver.then(function () {
            return page.fieldUser.performFill();
        })
    });
    this.Given(/^user fill a password$/, function () {
        driver.then(function () {
            return page.fieldPass.performFill();
        })
    });
    this.Given(/^user click button login$/, function () {
        driver.then(function () {
            return page.fieldLogin.performClick();
        })
    });
    this.Given(/^user click button album$/, function () {
        helpers.loadPage('https://laguku.id/homes#/album')
    });
    this.Given(/^user choose album then click view$/, function () {
        return driver.wait(until.elementsLocated(by.css("tbody tr:nth-child(1) td:nth-child(11) div:nth-child(1) a:nth-child(2)")), 50000).then(function () {
      
            // return the promise of an element to the following then.
            return driver.findElements(by.css("tbody tr:nth-child(1) td:nth-child(11) div:nth-child(1) a:nth-child(2)"));
        }).then(function () {
            return page.view.perform();
        })
    });
    
    this.Given(/^user can see pop up$/, function () {
        driver.then(function () {
            return driver.findElements(by.xpath("div[@id='albumModal']//div[@class='row']"))

        });
    });
    this.Given(/^user click button add song$/, function () {
        return driver.wait(until.elementsLocated(by.xpath("//button[normalize-space()='Add Song']")), 40000).then(function () {
      
            // return the promise of an element to the following then.
            return driver.findElements(by.xpath(("//button[normalize-space()='Add Song']")));
        }).then(function () {
            return page.fieldAdd.performClick();
        })
    });
    this.Given(/^user click button new$/, function () {
        driver.then(function () {
            return page.fieldNew.performClick();
        })
    });
    this.Given(/^user get a pop up fill the information/, function () {
        return driver.wait(until.elementsLocated(by.xpath("//div[@id='songsModal']//div[@class='modal-body']")), 40000).then(function () {
            return driver.findElements(by.xpath(("//div[@id='songsModal']//div[@class='modal-body']")));
        })
    });
    this.Given(/^user input Song Name$/, function () {
        driver.then(function () {
            return page.fieldsong.performFill()
        })
    });
    this.Given(/^user input Song Name Original$/, function () {
        driver.then(function () {
            return page.fieldsongname.performFill()
        })     
    });
    this.When(/^user click button save$/, function () {
        driver.then(function () {
            return page.saveklik.performClick();
        })            
    });
    this.Then(/^user get a pop up notif$/, function () {
        driver.then(function () {
            return driver.findElements(by.xpath("//div[@class='bootbox-body']"))
    
        });              
    });
}

