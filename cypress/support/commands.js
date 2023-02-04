

Cypress.Commands.add('openChatbotWindow', (iframePopup) => {
    return cy.get(iframePopup, { timeout: 10000 }).should('be.visible').click()
})

Cypress.Commands.add('openChatbotIframe', (iframe) => {
    return cy
            .get(iframe).its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap)
})

// chatbot interaction commands ======================================================

Cypress.Commands.add('typeInText', (iframe, selector, name, messageTextSelector, arrayPosition) => {
    return cy.openChatbotIframe(iframe)
             .find(selector)
             .type(name).type('{Enter}'),
            cy.openChatbotIframe(iframe)
            .find(messageTextSelector).eq(arrayPosition).contains(name)
})

Cypress.Commands.add('clickSuggestedButton', (iframe, selector, arrayPosition, buttonText) => {
    return cy.openChatbotIframe(iframe)
             .find(selector).eq(arrayPosition).contains(buttonText)
             .click()
})

/// verify commands =================================================================

Cypress.Commands.add('verifyElementText', (iframe, selector, messageText, arrayPosition) => {
    return cy.openChatbotIframe(iframe)
             .find(selector).eq(arrayPosition, { timeout: 5000 })
             .contains(messageText)
})

Cypress.Commands.add('verifyMenuOptions', (iframe, selector, explainChatbot, makeChatbot, useCases, Features, contactChatbot, costs) => {
    return cy.openChatbotIframe(iframe)
             .find(selector)
             .contains(explainChatbot, makeChatbot, useCases, Features, contactChatbot, costs)
})

Cypress.Commands.add('checkMenuItems', (iframe, button1, button2, button3, button4, button5, button6) => {
    return cy.openChatbotIframe(iframe)
             .find("[data-test='message-suggested-btn']").then( buttons => {

                expect(buttons[0]).to.contain.text(button1)
                expect(buttons[1]).to.contain.text(button2)
                expect(buttons[2]).to.contain.text(button3)
                expect(buttons[3]).to.contain.text(button4)
                expect(buttons[4]).to.contain.text(button5)
                expect(buttons[5]).to.contain.text(button6)
    })
})