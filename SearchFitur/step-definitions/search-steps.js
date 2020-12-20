module.exports = function(){
  this.Given(/^user browse langitmusik page$/, function () {
    helpers.loadPage('https://www.langitmusik.co.id/')
});

this.When(/^user fill search field$/, function () {
driver.then(function(){
    return page.fieldSearch.performFill()
})
});

this.Then(/^user can see the information$/, function () {


});
}