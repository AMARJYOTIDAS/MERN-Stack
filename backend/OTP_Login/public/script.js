async function sendOTP() {
  const phone = document.getElementById("phone").value;

  if (!phone) {
    document.getElementById("message").innerText = "Please Enter Phone Number";
    return; // stop the function
  }

  const response = await fetch("/send-otp", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      phone: phone,
    }),
  });

  const data = await response.json();

  document.getElementById("message").innerText = data.message;

  // check the response was successful or not
  if (response.ok) {
    document.getElementById("phone-section").style.display = "none";
    document.getElementById("otp-section").style.display = "block";
  }
}

async function verifyOTP() {
  const phone = document.getElementById("phone").value;
  const otp = document.getElementById("otp").value;

  if (!otp) {
    document.getElementById("message").innerText = "Please enter OTP";
    return;
  }

  const response = await fetch("/verify-otp", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      phone: phone,
      otp: otp,
    }),
  });

  const data = await response.json();

  document.getElementById("message").innerText = data.message;

  if (response.ok) {
    document.getElementById("otp-section").innerHTML = `
        <h2>Login Successful</h2>
        <p>Welcome ${data.user}</p>
    `;
  }
}
