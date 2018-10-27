var CapitalOnePage = require("../Pages/capitalOne.page.js");
var EC = protractor.ExpectedConditions;
describe('Verify Capital One Home page dropdown ', () => {
    beforeAll(()=>{
        browser.waitForAngularEnabled(false);
        browser.get("http://www.capitalone.com");
    });

    it('should display a list below credit cards dropdown', () => {   
 CapitalOnePage.CreditCardsButton.sendKeys(protractor.Key.ENTER);
 expect(element(by.buttonText("Featured Credit Cards")).isDisplayed()).toBe(true);
 browser.sleep(2000);
 $(".site-L2__featured-cards>button").getText().then(text=>{
     console.log(text);
 })
 $$(".ods-list__list.ods-list__list--small.ods-list__list--linked.ods-margin__top--tiny.ods-margin__bottom--normal>li>div:nth-child(2)>a>span").each(element=>{
     element.getText().then(text=>{
     console.log(text);
     });
 });
 element(by.linkText("See if You're Pre-Qualified")).click();

//    CapitalOnePage.CheckingAndSavingButton.sendKeys(protractor.Key.ENTER);
//    expect(element(by.buttonText("Featured Credit Cards")).isDisplayed()).toBe(true);
//   CapitalOnePage.AutoLoansButton.sendKeys(protractor.Key.ENTER);
//   expect(element(by.buttonText("Featured Credit Cards")).isDisplayed()).toBe(true);
//   CapitalOnePage.CommercialButton.sendKeys(protractor.Key.ENTER);
//   expect(element(by.buttonText("Featured Credit Cards")).isDisplayed()).toBe(true);
  browser.sleep(2000);

        
    });
    fit('should display table', function(){
        browser.get("https://stats.nba.com/players/advanced-leaders/");
        let table = $$("[ng-repeat='(i, player) in category.playerstats']>td:nth-child(2)>a");
        let GP = $$("[data-ng-repeat='(i, row) in page track by row.$hash']>td:nth-child(3)");
             table.getText().then(text=>{ 
                for(let i = 0; i < 5; i++){ 
                browser.executeScript("arguments[0].click();", table.get(i));
                browser.wait(EC.visibilityOf(GP.get(i)), 12000).then(()=>{
                    GP.getText().then(score=>{
                        console.log(text[i]);
                console.log(`The score for 2018-2019 is: ${score[0]}`);
                console.log(`The score for the previous year is: ${score[1]}`);
                browser.navigate().back();
             })
            })
            }
            
        })
    })
});