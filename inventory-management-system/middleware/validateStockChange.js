// body should look like { "change": 10 } for restock or { "change": -3 } for sale
const validateStockChange = (req, res, next) => {
  const { change } = req.body;

  if (change === undefined) {
    return res.status(400).json({ message: '"change" is required in request body' });
  }
  if (typeof change !== 'number' || !Number.isInteger(change)) {
    return res.status(400).json({ message: '"change" must be a whole number' });
  }
  if (change === 0) {
    return res.status(400).json({ message: '"change" cannot be 0' });
  }
  next();
};

module.exports = validateStockChange;
