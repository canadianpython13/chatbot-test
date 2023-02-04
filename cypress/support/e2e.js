
import './commands'
import 'cypress-mochawesome-reporter/register'
import {button1, button2, button3, button4, button5, button6} from '../fixtures/buttons.json'
import {iframePopup, iframe, messageTextSelector, messageInputSelector, suggestedButtonSelector} from '../fixtures/selectors.json'
import {welcomeMessage1, welcomeMessage2, userName, suggestionsMessage, firstPromptMessage, nameConfirmedMessage} from '../fixtures/messageBody.json'


beforeEach(() => {
    cy.visit('/')

    cy.openChatbotWindow(iframePopup)

    cy.verifyElementText(iframe, messageTextSelector, welcomeMessage1, 0)
    cy.verifyElementText(iframe, messageTextSelector, welcomeMessage2, 1)
    cy.typeInText(iframe, messageInputSelector, userName, messageTextSelector, 2)
    cy.clickSuggestedButton(iframe, suggestedButtonSelector, 0, 'Yes')
    cy.verifyElementText(iframe, messageTextSelector, nameConfirmedMessage, 5)
    cy.verifyElementText(iframe, messageTextSelector, suggestionsMessage, 6)
    cy.verifyElementText(iframe, messageTextSelector, firstPromptMessage, 7)
    cy.checkMenuItems(iframe, button1, button2, button3, button4, button5, button6)
})