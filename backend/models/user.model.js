const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    // Required fields
    fullName: { type: String, required: true },
    mobile: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["Supporter", "Volunteer", "Full Member", "EC", "Advisor"],
      default: "Supporter",
    },
    memberId: { type: String, unique: true }, // base36 from joining timestamp

    // Optional fields
    email: { type: String, sparse: true },
    profession: { type: String },
    address: { type: String },
    emergencyContact: { type: String },
    fatherName: { type: String },
    dateOfBirth: { type: Date },
    bloodGroup: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-", null],
    },
    education: { type: String },
    nidOrBirth: { type: String },
    skills: [{ type: String }], // array of skill
    photo: { type: String }, // image URL
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", userSchema);
