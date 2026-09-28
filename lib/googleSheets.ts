/**
 * Google Sheets Integration Helper for MYBF Registrations
 * Supports Google Apps Script Webhook URL for instant Google Sheet sync
 */

export interface SheetRowData {
  registrationId: string;
  fullName: string;
  mobileNumber: string;
  email: string;
  location: string;
  age: string | number;
  occupation: string;
  organization: string;
  interest: string;
  registrationDate: string;
  status: string;
}

export async function syncToGoogleSheet(data: SheetRowData): Promise<{ success: boolean; error?: string }> {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;

  if (!webhookUrl || webhookUrl.trim() === '') {
    return { success: false, error: 'GOOGLE_SHEET_WEBHOOK_URL is not configured in .env' };
  }

  try {
    const response = await fetch(webhookUrl.trim(), {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(data),
      redirect: 'follow',
    });

    if (response.ok || response.status === 302 || response.status === 200) {
      return { success: true };
    } else {
      const text = await response.text();
      return { success: false, error: `Google Sheets Webhook returned status ${response.status}: ${text}` };
    }
  } catch (err: any) {
    console.error('Failed to sync to Google Sheet:', err);
    return { success: false, error: err.message || 'Network error syncing to Google Sheet' };
  }
}

/**
 * Ready-to-use Google Apps Script Code snippet for the user to copy & paste into their Google Sheet
 */
export const GOOGLE_APPS_SCRIPT_CODE = `
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Auto-create headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Registration ID",
        "Full Name",
        "Mobile Number",
        "Email",
        "Location",
        "Age",
        "Occupation",
        "Organization",
        "Interest",
        "Registration Date",
        "Status"
      ]);
      // Format Header Row
      var headerRange = sheet.getRange(1, 1, 1, 11);
      headerRange.setBackground("#035AFC");
      headerRange.setFontColor("#FFFFFF");
      headerRange.setFontWeight("bold");
    }
    
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      data.registrationId || "",
      data.fullName || "",
      data.mobileNumber || "",
      data.email || "",
      data.location || "",
      data.age || "",
      data.occupation || "",
      data.organization || "",
      data.interest || "",
      data.registrationDate || new Date().toLocaleString(),
      data.status || "Confirmed"
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ "status": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "status": "error", "message": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
`;
