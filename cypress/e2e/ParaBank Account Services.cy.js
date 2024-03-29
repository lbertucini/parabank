/// <reference types="cypress" />


const { faker } = require('@faker-js/faker')


const firstName = faker.name.firstName()
const lastName = faker.name.lastName()
const streetAddress = faker.address.street(true)
const city = faker.address.city()
const state = faker.address.state()
const zipCode = faker.address.zipCode()
const phone = faker.phone.number()
const ssn = faker.random.numeric(9, { allowLeadingZeros: true }) //testar pra ver se funciona
const username = faker.random.alpha(10)
const password = faker.datatype.number({min: 12, max: 999999999999})
const repeatPassword = password

describe('Validation Home', () => {
  
  // beforeEach(() => {
  //   cy.visit('https://parabank.parasoft.com/parabank/register.htm')
  // })

  
  it('It should validate the top menu', () => {
    cy.visit('https://parabank.parasoft.com/parabank/register.htm')
    cy.topMenu()
  })

  it('It should validate left menu', () => {
    
    cy.leftMenu()
  })

  it('It should validate the shortcuts on the right side',() => {
    
    cy.shortcutIcons()
  })

  it('It should validate login component',() => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
    cy.loginComponents()
  })

  it('It should register component',() => {


  cy.get('input[name="customer.firstName"]')
    .click()
    .type(firstName)
  
  cy.get('input[name="customer.lastName"]')
    .click()
    .type(lastName)

  cy.get('input[name="customer.address.street"]')
    .click()
    .type(streetAddress)
  
  cy.get('input[name="customer.address.city"]')
    .click()
    .type(city)

  cy.get('input[name="customer.address.state"]')
    .click()
    .type(state)

  cy.get('input[name="customer.address.zipCode"]')
    .click()
    .type(zipCode)

  cy.get('input[name="customer.phoneNumber"]')
    .click()
    .type(phone)

  cy.get('input[name="customer.ssn"]')
    .click()
    .type(ssn)
  
  cy.get('input[name="customer.username"]')
    .click()
    .type(username)
  
  cy.get('input[name="customer.password"]')
    .click()
    .type(password)
  
  cy.get('#repeatedPassword')
    .click()
    .type(repeatPassword)  

    cy.get('input[value="Register"]')
    .click()

    cy.get('h1[class="title"]')
    .contains('Welcome')
  })
    it('It should login',() => {

      cy.visit('https://parabank.parasoft.com/parabank/index.htm')

      cy.get('input[name="username"]')
        .click()
        .type(username)
      
      cy.get('input[name="password"]')
        .click()
        .type(password)
    
      cy.get('input[value="Log In"]')
        .click()
    
        
      })

    it('It should validate account services ',() => {

   
    cy.get('#leftPanel > ul > li')
      .eq(0)
      .should('contain.text', 'Open New Account') 
      .find('a')
      .should('have.attr', 'href')

          
    cy.get('#leftPanel > ul > li')
      .eq(1)
      .should('contain.text', 'Accounts Overview') 
      .find('a')
      .should('have.attr', 'href')

  
    cy.get('#leftPanel > ul > li')
      .eq(2)
      .should('contain.text', 'Transfer Funds') 
      .find('a')
      .should('have.attr', 'href')
 
  
    cy.get('#leftPanel > ul > li')
      .eq(3)
      .should('contain.text', 'Bill Pay') 
      .find('a')
      .should('have.attr', 'href')
 
  
    cy.get('#leftPanel > ul > li')
      .eq(4)
      .should('contain.text', 'Find Transactions') 
      .find('a')
      .should('have.attr', 'href')
 

    cy.get('#leftPanel > ul > li')
      .eq(5)
      .should('contain.text', 'Update Contact Info') 
      .find('a')
      .should('have.attr', 'href')


    cy.get('#leftPanel > ul > li')
      .eq(6)
      .should('contain.text', 'Request Loan') 
      .find('a')
      .should('have.attr', 'href')
 

    cy.get('#leftPanel > ul > li')
      .eq(7)
      .should('contain.text', 'Log Out') 
      .find('a')
      .should('have.attr', 'href')
   

      cy.get('#leftPanel > ul > :nth-child(2) > a')
      .click()
        
      })



 

 

})  

