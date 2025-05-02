export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ message: 'Missing token' });
  }

  console.log("✅ Received token:", token);

  // For now, just store in a local array or eventually a DB
  // This version just acknowledges the request
  return res.status(200).json({ message: 'Token received' });
}