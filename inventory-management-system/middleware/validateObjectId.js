const mongoose = require('mongoose');

// checks that :id in the url is a valid MongoDB ObjectId
const validateObjectId = (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: `Invalid product id: ${req.params.id}` });
  }
  next();
};

module.exports = validateObjectId;
