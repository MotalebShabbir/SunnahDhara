const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { fullName, mobile, password, role } = req.body;
    // check mobile number already registered
    const existingUser = await User.findOne({ mobile });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "This number already registered" });
    }
    // create hashed password
    const hashedPassword = await bcrypt.hash(password, 10);
    // create memberId
    const memberId = `SDF-${(Date.now() - new Date("2026-01-26").getTime()).toString(36).toUpperCase()}`;
    // role selected check
    const allowedRoles = ["Supporter", "Volunteer"];
    const selectedRole = allowedRoles.includes(role) ? role : "Supporter";
    // save in database
    const user = await User.create({
      fullName,
      mobile,
      password: hashedPassword,
      memberId,
      role: selectedRole,
    });
    res
      .status(201)
      .json({ message: "Registration Successfull", memberId: user.memberId });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
const login = async (req, res) => {
  try {
    const { mobile, password } = req.body;
    // mobile number check
    const user = await User.findOne({ mobile });
    if (!user) {
      return res.status(404).json({ message: "Member not found" });
    }
    // match password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect password" });
    }
    // Create JWT token
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
        memberId: user.memberId,
      },
      process.env.JWT_SECRET,
      { expiresIn: "30d" },
    );
    // sent toekn to response
    res.status(200).json({
      message: "Login successfull",
      token,
      user: {
        fullName: user.fullName,
        mobile: user.mobile,
        role: user.role,
        memberId: user.memberId,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
module.exports = { register, login };
