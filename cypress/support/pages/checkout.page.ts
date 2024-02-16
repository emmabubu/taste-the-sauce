export const CheckoutPage = {
  fillInformationForm(
    firstName = 'Joe',
    lastName = 'Smith',
    zipCode = '90210',
  ) {
    return cy.get('.checkout_info_wrapper form').fillForm({
      '#first-name': firstName,
      '#last-name': lastName,
      '#postal-code': zipCode,
    })
  },
  selectors: {
    firstName: '#first-name',
    lastName: '#last-name',
    postalCode: '#postal-code',
  },
}
