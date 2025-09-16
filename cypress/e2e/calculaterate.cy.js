/// <reference types ="cypress" />

import  calculateratePage from "../pages/calculateratePage";

describe('CALCULATE RATE', () => {
  it('TC01 Verify user can calculate the shipment quote from Malaysia to India', () => {
    calculateratePage.visitRateCalculator()
    calculateratePage.gotoCalculatorSection()   
    calculateratePage.verifyfromcountry('Malaysia')   
    calculateratePage.enterFromPostcode('35600')
    calculateratePage.selecttocountry('India')
    calculateratePage.enterandcalculaterate('1')    
    calculateratePage.verifyyourquote('Your Quote')
    calculateratePage.verifyquotedesc('Select a quote to start booking your shipment.')  
    calculateratePage.verifyoption1('Express Mail Service (EMS)','3-4 working days','RM 196.50') //1st option   
    calculateratePage.verifyoption2('International Air Parcel','6-14 working days','RM 153.60') //2nd option     
    calculateratePage.verifyoption3('International Surface Parcel','4-9 weeks','RM 101.00')  //3rd option 
  })

})