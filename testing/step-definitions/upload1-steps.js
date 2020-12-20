module.exports = function () {
    this.Given(/^user browse in langit music page$/, function () {
        helpers.loadPage('https://www.langitmusik.co.id/')
    });
    this.When(/^user click link Upload Lagu$/, function () {
        driver.then(function(){
            return page.fieldUpload.performClick();  
        })
    });
    this.Then(/^user redirect to Laguku page$/, function () {
        helpers.loadPage('https://laguku.id/#/home.html')
    });
}