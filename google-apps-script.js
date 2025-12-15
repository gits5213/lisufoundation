/**
 * Google Apps Script for LISU Foundation Application Form
 * 
 * This script receives form submissions and adds them to a Google Sheet
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to https://script.google.com
 * 2. Create a new project
 * 3. Paste this code
 * 4. Update the SPREADSHEET_ID and SHEET_NAME constants below
 * 5. Deploy as a web app:
 *    - Click "Deploy" > "New deployment"
 *    - Choose type: "Web app"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone"
 *    - Click "Deploy"
 * 6. Copy the Web App URL and use it as NEXT_PUBLIC_GOOGLE_SCRIPT_URL
 * 
 * IMPORTANT: Make sure the Google account (lisufoundationbd@gmail.com) has access to the spreadsheet
 */

// Configuration
const SPREADSHEET_ID = '1_efZsqbwGTOuJKXyh1JPXQX9bWLMe3SLO_cHmmddpd0'; // Replace with your Google Sheet ID
const SHEET_NAME = 'application'; // Sheet name where data will be added
const WORKBOOK_NAME = 'applicationList'; // Workbook name (for reference)

/**
 * Main function to handle POST requests
 */
function doPost(e) {
  try {
    // Parse the JSON data from the request
    const data = JSON.parse(e.postData.contents);
    
    // Open the spreadsheet
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    // Create the sheet if it doesn't exist
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
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
 * Function to handle GET requests (for testing)
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      message: 'LISU Foundation Application Form API',
      status: 'active'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Setup function - run this once to create the sheet with headers
 * You can run this manually from the Apps Script editor
 */
function setupSheet() {
  try {
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
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
    
    Logger.log('Sheet setup completed successfully');
    return 'Sheet setup completed successfully';
  } catch (error) {
    Logger.log('Error setting up sheet: ' + error.toString());
    return 'Error: ' + error.toString();
  }
}

