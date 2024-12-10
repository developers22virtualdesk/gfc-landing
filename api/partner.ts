import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse)
{
  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS')
  {
    return res.status(200).end();
  }

  try
  {
    const allowedOrigin = process.env['VERCEL_URL']!;
    const url = process.env['PARTNER_URL']!;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : allowedOrigin,
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    return res.status(200).json({ success: true, data });
  }
  catch (error: any)
  {
    return res.status(500).json({ success: false, error: error.message });
  }
}
