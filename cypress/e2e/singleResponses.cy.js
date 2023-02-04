import {iframe, messageTextSelector, suggestedButtonSelector} from '../fixtures/selectors.json'
import {button1, button5, button6} from '../fixtures/buttons.json'
import {explainChatbotsReply, contactReply, costsReply1, costsReply2} from '../fixtures/messageBody.json'


describe('conversation 1', () => {
    
    it('should explain about chatbots', () => {
        
        cy.clickSuggestedButton(iframe, suggestedButtonSelector, 0, button1)
        cy.verifyElementText(iframe, messageTextSelector, button1, 8)
        cy.verifyElementText(iframe, messageTextSelector, explainChatbotsReply, 9)
          
    })

    it('should prompt info about contact information', () => {
        
        cy.clickSuggestedButton(iframe, suggestedButtonSelector, 4, button5)
        cy.verifyElementText(iframe, messageTextSelector, button5, 8)
        cy.verifyElementText(iframe, messageTextSelector, contactReply, 9)
          
    })

    it('should prompt info about costs', () => {
        
        cy.clickSuggestedButton(iframe, suggestedButtonSelector, 5, button6)
        cy.verifyElementText(iframe, messageTextSelector, button6, 8)
        cy.verifyElementText(iframe, messageTextSelector, costsReply1, 9)
        cy.verifyElementText(iframe, messageTextSelector, costsReply2, 10)
        })


})