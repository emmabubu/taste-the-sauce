import { LoginInfo } from '..'
import { LoginPage } from '@support/pages/login.page'

describe('Regular user', { viewportHeight: 1200 }, () => {
  beforeEach(() => {
    const user: LoginInfo = Cypress.env('users').standard
    LoginPage.login(user.username, user.password)
    cy.visit('/inventory.html')
  })

  // existing tests

  it('loads every image', () => {
    // iterate over every image on the page
    // https://on.cypress.io/get
    // https://on.cypress.io/each
    // confirm the image element has loaded using its naturalWidth property
    // Tip: include the alt text in the assertion message
    cy.get('img.inventory_item_img').each(($img: JQuery<HTMLImageElement>) => {
      const alt = $img[0].alt
      expect(
        $img[0].naturalWidth,
        `Image "${alt}" should load`,
      ).to.be.greaterThan(0)

      // or
      cy.wrap($img).prop('naturalWidth').should('be.greaterThan', 0)
    })
  })
})
