
//Test Case 1: Validating the Home Page

loginIntoApplication("Chrome")
// Verify that the home page is displayed with the welcome message "Welcome Bharat".
logoutAndCloseBrowser()


//Test Case 2: Validating the Fund Transfer Page

loginIntoApplication("Firefox")
// Navigate to the Fund Transfer page.
// Enter beneficiary account number as "1234567890".
// Enter amount to transfer as "5000".
// Click on the transfer button.
// Verify that the fund transfer is successful with the message "Transfer Successful".
logoutAndCloseBrowser()


//Test Case 3: Validating the Account Statement Page

loginIntoApplication("Edge")
// Navigate to the Account Statement page.
// Select the date range from "01-Jan-2023" to "31-Jan-2023".
// Click on the "Generate Statement" button.
// Verify that the account statement is displayed for the selected date range.
logoutAndCloseBrowser()


//==========================================================//

function loginIntoApplication(browserName, URL){ //function with parameter ==> adding palceholder to accept dynamic value of browserName
// Launch the +browserName+ browseг.
// Enter URL +URL+ and launch the application.
// Enter username as "Manoj"
// Enter password as "Manoj@123"
// Click on the login button.
}

function logoutAndCloseBrowser(){
 // Log out from the application.
// Close the browser.
}


//How to create functions in JavaScript or TypeScript?

//1.Identify the duplicate code and seperate the same from actual test scripts.
//2.create a block and copy the duplicate steps inside the block.
//3.Give a valid name and meaningful name for that particular block and call them whenever it was required.


