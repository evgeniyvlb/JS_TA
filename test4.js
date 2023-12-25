require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');
describe('Sorting the table', function() {
    let  driver;
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('Due is sorted', async function() {
        await driver.get('http://the-internet.herokuapp.com/tables');
        await driver.wait(until.titleIs('The Internet'), 1000);
        await driver.findElement(By.xpath("//span[@class ='dues']")).click();

        let priceArray = await driver.findElements(By.xpath("//tr/td[@class ='dues']"));
        let priceArrayText = [];

        for (const element of priceArray) {
             priceArrayText.push(await element.getText())
        }

        let sortedArray = await priceArrayText.sort();
        assert.equal(priceArrayText, sortedArray);
    });
    after(() => driver && driver.quit());
})
