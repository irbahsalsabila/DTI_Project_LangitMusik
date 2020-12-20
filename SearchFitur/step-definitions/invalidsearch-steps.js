module.exports = function(){
    this.Given(/^user langitmusik page$/, function () {
        helpers.loadPage('https://www.langitmusik.co.id/')
    });
  
    this.When(/^user fill invalid search$/, function () {
        driver.then(function(){
            return page.invalidsearch.performFill()
        })
      });
  
    this.Then(/^user cannot see correct information$/, function () {
        return driver.findElements(by.xpath("//body/div[@class='dv-lm-web']/div[@class='dv-lm-web-inner']/div[@id='app']/div[@id='content']/div[@class='page-content-wrapper']/div[@class='page-content']/main[@class='ng-scope']/div[@class='padding p-b-0 ng-scope']/div[1]/div[1]"))

        .then(function(elements){
            expect(elements.length).to.not.equal(0);
        })
      });
  }