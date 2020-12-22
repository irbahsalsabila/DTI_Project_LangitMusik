module.exports = function () {
    this.Given(/^user redirect to laguku page$/, function () {
        helpers.loadPage('https://laguku.id/#/home.html')
    });

    this.Given(/^user click Gabung Sekarang$/, function () {
        driver.then(function () {
            return page.fieldGabung.performClick();
        })
    });

    this.Given(/^user can see login pop up$/, function () {
        driver.then(function () {
            return driver.findElements(by.xpath("//div[@class='modal-dialog modal-md']//div[@class='modal-content']"))
        
                .then(function (elements) {
                    expect(elements.length).to.not.equal(0);
                });
        });
    });
    this.Given(/^user fill username$/, function () {
        driver.then(function () {
            return page.fieldUser.performFill();
        })
    });
    this.Given(/^user fill password$/, function () {
        driver.then(function () {
            return page.fieldPass.performFill();
        })
    });
    this.Given(/^user click login$/, function () {
        driver.then(function () {
            return page.fieldLogin.performClick();
        })
    });
    this.Given(/^user click album$/, function () {
        helpers.loadPage('https://laguku.id/homes#/album')
    });
    this.Given(/^user choose album and click view/, function () {
        // driver.then(function(){
        //     return page.fieldview.performClick();  
        // })
        // });
        return driver.wait(until.elementsLocated(by.css("tbody tr:nth-child(1) td:nth-child(11) div:nth-child(1) a:nth-child(2)")), 50000).then(function () {
      
            // return the promise of an element to the following then.
            return driver.findElements(by.css("tbody tr:nth-child(1) td:nth-child(11) div:nth-child(1) a:nth-child(2)"));
        }).then(function () {
            return page.view.perform();
        })
    });
    
    this.Given(/^user can see pop up album form$/, function () {
        driver.then(function () {
            return driver.findElements(by.xpath("div[@id='albumModal']//div[@class='row']"))

        });
    });
    this.Given(/^user click add song$/, function () {
        return driver.wait(until.elementsLocated(by.xpath("//button[normalize-space()='Add Song']")), 40000).then(function () {
      
            // return the promise of an element to the following then.
            return driver.findElements(by.xpath(("//button[normalize-space()='Add Song']")));
        }).then(function () {
            return page.fieldAdd.performClick();
        })
    });
    this.Given(/^user add song pop up$/, function () {
        return driver.wait(until.elementsLocated(by.xpath("//div[@id='songsAddModal']//h4[@id='exampleModalLabel']")), 40000).then(function () {
            return driver.findElements(by.xpath(("//div[@id='songsAddModal']//h4[@id='exampleModalLabel']")));
        })
    });
    this.Given(/^user click new$/, function () {
        driver.then(function () {
            return page.fieldNew.performClick();
        })
    });
    this.Given(/^user get pop up fill the information/, function () {
        return driver.wait(until.elementsLocated(by.xpath("//div[@id='songsModal']//div[@class='modal-body']")), 40000).then(function () {
            return driver.findElements(by.xpath(("//div[@id='songsModal']//div[@class='modal-body']")));
        })
    });
    // this.Given(/^user input Song Name$/, function () {
    //     driver.then(function () {
    //         return page.fieldsong.performFill()
    //     })
    // });
    // this.Given(/^user input Song Name Original$/, function () {
    //     driver.then(function () {
    //         return page.fieldsongname.performFill()
    //     })     
    // });
    // this.Given(/^User choose genre$/, function () {
    //     driver.then(function () {
    //         return page.clickgenre.performClick()
    //     })     
    // });
    // this.Given(/^user input Issue Date$/, function () {
    //     // driver.then(function () {
    //     //     return page.isitanggal.performFill()
    //     // })     
    // });
    // this.Given(/^user input Uniq Search Keyword$/, function () {
    //     // driver.then(function () {
    //     //     return page.fieldunique.performFill()
    //     // })       
    // });
    // this.Given(/^user input Track No$/, function () {
    //     // driver.then(function () {
    //     //     return page.fieldtrack.performFill()
    //     // })       
    // });
    // this.Given(/^user click generate for label song code$/, function () {
    //     // driver.then(function () {
    //     //     return page.clickgenerate.performClick()
    //     // })       
    // });
    // this.Given(/^user choose Price$/, function () {
    //     // driver.then(function () {
    //     //     return page.fieldprice.performClick()
    //     // })          
    // });
    // this.Given(/^user click add lyric$/, function () {
    //     // driver.then(function () {
    //     //     return page.clicklyric.performClick()
    //     // })          
    // });
    // this.Given(/^user add lyric$/, function () {
             
    // });
    // this.Given(/^user click save to lyric$/, function () {
             
    // });
    // this.Given(/^user input audio in format wav$/, function () {
             
    // });
    // this.Given(/^user click browse$/, function () {
             
    // });
    // this.Given(/^user click Upload$/, function () {
             
    // });
    // this.Given(/^user wait until process upload done$/, function () {
             
    // });
    // this.Given(/^user get a pop up file succes to upload$/, function () {
             
    // });
    this.When(/^user click save$/, function () {
        driver.then(function () {
            return page.saveklik.performClick();
        })            
    });
    this.Then(/^user get a pop up to fill information$/, function () {
        driver.then(function () {
            return driver.findElements(by.xpath("//div[@class='bootbox-body']"))
    
        });         
    });
    // this.Given(/^user get a pop up to save data$/, function () {
             
    // });
    // this.Given(/^user click yes$/, function () {
             
    // });
    // this.When(/^user get a pop up sucess to upload music$/, function () {
             
    // });
    // this.Then(/^user click ok$/, function () {
             
    // });
}

