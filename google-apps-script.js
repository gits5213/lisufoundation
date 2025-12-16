/**
 * Google Apps Script for LISU Foundation Forms
 * 
 * This script receives form submissions (Application and Membership) and adds them to Google Sheets
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to https://script.google.com
 * 2. Create a new project
 * 3. Paste this code
 * 4. Update the SPREADSHEET IDs and SHEET_NAME constants below
 * 5. Deploy as a web app:
 *    - Click "Deploy" > "New deployment"
 *    - Choose type: "Web app"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone"
 *    - Click "Deploy"
 * 6. Copy the Web App URL and use it as NEXT_PUBLIC_GOOGLE_SCRIPT_URL
 * 
 * IMPORTANT: Make sure the Google account (lisufoundationbd@gmail.com) has access to the spreadsheets
 */

// Configuration for Application Form
const APPLICATION_SPREADSHEET_ID = '1_efZsqbwGTOuJKXyh1JPXQX9bWLMe3SLO_cHmmddpd0'; // Application spreadsheet ID
const APPLICATION_SHEET_NAME = 'application'; // Sheet name for applications
const APPLICATION_WORKBOOK_NAME = 'applicationList'; // Workbook name (for reference)

// Configuration for Membership Form
const MEMBERSHIP_SPREADSHEET_ID = '1udilOmWEoX_UUZM0hRfQ4HRZ6fnEN-bxXX2d8T60jNA'; // Replace with your Membership Sheet ID
const MEMBERSHIP_SHEET_NAME = 'membershipList'; // Sheet name for memberships
const MEMBERSHIP_WORKBOOK_NAME = 'LiSuMembershipList'; // Workbook name (for reference)

/**
 * Main function to handle POST requests
 */
function doPost(e) {
  try {
    // Parse the JSON data from the request
    const data = JSON.parse(e.postData.contents);
    
    // Check if this is a membership form or application form
    if (data.formType === 'membership') {
      return handleMembershipSubmission(data);
    } else {
      return handleApplicationSubmission(data);
    }
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handle Application Form submissions
 */
function handleApplicationSubmission(data) {
  try {
    // Open the spreadsheet
    const spreadsheet = SpreadsheetApp.openById(APPLICATION_SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName(APPLICATION_SHEET_NAME);
    
    // Create the sheet if it doesn't exist
    if (!sheet) {
      sheet = spreadsheet.insertSheet(APPLICATION_SHEET_NAME);
      // Add headers if this is a new sheet
      sheet.appendRow([
        'Reference Name',
        'Program Category',
        'Full Name',
        'Phone',
        'Village',
        'P.O.',
        'Description',
        'Submitted At'
      ]);
    }
    
    // Prepare the row data
    const rowData = [
      data.referenceName || '',
      data.programCategory || '',
      data.fullName || '',
      data.phone || '',
      data.village || '',
      data.po || '',
      data.description || '',
      data.submittedAt || new Date().toISOString()
    ];
    
    // Add the row to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Application submitted successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    throw new Error('Application submission error: ' + error.toString());
  }
}

/**
 * Handle Membership Form submissions
 */
function handleMembershipSubmission(data) {
  try {
    // Open the spreadsheet
    const spreadsheet = SpreadsheetApp.openById(MEMBERSHIP_SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName(MEMBERSHIP_SHEET_NAME);
    
    // Create the sheet if it doesn't exist
    if (!sheet) {
      sheet = spreadsheet.insertSheet(MEMBERSHIP_SHEET_NAME);
      // Add headers if this is a new sheet
      sheet.appendRow([
        'Full Name',
        'Age',
        'Email',
        'Phone',
        'Address',
        'Membership Type',
        'Occupation',
        'Reason',
        'Submitted At'
      ]);
    }
    
    // Prepare the row data
    const rowData = [
      data.fullName || '',
      data.age || '',
      data.email || '',
      data.phone || '',
      data.address || '',
      data.membershipType || '',
      data.occupation || '',
      data.reason || '',
      data.submittedAt || new Date().toISOString()
    ];
    
    // Add the row to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Membership application submitted successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    throw new Error('Membership submission error: ' + error.toString());
  }
}

/**
 * Function to handle GET requests (for testing)
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      message: 'LISU Foundation Forms API',
      status: 'active',
      forms: ['application', 'membership']
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Setup function for Application Sheet - run this once to create the sheet with headers
 * You can run this manually from the Apps Script editor
 */
function setupApplicationSheet() {
  try {
    const spreadsheet = SpreadsheetApp.openById(APPLICATION_SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName(APPLICATION_SHEET_NAME);
    
    if (!sheet) {
      sheet = spreadsheet.insertSheet(APPLICATION_SHEET_NAME);
    }
    
    // Check if headers exist
    const headers = sheet.getRange(1, 1, 1, 8).getValues()[0];
    if (headers[0] !== 'Reference Name') {
      // Add headers
      sheet.getRange(1, 1, 1, 8).setValues([[
        'Reference Name',
        'Program Category',
        'Full Name',
        'Phone',
        'Village',
        'P.O.',
        'Description',
        'Submitted At'
      ]]);
      
      // Format header row
      const headerRange = sheet.getRange(1, 1, 1, 8);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#4285f4');
      headerRange.setFontColor('#ffffff');
    }
    
    Logger.log('Application sheet setup completed successfully');
    return 'Application sheet setup completed successfully';
  } catch (error) {
    Logger.log('Error setting up application sheet: ' + error.toString());
    return 'Error: ' + error.toString();
  }
}

/**
 * Setup function for Membership Sheet - run this once to create the sheet with headers
 * You can run this manually from the Apps Script editor
 */
function setupMembershipSheet() {
  try {
    const spreadsheet = SpreadsheetApp.openById(MEMBERSHIP_SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName(MEMBERSHIP_SHEET_NAME);
    
    if (!sheet) {
      sheet = spreadsheet.insertSheet(MEMBERSHIP_SHEET_NAME);
    }
    
    // Check if headers exist
    const headers = sheet.getRange(1, 1, 1, 9).getValues()[0];
    if (headers[0] !== 'Full Name') {
      // Add headers
      sheet.getRange(1, 1, 1, 9).setValues([[
        'Full Name',
        'Age',
        'Email',
        'Phone',
        'Address',
        'Membership Type',
        'Occupation',
        'Reason',
        'Submitted At'
      ]]);
      
      // Format header row
      const headerRange = sheet.getRange(1, 1, 1, 9);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#34a853');
      headerRange.setFontColor('#ffffff');
    }
    
    Logger.log('Membership sheet setup completed successfully');
    return 'Membership sheet setup completed successfully';
  } catch (error) {
    Logger.log('Error setting up membership sheet: ' + error.toString());
    return 'Error: ' + error.toString();
  }
}

