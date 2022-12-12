module.exports = (func) => {
  return (req, res, next) =>
    func(req, res, next).catch((error) => {
      return res.status(400).json({ error: error.message });
    });
};
