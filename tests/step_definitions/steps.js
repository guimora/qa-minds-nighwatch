const { client } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');
var faker = require('faker/locale/de')

Given(/^I open the application$/, () => {
    return client
    .url('http://automationpractice.com/index.php')
    .waitForElementVisible('body', 1000)
    .assert.title('My Store')
});

When(/^I look for a specific t-shirt in the proper section$/, () => {
    const pages = client.page.pages();
    return pages
    .waitForElementVisible('@bar', 1000)
    .setValue('@bar', faker.name.title())
    .waitForElementVisible('@btn', 1000)
    .click('@btn')
});

Then(/^I must be able to see the proper results$/, () => {
return client
    .pause(1000)
    .assert.containsText('h1[class="page-heading  product-listing"]', 'SEARCH')
    .end();
});
