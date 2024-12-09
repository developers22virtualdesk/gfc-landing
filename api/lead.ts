import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';
import { FORM_TYPE } from '../src/app/_core/enums/form.enum';

const webhookMap = new Map<FORM_TYPE, string>([
  [FORM_TYPE.General, process.env['GENERAL_URL']!],
  [FORM_TYPE.Client, process.env['CLIENT_URL']!],
  [FORM_TYPE.Partner, process.env['PARTNER_URL']!],
]);

export default async function handler(req: VercelRequest, res: VercelResponse)
{
  const allowedOrigin = process.env['VERCEL_URL']! || 'http://localhost:3000/';

  res.setHeader('Access-Control-Allow-Origin', allowedOrigin);
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow specific headers
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS')
  {
    return res.status(200).end(); // Respond with 200 OK for preflight requests
  }

  if (req.method !== 'POST')
  {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { lead } = req.query;

  var leadType : FORM_TYPE = FORM_TYPE[lead as keyof typeof FORM_TYPE];

  if (!lead || !webhookMap.has(leadType))
  {
    return res.status(400).json({ error: 'Invalid or missing lead parameter' });
  }

  const webhookUrl = webhookMap.get(leadType)!;

  try
  {
    await axios.post(webhookUrl, req.body);
    console.info(webhookUrl);
    return res.status(200).json({ success: true });
  } catch (error: any)
  {
    console.info(error.message);
    return res.status(500).json({ success: false, error: error.message });
  }
}
