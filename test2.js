require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');
describe('Hovering the mouse over an element', function() {
    let  driver;
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('Check the appearance of the text', async function() {
        await driver.get('http://the-internet.herokuapp.com/hovers');
        await driver.wait(until.titleIs('The Internet'), 1000);
        await driver.findElement(By.xpath("//div[@id='content']//div[@class='figure'][1]")).click();
        let userName = await driver.findElement(By.xpath("//div[@class='figcaption']/h5")).getText();
        assert.equal(userName, "name: user1");
    });
    after(() => driver && driver.quit());
})
