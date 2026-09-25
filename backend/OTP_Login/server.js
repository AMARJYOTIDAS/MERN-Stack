const express = require("express");

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.static("public"));

let generatedOTP = null;
let loggedInUser = null;

// generate OTP ->

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000);
}

// send OTP ->
app.post("/send-otp", (req, res) => {
  const { phone } = req.body;

  if (!phone) {
    return res.status(400).json({
      message: "phone number is required",
    });
  }

  generatedOTP = generateOTP();

  console.log("Generated OTP:", generatedOTP);

  res.json({
    message: "OTP sent successfully",
  });
});

// verify otp ->
app.post("/verify-otp", (req, res) => {
  const { phone, otp } = req.body;

  if (!phone || !otp) {
    return res.status(400).json({
      message: "phone number & otp is required",
    });
  }

  if (Number(otp) !== generatedOTP) {
    return res.status(401).json({
      message: "Invalid OTP",
    });
  }

  loggedInUser = phone;

  res.json({
    message: "Login successful",
    user: phone,
  });
});
app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
