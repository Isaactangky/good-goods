module.exports.dbUrl =
  process.env.DB_URL || "mongodb://localhost:27017/good-goods";
module.exports.JWT_TOKEN_EXPIRATION = 3600 * 24;