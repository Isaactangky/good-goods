const express = require("express");
const app = express();
const mongoose = require("mongoose");
const post = require("./routes/api/post");
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

app.use(express.urlencoded({ extended: true }));
app.use("/api/post", post);
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`app listen on port ${port}`);
});
