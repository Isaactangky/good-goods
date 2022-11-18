const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const post = require("./routes/api/post");
const review = require("./routes/api/review");

const { dbUrl } = require("./config");
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  // useCreateIndex: true,
  useUnifiedTopology: true,
  // useFindAndModify: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
  console.log("Database connected");
});
// Body-parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// CORS Middleware
app.use(cors({ origin: "http://localhost:3000" }));

app.use("/api/post", post);
app.use("/api/post/:id/reviews", review);

app.use((err, req, res, next) => {
  const { statusCode = 400 } = err;
  if (!err.message) err.message = "Something went wrong";
  res.status(statusCode).json(err);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`app listen on port ${port}`);
});
