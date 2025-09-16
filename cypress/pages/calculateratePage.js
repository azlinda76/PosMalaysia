export class calculateratePage {

// Define element locators (selectors)
calculator_section = '.calculator-wrapper'
from_country = '.country-container > .flex > .font-bold'  
from_postcode = ':nth-child(1) > .d-flex > .mr-03 > .form-control'
from_state = '.d-flex > [type="text"]'
to_country = '#mat-input-0' 
india_list = '#mat-option-50'
india_icon = '[data-mat-icon-name="in"]'
weight_inputbox = '.flex > .form-control'
calculate_button = '.justify-end > .no-underline'
your_quote_label = '.max-w-full > .text-3xl'
your_quote_desc = 'p.mt-2' 
rate_option1 = '.bg-white > .mx-auto > :nth-child(2)'   
rate_option2 = '.bg-white > .mx-auto > :nth-child(3)'
rate_option3 = '.bg-white > .mx-auto > :nth-child(4)'


// Actions
    visitRateCalculator() {
        cy.visit('/send/ratecalculator')
    }

    gotoCalculatorSection() {
        cy.get(this.calculator_section)
        .scrollIntoView()
        .should('be.visible')
        .click(); 
    }     

    enterFromPostcode(strPostcode) {
        cy.get(this.from_postcode).type(strPostcode, { force: true })       
    }  

    selecttocountry(strToCountry) {
        cy.get(this.to_country).clear({ force: true }).type(strToCountry, { force: true }); 
        cy.get(this.india_list).click()
        cy.get(this.india_icon)
    }

    enterandcalculaterate(weight) {
        cy.get(this.weight_inputbox).clear({ force: true }).type(weight, { force: true }); 
        cy.get(this.calculate_button).click({force: true}) //click Calculate
    }

// Assertion
    verifyfromcountry(strFromCountry) {
        cy.get(this.from_country).should("contain.text",strFromCountry)
    }
 
    verifyyourquote(strYourQuote) {
        cy.get(this.your_quote_label).should('contain',strYourQuote)
    }
    
    verifyquotedesc(strQuoteDesc) {
        cy.get(this.your_quote_desc).should('contain',strQuoteDesc)
    }

    verifyoption1(strtitle, strDays, strPrice) {
        cy.get(this.rate_option1).should('contain', strtitle);
        cy.get(this.rate_option1).should('contain', strDays);
        cy.get(this.rate_option1).should('contain', strPrice);
    }

    verifyoption2(strtitle, strDays, strPrice) {
        cy.get(this.rate_option2).should('contain', strtitle);
        cy.get(this.rate_option2).should('contain', strDays);
        cy.get(this.rate_option2).should('contain', strPrice);
    }

    verifyoption3(strtitle, strDays, strPrice) {
        cy.get(this.rate_option3).should('contain', strtitle);
        cy.get(this.rate_option3).should('contain', strDays);
        cy.get(this.rate_option3).should('contain', strPrice);
    }
    
}   

export default new calculateratePage();