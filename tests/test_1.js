const { I } = inject();
const faker = require("faker");
const testPage = require("../pages/page.js");
const amount = "1000";
const cardNumber = "4242 4242 4242 4242";
const cardExpiry = "04/24";
const cardCvc = "000";
const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const email = "romonosov@mail.ru";

Feature("Test 1");

Scenario("Test 1 @test_1", async function () {
  I.amOnPage("/qa-test-7R58U3");
  I.waitForText("Click me");
  I.click(testPage.buttons.title_donate);
  I.waitForVisible(testPage.frames.donation_widget, 3);
  I.switchTo(testPage.frames.donation_widget);
  // Secure donation
  I.waitForVisible(testPage.forms.fiat_donate, 5);
  I.click(testPage.buttons.monthly_plan);
  I.clearField(testPage.fields.amount);
  I.fillField(testPage.fields.amount, amount);
  I.click(testPage.buttons.donate);
  // Payment option
  I.waitForVisible(testPage.forms.payment_method);
  I.click(testPage.buttons.cover_fee);
  I.click(testPage.buttons.credit_card);
  // Credit card
  testPage.fillCardInfo({ cardNumber, cardExpiry, cardCvc });
  I.switchTo();
  I.switchTo(testPage.frames.donation_widget);
  I.click(testPage.buttons.card_continue);
  // Personal information
  testPage.fillPersonalInfo({ firstName, lastName, email });
  I.click(testPage.buttons.pay);
  I.waitForVisible(testPage.forms.credit_card, 3);
  I.waitForText("Your card was declined");
  I.waitForText(
    "Your card was declined. Your request was in live mode, but used a known test card.",
  );
});