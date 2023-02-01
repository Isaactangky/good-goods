if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const User = require("./models/user");
const { dbUrl } = require("./config");
const secret = process.env.SECRET || "thisisnotagoodsecret";

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
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
const corsOptions = {
  origin: ["http://localhost:3000", process.env.CLIENT_BASE_URL],
  credentials: true, //access-control-allow-credentials:true
  // optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use("/api/post", require("./routes/api/post"));
app.use("/api/post/:id/reviews", require("./routes/api/review"));
app.use("/api/contactus", require("./routes/api/contactus"));
app.use("/auth/user", require("./routes/auth/user"));

// Error middleware
app.use((err, req, res, next) => {
  const { statusCode = 400 } = err;
  console.log(err);
  if (!err.message) err.message = "Something went wrong";
  res.status(statusCode).json({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`app listen on port ${port}`);
});
