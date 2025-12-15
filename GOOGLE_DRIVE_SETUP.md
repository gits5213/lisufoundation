# Google Drive Integration Setup Guide

This guide explains how to set up the Google Drive integration for the application form.

## Overview

When users submit the application form, the data will be automatically added to a Google Sheet in Excel format. The data will be stored in:
- **Workbook Name**: `applicationList`
- **Sheet Name**: `application`
- **Google Drive Email**: `lisufoundationbd@gmail.com`

## Prerequisites

1. A Google account (`lisufoundationbd@gmail.com`)
2. Access to Google Apps Script
3. A Google Sheet (or create a new one)

## Step-by-Step Setup

### Step 1: Create or Open Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet or open an existing one
3. Rename the spreadsheet to `applicationList` (if not already named)
4. Rename the first sheet to `application` (or create a new sheet with this name)
5. Copy the **Spreadsheet ID** from the URL:
   - The URL looks like: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID_HERE/edit`
   - Copy the `SPREADSHEET_ID_HERE` part

### Step 2: Set Up Google Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Click **"New Project"**
3. Delete the default code and paste the contents of `google-apps-script.js`
4. Update the `SPREADSHEET_ID` constant with your spreadsheet ID:
   ```javascript
   const SPREADSHEET_ID = 'YOUR_ACTUAL_SPREADSHEET_ID_HERE';
   ```
5. Save the project (Ctrl+S or Cmd+S)
6. Name your project (e.g., "LISU Foundation Application Form")

### Step 3: Run Setup Function (Optional but Recommended)

1. In the Apps Script editor, select the `setupSheet` function from the function dropdown
2. Click **"Run"** (▶️ button)
3. Authorize the script when prompted:
   - Click **"Review Permissions"**
   - Choose your Google account
   - Click **"Advanced"** > **"Go to [Project Name] (unsafe)"**
   - Click **"Allow"**
4. This will create the sheet with proper headers if it doesn't exist

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

1. Start your development server:
   ```bash
   npm run dev
   ```
2. Navigate to the application form page
3. Fill out and submit a test application
4. Check your Google Sheet - you should see the new row added

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

### Applications Not Appearing in Sheet

1. **Check the Web App URL**: Make sure `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` is set correctly
2. **Check Permissions**: Ensure the Web App is deployed with "Anyone" access
3. **Check Spreadsheet ID**: Verify the `SPREADSHEET_ID` in the Apps Script matches your sheet
4. **Check Sheet Name**: Ensure the sheet name is exactly `application` (case-sensitive)
5. **Check Browser Console**: Open browser DevTools and check for any error messages

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

