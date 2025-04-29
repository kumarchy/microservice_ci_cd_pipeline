export const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  // Verify the token (this is just a placeholder, implement your own logic)
  if (token !== 'valid-token') {
    return res.status(403).json({ message: 'Forbidden' });
  }
  next();
}