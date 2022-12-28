/// <reference types ="cypress" />
describe('Checks if register page works properly', () => {
    it('creates a new account', () => {
        cy.visit('https://www.booking.com/index.en-gb.html?aid=304142?op_token=EgVvYXV0aCKpBQoUdk8xS2Jsazd4WDl0VW4yY3BaTFMSCWF1dGhvcml6ZRo1aHR0cHM6Ly9zZWN1cmUuYm9va2luZy5jb20vbG9naW4uaHRtbD9vcD1vYXV0aF9yZXR1cm4qyARVck1EUm4yTmhISlNWejkzS1BqZXlrcWFraWtNdUN2Q2dfV3BnRGRZVUxKc29uOGMtMlE3cDdDZFZCT3lZQzEyV0FGZThjVkFFRmxTb2MtcDhrM2duVWN2ejBmZGwyc3JfZnIwWGlsRTdyX3BLcUlWeHFvemZhUG41Z0Qzdnl2NG5nelFVdTNZZTQ5Sk12Ym1HRmpvY2Y0UC05b2RwdEdxbWZMNmp6ajBlZkxjVnNOMlMtMW05OHk5bmJ5RzJQV0dBSzEzQ1BUZWFCamxGdGROYUZYV1ZNTVBtZmMzaW54Z3V1cDlma2FNMWVtTTlUT3BUN0EwSEtnWnMtZDltVDhpN1prM1dFdGFzY3BsandQMVpvZWpyUkNZNThjRUpWbHM4ZTdySTN4OVMtNVBXaWVtaUFrRk9jRUZoSUtoa1NndVhmQTdKSmFxdlo2TDBhQ2pJdk8zYmdSZjM1S1doVzNFQU9jRFFzUFV0TUsxa1I1WXpZdnBrVk1hNjBOOFFfT3RycFkwR1FweVJ1RjhRTDgxcG41VTRIbVpMUzZTNVAtYnF1MlJIQmdfSGZ0cW9idE5lTFFVazRTUXVZSUIxcDl4MFpjSENuTXJERGVNSFY1amhsWk5LaGd4VDNuYl9QZUM1YWM1N2VyS2lYZzcyam5KUUR6c1d5V1hGbjljd2cyeUxRc1QtcVltMEtpSXlRRDNqaVo3Wml1N29FRTBiaXY3ODBQendveVRBTzd3Zk9xaWVYZGZmNHdaeXRUN0RlSDRFY2tfQ0N6eEIEY29kZSoZCI7IEjCe6LqRj-MlOgBCAFj8xJOYBoABAQ') 
    cy.get(':nth-child(5) > .bui-button').click()
    cy.url().should('include','https://account.booking.com/register')
    cy.get('#username').type('mrpostman@yopmail.com')
    cy.get(':nth-child(3) > .Iiab0gVMeWOd4XcyJGA3').click()
    cy.url().should('include','https://account.booking.com/register/password')
    cy.get('#onetrust-accept-btn-handler').click()
    cy.get('#new_password').type('12345678Abc')
    cy.get('#confirmed_password').type('12345678Abc')
    cy.get('.Ut3prtt_wDsi7NM_83Jc').click()
    cy.get('#px-captcha').trigger('mousedown')
    })
})
