const User = require("../models/user.model");
const bcrypt = require("bcrypt");

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
module.exports = { register };
