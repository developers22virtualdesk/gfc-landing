import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

const webhookMap = new Map<string, string>([
  ['general', 'https://hooks.zapier.com/hooks/catch/18952192/2izqj42/'],
  ['client', 'https://hooks.zapier.com/hooks/catch/18952192/2ipysiq/'],
  ['partner', 'https://hooks.zapier.com/hooks/catch/18952192/2ixv7zy/']
]);

export default async function handler(req: VercelRequest, res: VercelResponse)
{
  const allowedOrigin = 'http://localhost:4200';

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


  const { lead } = req.query

  if (!lead || !webhookMap.has(lead as string))
  {
    return res.status(400).json({ error: 'Invalid or missing lead parameter' });
  }

  const webhookUrl = webhookMap.get(lead as string)!;

  try
  {
    await axios.post(webhookUrl, req.body);

    return res.status(200).json({ success: true });
  } catch (error: any)
  {
    return res.status(500).json({ success: false, error: error.message });
  }
}
