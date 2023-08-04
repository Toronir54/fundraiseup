const { I } = inject();

module.exports = {
  // Locators
  buttons: {
    title_donate: '[title="Donate Button"]',
    monthly_plan: '[data-tracking-element-name="monthlyPlan"]',
    donate: '[data-qa="donate-button"]',
    cover_fee: '[data-qa="cover-fee-checkbox"]',
    credit_card: '[data-qa="cc-button"]',
    card_continue: '[data-qa="card-continue"]',
    pay: '[data-testid="pay-button"]',
  },

  frames: {
    donation_widget: 'iframe[title="Donation Widget"]',
    secure_card_number: 'iframe[title="Secure card number input frame"]',
    secure_expiration_date:
      'iframe[title="Secure expiration date input frame"]',
    secure_cvc: 'iframe[title="Secure CVC input frame"]',
  },

  forms: {
    fiat_donate: '[data-qa="fiat-donate-form"]',
    payment_method: '[data-qa="active-screen-payment-method"]',
    credit_card: '[data-qa="active-screen-credit-card"]',
    personal_info: '[data-qa="active-screen-privacy"]',
  },

  fields: {
    amount: '[data-qa="amount"]',
    card_number: '[data-elements-stable-field-name="cardNumber"]',
    card_expiry: '[data-elements-stable-field-name="cardExpiry"]',
    card_cvc: '[data-elements-stable-field-name="cardCvc"]',
    first_name: '[data-qa="personal-first-name"]',
    last_name: '[data-qa="personal-last-name"]',
    email: '[data-qa="personal-email"]',
  },

  fillCardInfo({ cardNumber, cardExpiry, cardCvc }) {
    I.waitForVisible(this.forms.credit_card);
    I.switchTo(this.frames.secure_card_number);
    I.fillField(this.fields.card_number, cardNumber);
    I.switchTo();
    I.switchTo(this.frames.donation_widget);
    I.switchTo(this.frames.secure_expiration_date);
    I.fillField(this.fields.card_expiry, cardExpiry);
    I.switchTo();
    I.switchTo(this.frames.donation_widget);
    I.switchTo(this.frames.secure_cvc);
    I.fillField(this.fields.card_cvc, cardCvc);
  },

  fillPersonalInfo({ firstName, lastName, email }) {
    I.waitForVisible(this.forms.personal_info);
    I.fillField(this.fields.first_name, firstName);
    I.fillField(this.fields.email, email);
    I.fillField(this.fields.last_name, lastName);
  },
};
