module.exports = function () {

    this.Given(/^user browse langitmusik page$/, function () {
        helpers.loadPage('https://www.langitmusik.co.id/')
      });

      this.When(/^user click trending button$/, function () {
        driver.then(function () {
            return page.trendingBtn.performClick();

        })
      });

      this.Then(/^user can see trending page$/, function () {
        driver.then(function(){
            helpers.loadPage('https://www.langitmusik.co.id/new/trending')
        })
          
    });
      

}