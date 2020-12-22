module.exports = function() {
    this.Given(/^website langit music$/, function () {
        helpers.loadPage('https://www.langitmusik.co.id/')
    });

    this.When(/^user click link FAQ$/, function () {
       driver.then(function(){
           return page.fieldfaq.performClick();
           
       })
    });      
    this.Then(/^User can see the FAQ on the website$/, function () {
        driver.then(function () {
            return driver.findElements(by.xpath("//div[@class='modal-dialog modal-md']//div[@class='modal-content']"))
        })
        });
}
