module.exports = (func) => {
  return (req, res, next) =>
    func(req, res, next).catch((error) => {
      let statusCode = res.statusCode ? res.statusCode : 400;
      if (statusCode === 200) statusCode = 400;

      //TODO deal with diff error e.g. CastError
      return res.status(statusCode).json({ message: error.message });
    });
};
