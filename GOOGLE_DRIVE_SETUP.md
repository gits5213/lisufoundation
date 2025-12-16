# Google Drive Integration Setup Guide

This guide explains how to set up the Google Drive integration for both the Application Form and Membership Application Form.

## Overview

When users submit forms, the data will be automatically added to Google Sheets in Excel format:

### Application Form
- **Workbook Name**: `applicationList`
- **Sheet Name**: `application`
- **Google Drive Email**: `lisufoundationbd@gmail.com`

### Membership Application Form
- **Workbook Name**: `LiSuMembershipList`
- **Sheet Name**: `membershipList`
- **Google Drive Email**: `lisufoundationbd@gmail.com`

## Prerequisites

1. A Google account (`lisufoundationbd@gmail.com`)
2. Access to Google Apps Script
3. A Google Sheet (or create a new one)

## Step-by-Step Setup

### Step 1: Create or Open Google Sheets

#### For Application Form:
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet or open an existing one
3. Rename the spreadsheet to `applicationList` (if not already named)
4. Rename the first sheet to `application` (or create a new sheet with this name)
5. Copy the **Spreadsheet ID** from the URL:
   - The URL looks like: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID_HERE/edit`
   - Copy the `SPREADSHEET_ID_HERE` part

#### For Membership Form:
1. Create a new spreadsheet or open an existing one
2. Rename the spreadsheet to `LiSuMembershipList`
3. Rename the first sheet to `membershipList` (or create a new sheet with this name)
4. Copy the **Spreadsheet ID** from the URL

### Step 2: Set Up Google Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Click **"New Project"**
3. Delete the default code and paste the contents of `google-apps-script.js`
4. Update the spreadsheet IDs:
   - For Application Form: Update `APPLICATION_SPREADSHEET_ID` (already set if you've done this before)
   - For Membership Form: Update `MEMBERSHIP_SPREADSHEET_ID`:
     ```javascript
     const MEMBERSHIP_SPREADSHEET_ID = 'YOUR_MEMBERSHIP_SPREADSHEET_ID_HERE';
     ```
5. Save the project (Ctrl+S or Cmd+S)
6. Name your project (e.g., "LISU Foundation Forms")

### Step 3: Run Setup Functions (Optional but Recommended)

#### For Application Form:
1. In the Apps Script editor, select the `setupApplicationSheet` function from the function dropdown
2. Click **"Run"** (▶️ button)
3. Authorize the script when prompted (if not already done)
4. This will create the application sheet with proper headers if it doesn't exist

#### For Membership Form:
1. In the Apps Script editor, select the `setupMembershipSheet` function from the function dropdown
2. Click **"Run"** (▶️ button)
3. This will create the membership sheet with proper headers if it doesn't exist

### Step 4: Deploy as Web App

1. In the Apps Script editor, click **"Deploy"** > **"New deployment"**
2. Click the gear icon (⚙️) next to **"Select type"** and choose **"Web app"**
3. Configure the deployment:
   - **Description**: "LISU Foundation Application Form API"
   - **Execute as**: **"Me"** (your Google account)
   - **Who has access**: **"Anyone"** (important for public form submissions)
4. Click **"Deploy"**
5. **Copy the Web App URL** - you'll need this for the next step
6. Click **"Done"**

### Step 5: Configure Environment Variable

1. Create a `.env.local` file in the project root (if it doesn't exist)
2. Add the following line:
   ```
   NEXT_PUBLIC_GOOGLE_SCRIPT_URL=YOUR_WEB_APP_URL_HERE
   ```
   Replace `YOUR_WEB_APP_URL_HERE` with the Web App URL you copied in Step 4

3. For production deployment (GitHub Pages/Vercel/etc.):
   - Add `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` as an environment variable in your hosting platform
   - For GitHub Pages: Use GitHub Actions secrets/variables
   - For Vercel: Add it in Project Settings > Environment Variables

### Step 6: Test the Integration

#### Test Application Form:
1. Start your development server:
   ```bash
   npm run dev
   ```
2. Navigate to the application form page
3. Fill out and submit a test application
4. Check your Google Sheet - you should see the new row added

#### Test Membership Form:
1. Navigate to the membership page
2. Fill out and submit a test membership application
3. Check your Membership Google Sheet - you should see the new row added

## Sheet Structure

The sheet will have the following columns:

| Column | Description |
|--------|-------------|
| Reference Name | Auto-generated or user-provided reference |
| Program Category | Selected program category |
| Full Name | Applicant's full name |
| Phone | Phone number |
| Village | Village name |
| P.O. | Post office name |
| Description | Application description |
| Submitted At | Timestamp of submission |

## Troubleshooting

### Applications/Memberships Not Appearing in Sheet

1. **Check the Web App URL**: Make sure `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` is set correctly
2. **Check Permissions**: Ensure the Web App is deployed with "Anyone" access
3. **Check Spreadsheet IDs**: 
   - For Application Form: Verify `APPLICATION_SPREADSHEET_ID` matches your sheet
   - For Membership Form: Verify `MEMBERSHIP_SPREADSHEET_ID` matches your sheet
4. **Check Sheet Names**: 
   - Application sheet name must be exactly `application` (case-sensitive)
   - Membership sheet name must be exactly `membershipList` (case-sensitive)
5. **Check Browser Console**: Open browser DevTools and check for any error messages
6. **Verify Form Type**: Ensure the form includes `formType: 'membership'` for membership submissions

### CORS Errors

The script uses `no-cors` mode, so you won't see response data in the browser. This is normal. The data will still be submitted successfully.

### Permission Errors

If you see permission errors:
1. Make sure you've authorized the Apps Script
2. Ensure the Google account has access to the spreadsheet
3. Re-deploy the Web App and ensure "Execute as" is set to "Me"

### Testing the Script Directly

You can test the script directly:
1. In Apps Script editor, select `doPost` function
2. Click "Run" (this won't work for POST, but you can test `doGet`)
3. Or use a tool like Postman to send POST requests to your Web App URL

## Security Notes

- The Web App URL is public, but only accepts POST requests with valid JSON data
- Consider adding validation or authentication if needed
- The spreadsheet should be shared only with authorized personnel
- Consider setting up email notifications for new submissions (can be added to the script)

## Updating the Script

If you need to update the script:
1. Make changes in the Apps Script editor
2. Click **"Deploy"** > **"Manage deployments"**
3. Click the edit icon (✏️) next to your deployment
4. Click **"New version"**
5. Click **"Deploy"**

The Web App URL will remain the same, so no changes are needed in your environment variables.

