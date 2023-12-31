const express = require("express");
const router = express.Router();
const User = require("../model/User");
const bcrypt = require("bcrypt");

const { body, validationResult } = require("express-validator");
router.post(
  "/createuser",
  [
    body("email").isEmail(),
    body("password", "Password must be min 5 characters").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }

    let salt = await bcrypt.genSalt(10);
    let pass = await bcrypt.hash(req.body.password, salt);
    try {
      await User.create({
        name: req.body.name,
        location: req.body.location,
        email: req.body.email,
        password: pass,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

module.exports = router;
