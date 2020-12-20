
module.exports = function() {
    this.Given(/^user browse langitmusik page$/, function () {
        helpers.loadPage('https://www.langitmusik.co.id/')
    });

    this.When(/^user clik button content promo$/, function () {
       driver.then(function(){
           return page.fieldBtn.performClick();
           
       })
    });      
    this.When(/^user can see promo page$/, function () {
        driver.then(function(){
            helpers.loadPage('https://www.langitmusik.co.id/new/promo ')
        })
          
    }); 
    this.When(/^user clik ongoing promo$/, function () {
        driver.then(function(){
            return page.fieldpromoList.performClick();
        })
    });
    // ini akan eror ketika sedang tidak ada promo dihari itu. Tapi kemarin bisa, saat ada list promo yang tersedia.
    this.Then(/^user can see ongoing promo$/, function () {
        driver.then(function(){
            helpers.loadPage('https://www.langitmusik.co.id/new/promoDetail/1214')
        })
    });
}

// module.exports = function() {
//     this.Given(/^user browse langitmusik page$/, function () {
//         helpers.loadPage('https://www.langitmusik.co.id/')
//     });

//     this.Given(/^user fill search field$/, function () {
//        driver.then(function(){
//            return page.fieldSearch.performFill();
           
//        })
//     });

//     // this.Given(/^user fill email password$/, function () {
//     //     driver.then(function(){
//     //         return page.fieldpassword.performFill();  
//     //     })      
//     //        });
          
//     this.When(/^user click promo button$/, function () {
//         driver.then(function(){
//             return page.PromoBtn.performClick();  
//         })     
//           });   

//     // this.Then(/^user can see bot page$/, function () {
//     //     return driver.findElements(by.xpath("//a[ng-click='tabPromo=3']"))
//     //     .then(function(elements){
//     //         expect(elements.length).to.equal(0);
//     //     })      
//     //       });   
// }


