// BACKEND/middleware/adminAuthMiddleware.js
const authenticateUser = require('./authMiddleware');

const authorizeAdmin = (req, res, next) => {
  authenticateUser(req, res, () => {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Admin access required' });
    }
    next();
  });
};

module.exports = authorizeAdmin;
