import { NextRequest, NextResponse } from 'next/server';
import { EventRegistrationSchema } from '@/lib/validation';
import { syncToGoogleSheet } from '@/lib/googleSheets';
import { generateRegistrationId, formatDateTime } from '@/lib/utils';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // 1. Validate payload with Zod
    const validation = EventRegistrationSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed. Please check the entered details.',
          issues: validation.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { fullName, mobileNumber, email, location, age, occupation, organization, interests } =
      validation.data;

    // 2. Generate unique Registration ID & formatted timestamp
    const registrationId = generateRegistrationId();
    const interestString = interests.join(', ');
    const registrationDateFormatted = formatDateTime(new Date());

    // 3. Store data directly to Google Sheet via Webhook
    const sheetResult = await syncToGoogleSheet({
      registrationId,
      fullName,
      mobileNumber,
      email: email || 'N/A',
      location,
      age: age ? String(age) : 'N/A',
      occupation,
      organization: organization || 'N/A',
      interest: interestString,
      registrationDate: registrationDateFormatted,
      status: 'Confirmed',
    });

    if (!sheetResult.success) {
      console.warn('Google Sheet sync warning:', sheetResult.error);
    }

    return NextResponse.json({
      success: true,
      message: 'Registration successful!',
      registrationId,
      data: {
        registrationId,
        fullName,
        mobileNumber,
        email: email || null,
        location,
        occupation,
        organization: organization || null,
        interest: interestString,
        registrationDate: registrationDateFormatted,
      },
    });
  } catch (error: any) {
    console.error('Registration API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error while processing registration.' },
      { status: 500 }
    );
  }
}
