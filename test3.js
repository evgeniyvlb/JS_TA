require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');
describe('Filling out the form', function() {
    let  driver;
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('Check filling form', async function() {
        await driver.get('http://formy-project.herokuapp.com/form');
        await driver.wait(until.titleIs('Formy'), 1000);
        await driver.findElement(By.id('first-name')).sendKeys('Peter')
        await driver.findElement(By.id('last-name')).sendKeys('Peterson')
        await driver.findElement(By.id('job-title')).sendKeys('tester')
        await driver.findElement(By.xpath("//div[@class='input-group'][1]/div[2]/input")).click();
        await driver.findElement(By.xpath("//div[@class='input-group'][2]/div[2]/input")).click();
        await driver.findElement(By.id('select-menu')).click();
        await driver.findElement(By.xpath("//option[@value='2']")).click();
        await driver.findElement(By.id('datepicker')).sendKeys('12/12/2020');
        await driver.findElement(By.xpath("//a[@role='button']")).click();
        await driver.sleep(1000);
        let alertMessage = await driver.findElement(By.css("div.alert-success")).getText();
        assert.equal(alertMessage, "The form was successfully submitted!");
    });
    after(() => driver && driver.quit());
})