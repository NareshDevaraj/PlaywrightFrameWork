import { test, expect } from '@playwright/test';
import moment from "moment";


test("calender using fill function",async ( {page} ) => {
    
  await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
//to find the date format in console use cmd --> document.getElementById("birthday").value

  let date = "1991-10-18"
  
  await page.fill("#birthday", date)
//await page.waitForTimeout(3000)     //to validate the date
})





test("calender using moment",async ( {page} ) => {
    
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
  //to find the date format in console use cmd --> document.getElementById("birthday").value
  await page.waitForLoadState();
   await page.click("//input[@placeholder='Start date']")   // clicking start date 
    
const mmYY = page.locator("(//table[@class='table-condensed']//th[@class='datepicker-switch'])[1]")    //using class name of the table and value and index value 
const prev = page.locator("(//table[@class='table-condensed']//th[@class='prev'])[1]")             // for previous month
const next = page.locator("(//table[@class='table-condensed']//th[@class='next'])[1]")             // for next month

 // to select 14 of previous month
await prev.click();
await page.click("//td[@class='day'][text()='14']")  

 // to select particular month 
 let dateToSelect ="May 2021"

 const thisMonth = moment(dateToSelect, "MMMM YYYY" ).isBefore();   // using the moment
 console.log("this month?" +thisMonth )

 while (await mmYY.textContent() != dateToSelect ) {        //will run till it matches the dateToSelect
    if (thisMonth) {
        await prev.click();
    } else {
        await next.click();
    }  
 }
 await page.click("//td[@class='day'][text()='17']")     //electing the date as 15

  //await page.waitForTimeout(3000)     //to validate the date
  })



test("calender using moment -- as re usable funtion",async ( {page} ) => {
    
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
  //to find the date format in console use cmd --> document.getElementById("birthday").value
  await page.waitForLoadState();
   
    
    await selectDate(12, "December 2017");     //selecting the date as 12 for previous month

    await page.reload();

    await selectDate(5, "December 2023");     //electing the date as 5 for future month
    await page.reload();

    await selectDate(25, "April 2023");     //electing the date as 25 for current month

      async function selectDate(date: number, dateToSelect: string) {
        await page.click("//input[@placeholder='Start date']")   // clicking start date 
          const mmYY = page.locator("(//table[@class='table-condensed']//th[@class='datepicker-switch'])[1]"); //using class name of the table and value and index value 
          const prev = page.locator("(//table[@class='table-condensed']//th[@class='prev'])[1]"); // for previous month
          const next = page.locator("(//table[@class='table-condensed']//th[@class='next'])[1]"); // for next month


    
          // to select particular month 
          //let dateToSelect = "May 2021";

          const thisMonth = moment(dateToSelect, "MMMM YYYY").isBefore(); // using the moment
          console.log("this month?" + thisMonth);

          while (await mmYY.textContent() != dateToSelect) { //will run till it matches the dateToSelect
              if (thisMonth) {
                  await prev.click();
              } else {
                  await next.click();
              }
          }
          await page.click(`//td[@class='day'][text()='${date}']`);
      }
  //await page.waitForTimeout(3000)     //to validate the date
  })