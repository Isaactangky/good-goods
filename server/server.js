if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
// const session = require("express-session");
// const MongoStore = require("connect-mongo");

// passport
// const passport = require("passport");
// const localStrategy = require("passport-local");
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
// app.use(cors({ origin: "http://localhost:3000" }));
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

// session
/*
const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: {
    secret,
  },
  touchAfter: 24 * 60 * 60,
});
store.on("error", (e) => {
  console.log("Session Store Error", e);
});
const sessionConfig = {
  store,
  name: "_cyc",
  secret,
  resave: false,
  saveUninitialized: true,
  // secure:true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};
app.use(session(sessionConfig));
// passport
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
*/

app.use("/api/post", require("./routes/api/post"));
app.use("/api/post/:id/reviews", require("./routes/api/review"));
app.use("/auth/user", require("./routes/auth/user"));

// app.use((err, req, res, next) => {
//   const { statusCode = 400 } = err;
//   if (!err.message) err.message = "Something went wrong";
//   res.status(statusCode).json(err);
// });
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`app listen on port ${port}`);
});
