describe('My First Test', function() {
    it('Does not do much!', function() {
      expect(true).to.equal(true)
    })
  })

  describe('Test our inputs and submit our form', function() {
    beforeEach(function(){
      cy.visit("http://localhost:3002/");
    })
   it("Add test to inputs and submit form", function() {
    cy.get('#firstName')
    .type("Victor")
   });
  });