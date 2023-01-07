module.exports = (func) => {
  return (req, res, next) =>
    func(req, res, next).catch((error) => {
      const statusCode = res.statusCode ? res.statusCode : 400;
      return res.status(statusCode).json({ message: error.message });
    });
};
