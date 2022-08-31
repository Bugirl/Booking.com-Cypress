/// <reference types ="cypress" />
describe('Tests the user journey', () => {
    it('the user can search for an apartment', () => {
        //Checks if the homepage opens and if it contains text "Find your next stay"
        cy.visit('https://www.booking.com/index.en-gb.html?aid=304142?op_token=EgVvYXV0aCKpBQoUdk8xS2Jsazd4WDl0VW4yY3BaTFMSCWF1dGhvcml6ZRo1aHR0cHM6Ly9zZWN1cmUuYm9va2luZy5jb20vbG9naW4uaHRtbD9vcD1vYXV0aF9yZXR1cm4qyARVck1EUm4yTmhISlNWejkzS1BqZXlrcWFraWtNdUN2Q2dfV3BnRGRZVUxKc29uOGMtMlE3cDdDZFZCT3lZQzEyV0FGZThjVkFFRmxTb2MtcDhrM2duVWN2ejBmZGwyc3JfZnIwWGlsRTdyX3BLcUlWeHFvemZhUG41Z0Qzdnl2NG5nelFVdTNZZTQ5Sk12Ym1HRmpvY2Y0UC05b2RwdEdxbWZMNmp6ajBlZkxjVnNOMlMtMW05OHk5bmJ5RzJQV0dBSzEzQ1BUZWFCamxGdGROYUZYV1ZNTVBtZmMzaW54Z3V1cDlma2FNMWVtTTlUT3BUN0EwSEtnWnMtZDltVDhpN1prM1dFdGFzY3BsandQMVpvZWpyUkNZNThjRUpWbHM4ZTdySTN4OVMtNVBXaWVtaUFrRk9jRUZoSUtoa1NndVhmQTdKSmFxdlo2TDBhQ2pJdk8zYmdSZjM1S1doVzNFQU9jRFFzUFV0TUsxa1I1WXpZdnBrVk1hNjBOOFFfT3RycFkwR1FweVJ1RjhRTDgxcG41VTRIbVpMUzZTNVAtYnF1MlJIQmdfSGZ0cW9idE5lTFFVazRTUXVZSUIxcDl4MFpjSENuTXJERGVNSFY1amhsWk5LaGd4VDNuYl9QZUM1YWM1N2VyS2lYZzcyam5KUUR6c1d5V1hGbjljd2cyeUxRc1QtcVltMEtpSXlRRDNqaVo3Wml1N29FRTBiaXY3ODBQendveVRBTzd3Zk9xaWVYZGZmNHdaeXRUN0RlSDRFY2tfQ0N6eEIEY29kZSoZCI7IEjCe6LqRj-MlOgBCAFj8xJOYBoABAQ') 
        cy.get('[data-testid="herobanner-title1"]')
        .should('exist')
        .contains('Find your next stay')
        //Checks if the button to accept cookies is visible and can be clicked
        cy.get('#onetrust-accept-btn-handler', { timeout: 20000 }).should('be.visible').click()
        //Checks if the input to search a place to stay exist, introduce the name of the place to stay and clicks on it
        cy.get('#ss')
        .should('exist')
        .type('London').click()
        //Checks if the input to introduce the date to stay exist and clicks on it to open a downdrop calendar
        cy.get(':nth-child(2) > .xp__dates-inner > .xp__group > .sb-date-field > .sb-searchbox__input > .sb-date-field__icon > .bk-icon').should('exist').click()
        //Chooses the date of check in from calendar and clicks on it
        cy.get('[data-date="2022-09-19"]').click()
        //Chooses the date of check out from calendar and clicks on it
        cy.get('[data-date="2022-09-23"]').click()
        //Checks if the input to introduce the number of guests exist and clicks on it to show the dropdown list 
        cy.get('#xp__guests__toggle').should('exist').click()
        //Chooses the number of guests
        cy.get('.sb-group__field-adults > .bui-stepper > .bui-stepper__wrapper > .bui-stepper__add-button > .bui-button__text').click()
        //Clicks the search button
        cy.get('.sb-searchbox__button').click()
        //Chcecks if the new page contains the search results
        cy.url().should('include','https://www.booking.com/searchresults.en-gb.html?label')
        //Chooses the place from the search result and clicks on it
        cy.get(':nth-child(3) > .d20f4628d0 > .b978843432 > .f996d8c258 > .b2fe1a41c3 > :nth-child(1) > .a1b3f50dcd > :nth-child(1) > .dd023375f5 > .a4225678b2 > [data-testid="title-link"] > [data-testid="title"]').click()
    })
})