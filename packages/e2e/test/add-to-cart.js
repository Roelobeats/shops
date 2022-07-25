/**
 * This test verifies if adding items to cart still works.
 * Adds item to cart, adds address, goes to Mollie without actually paying
 * Run specific case with `TESTCASE=cantastic yarn test:add-to-cart`
 */
const address = {
  firstName: 'Test',
  lastName: 'Test',
  phone: '06123456788',
  email: 'martijn@pinelab.studio',
  postalCode: '8923CP',
  houseNr: '33',
};

// Cantastic

module.exports = {
  cantastic: function (browser) {
    browser
      .url('https://cantastic.netlify.app/product/loop-colors-400ml/')
      .useXpath()
      // Cookies
      .click("//span[contains(text(), 'Nee')]")
      .pause(2000)
      // Add 'White' to cart
      .click(
        '//*[@id="app"]/div/div/div/div[3]/div[1]/div[2]/div/div[2]/div/p[2]/button'
      )
      .pause(1000)
      .click("//button[contains(text(), 'Naar winkelmand')]")
      .pause(1000)
      .click("//a[contains(text(), 'Nu bestellen')]")
      .pause(1000)
      .useCss()
      .setValue('input[placeholder="Voornaam*"]', address.firstName)
      .setValue('input[placeholder="Achternaam*"]', address.lastName)
      .setValue('input[placeholder="Telefoonnr."]', address.phone)
      .setValue('input[placeholder="Email adres*"]', address.email)
      .setValue('input[placeholder="Postcode*"]', address.postalCode)
      .setValue('input[placeholder="Huisnr.*"]', address.houseNr)
      .pause(2000)
      .click('button[type="submit"]')
      .useXpath()
      .pause(1000)
      .click("//button[./span[contains(text(),'Controleer je bestelling')]]")
      .pause(1000)
      .click("//*[contains(text(), 'Betalen')]")
      .useCss()
      .pause(1000)
      .click('button[value="ideal"]')
      .end();
  },
};
