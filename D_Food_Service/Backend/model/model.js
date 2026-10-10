const mongoose = require("mongoose");

const loginShema = new mongoose.Shema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },
  },
  {
    timestamps: true,
  },
);
const User = mongoose.model("users", loginShema);

export default User;
