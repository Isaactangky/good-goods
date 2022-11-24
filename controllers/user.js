const User = require("../models/user");
module.exports.index = async (req, res) => {
  // res.json({ name: 123 });
  if (req.isAuthenticated()) {
    //req.user._doc
    console.log(req.user);
    res.status(200).json({ isLoggedIn: true, user: req.user });
  } else {
    res.status(401).json({ isLoggedIn: false, user: null });
  }
};
module.exports.register = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    console.log(req.body);
    if (!username || !password || !email)
      return res
        .status(400)
        .json({ success: false, msg: "Please fill in all the fields" });
    // check for existing user
    const foundUser = await User.findOne({ email });
    if (foundUser)
      return res
        .status(400)
        .json({ success: false, msg: "User already exist" });
    const user = new User({ username, email });
    const registeredUser = await User.register(user, password);
    console.log(registeredUser);

    req.login(registeredUser, (err) => {
      if (err) throw err;
      // req.flash("success", `Welcome to YelpCamp, ${registeredUser.username}`);
      // res.redirect("/campgrounds");
      const { username, password, email } = registeredUser;
      res
        .status(200)
        .json({ success: true, user: { username, password, email } });
      // res.redirect("/");
    });
  } catch (error) {
    res.status(200).json({ success: false, error });
  }
};

module.exports.login = async (req, res) => {
  try {
    const { username, email, _id } = req.user;
    res.status(200).json({ success: true, user: { username, email, _id } });
    // res.redirect(`${process.env.CLIENT_BASE_URL}`);
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};
module.exports.logout = async (req, res) => {
  req.logout(function (error) {
    if (error) {
      res.status(400).json({ success: false, error });
    }
    res.status(200).json({ success: true });
  });
};
