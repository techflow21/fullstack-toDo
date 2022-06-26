const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const validateRegisterInput = require("../validation/registerValidation");

// @route GET/api/auth
router.get("/test", (req, res) => {
  res.send("Auth route is working");
});

// @route GET/api/auth
router.post("/register", async (req, res) => {
  try {
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    // check for existing user
    const existingEmail = await User.findOne({
      email: new RegExp("^" + req.body.email + "$" + "i"),
    });

    if (existingEmail) {
      return res
        .status(400)
        .json({ error: "User with this email already exist" });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    const newUser = new User({
      email: req.body.email,
      password: hashedPassword,
      name: req.body.name,
    });

    const savedUser = await newUser.save();

    return res.json(savedUser);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
});
module.exports = router;
