export default function handler(req, res) {
  const { url } = req.query;
  res.status(200).json({
    ok: true,
    message: 'API работает',
    receivedUrl: url || null,
  });
}
