describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://demoqa.com/auto-complete')
    cy.get("#autoCompleteMultipleContainer").type("r");
    cy.get("#react-select-2-option-1").click()
    cy.readFile('cypress/fixtures/DataFile1.csv')

  .then((data) => {
     cy.task('csvToJson', data).then((data) => {
            console.log(data)
            cy.log(data)
            cy.writeFile('cypress/fixtures/menu.json', data)
        })
   })
  })
})