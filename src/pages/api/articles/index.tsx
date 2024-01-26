import { NextApiRequest, NextApiResponse } from 'next';
import articlesdata from "@/data/articlesdata";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      return res.status(200).json({ status: 'success', articlesdata });
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}