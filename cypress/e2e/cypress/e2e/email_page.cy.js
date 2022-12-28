/// <reference types ="cypress" />
describe('Testing if login works properly', () =>{
    beforeEach(() => {
        cy.visit('https://account.booking.com/sign-in?op_token=EgVvYXV0aCKUBQoUdk8xS2Jsazd4WDl0VW4yY3BaTFMSCWF1dGhvcml6ZRo1aHR0cHM6Ly9zZWN1cmUuYm9va2luZy5jb20vbG9naW4uaHRtbD9vcD1vYXV0aF9yZXR1cm4qswRVcU1EeURyUUFnY1RKNjZZYzE5al9FN0xGaWstNkpSaXdlUndBUnVmek11V2lCamtCZWJKT2lmZGg4UlFfYWtGM3pCWU1pa3RDSWwxZzZsSmN4QlNHalpGZl8zWDVJWW1oM3BjZ1A3clJ2dGsxUnlRazh1WWZnR0l2Yk83V29hMTlBVnV4OGNQeHBURlAtRDJXX3h3MUkwdHNJOGlQTnFFNlZ0TWxVeUdYSXl3aVJTb3dTeEJoNWdlOTlibWhhd3RLTWpQS2hhbnNVX3luQldtalNWQWs2blNwbFVkcHd2Sm1YNEJBN2VUeF9rWnFodWI4aTR3UkZWOWtRcF9uQ3Z4dHA4YV9fa2tLWldYQ3hSakRmNzlzbmQzcGUzZUlpYUpJb1ppZXBBQ2RVdFBKbFZuRy1HOVIxbHZTRTZVdXZTVEdiQkZ5cnBhMGxDRDhBZnJFajB0djhkc0hjeUtOOXZkSF9ETHZDUnp3UDR0VDJ0aEhTOS1PVDk1ci1BbXpWQ2V1NVhqRFRIRWlhSXlkVmVidGtmNU1DQk5Nd1lBWUx3RVRxZy1Nc2ZWOVduMGdodk5yREtESUJTelJJRGRrSXRpa0p0cE5KYjc2TTFoYkZNWTdCODhTdXh5VmNXTmdkdUZuYy1rYVBybW1QRDNHU3NGRW9pYWc4WDZMdDlIM3IzNjBwbWVycmwzZ3dweU12YmNPa3p3Qm9JR19UbmNaU0tHczVVQ3FVNVV4SDJBR2N0NFFURUIEY29kZSoWCI7IEjCm17KX_tslOgBCAFiExoCXBg')
    })
it('greets with Sign in', () => {
    cy.contains('Sign in or create an account')
})
it('requires email', () => {
    cy.get(':nth-child(3) > .Iiab0gVMeWOd4XcyJGA3').click()
    cy.get('#username-note')
    cy.should('contain','Enter your email address')
})
it('requires valid emial adress', () => {
    cy.get('#username').type('la')
    cy.get(':nth-child(3) > .Iiab0gVMeWOd4XcyJGA3').click()
    cy.get('#username-note')
    cy.should('contain','Make sure the email address you entered is correct.')
})
it('moves to Enter your password page', () => {
    cy.get('#username').type('las@gmail.com')  
    cy.get(':nth-child(3) > .Iiab0gVMeWOd4XcyJGA3').click()
    cy.contains('Enter your password')
    cy.url().should('include','https://account.booking.com/sign-in/password')
})
})

