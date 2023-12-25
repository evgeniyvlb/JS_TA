require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');
describe('State of element activity', function() {
    let  driver;
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('First element is inactive', async function() {
        await driver.get('http://the-internet.herokuapp.com/dropdown');
        await driver.wait(until.titleIs('The Internet'), 1000);
        await driver.findElement(By.id('dropdown')).click();
        let element = await driver.findElement(By.xpath('//select[@id="dropdown"]/option[@selected="selected"]'));
        let elementStatus = await element.isEnabled();
        assert.ok(!elementStatus);
    });

    it('Second element is active', async function() {
        await driver.get('http://the-internet.herokuapp.com/dropdown');
        await driver.wait(until.titleIs('The Internet'), 1000);
        await driver.findElement(By.id('dropdown')).click();
        let element = await driver.findElement(By.css('select option:nth-child(2)'))
        assert.ok(element.isEnabled())
    });
    after(() => driver && driver.quit());
})
