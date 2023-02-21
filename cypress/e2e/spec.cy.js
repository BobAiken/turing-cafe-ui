describe('iteration 3', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
    .intercept('http://localhost:3001/api/v1/reservations', {body: [{
      id: 1,
      name: "Christie",
      date: "12/29",
      time: "7:00",
      number: 12
      },]}
  )});

  it('should display all elements on the page', () => {
    cy.contains('Turing Cafe Reservations')
    .get('form')
    .get('div[class="resy-form"]')
    .get('div[class="reservations-container"]')
  })

  it('when data is put into the form, the value is reflected in that form input', ()=>{
    cy.get('input[name="name"]')
    .type('Bobo')
    .should('have.value', 'Bobo')
    .get('input[name="date"]')
    .type('2023-03-18')
    .should('have.value', '2023-03-18')
    .get('input[name="time"]')
    .type('11:11')
    .should('have.value', '11:11')
    .get('input[name="number"]')
    .type('1')
    .should('have.value', '01')
  })

  it('should be able to add a new reservation to the page',()=>{
    cy.get('input[name="name"]')
    .type('Bobo')
    .get('input[name="date"]')
    .type('2023-03-18')
    .get('input[name="time"]')
    .type('11:11')
    .get('input[name="number"]')
    .type('1')
    .get('button').click()
    .get('div[class="reservations-container"]').children()
    .should('have.length', 10)

  })
})