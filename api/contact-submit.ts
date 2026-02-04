import type { VercelRequest, VercelResponse } from '@vercel/node';
import { drizzle } from "drizzle-orm/libsql";
import { sql } from "drizzle-orm";

export const config = {
  runtime: 'nodejs',
};

// Environment variables
const TURSO_DATABASE_URL = process.env.TURSO_DATABASE_URL;
const TURSO_AUTH_TOKEN = process.env.TURSO_AUTH_TOKEN;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { firstName, lastName, email, phone, company, message } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Check database credentials
    if (!TURSO_DATABASE_URL || !TURSO_AUTH_TOKEN) {
      console.error('Missing database credentials');
      return res.status(500).json({ error: 'Database configuration error' });
    }

    // Connect to database
    const db = drizzle({
      connection: {
        url: TURSO_DATABASE_URL,
        authToken: TURSO_AUTH_TOKEN,
      },
    });

    // Insert into database
    const fullName = `${firstName} ${lastName}`;
    const result = await db.run(sql`
      INSERT INTO contact_submissions (name, email, company, phone, message, source, status)
      VALUES (${fullName}, ${email}, ${company || null}, ${phone || null}, ${message}, 'website', 'new')
    `);

    console.log('Contact submission saved:', result);

    // Send email notification if Resend is configured
    if (RESEND_API_KEY && RESEND_FROM_EMAIL) {
      try {
        const resendResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: RESEND_FROM_EMAIL,
            to: RESEND_FROM_EMAIL,
            subject: `New Contact Form Submission from ${fullName}`,
            html: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${fullName}</p>
              <p><strong>Email:</strong> ${email}</p>
              ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
              ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
              <p><strong>Message:</strong></p>
              <p>${message}</p>
            `,
          }),
        });

        if (!resendResponse.ok) {
          console.error('Failed to send email:', await resendResponse.text());
        } else {
          console.log('Email notification sent successfully');
        }
      } catch (emailError) {
        console.error('Error sending email:', emailError);
        // Don't fail the request if email fails
      }
    }

    return res.status(200).json({ 
      success: true,
      message: 'Contact submission received successfully'
    });

  } catch (error) {
    console.error('Error processing contact submission:', error);
    return res.status(500).json({ 
      error: 'Failed to process submission',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
