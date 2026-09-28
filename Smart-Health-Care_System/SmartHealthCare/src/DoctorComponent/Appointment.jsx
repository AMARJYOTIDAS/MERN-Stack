import React, { useState } from "react";

const Appointment = () => {
  const [formData, setFormData] = useState({
    doctor: "",
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    reason: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const doctors = [
    {
      id: 1,
      name: "Dr. Ananya Sharma",
      specialization: "General Physician",
    },
    {
      id: 2,
      name: "Dr. Rahul Das",
      specialization: "Cardiologist",
    },
    {
      id: 3,
      name: "Dr. Priya Singh",
      specialization: "Dermatologist",
    },
    {
      id: 4,
      name: "Dr. Arjun Patel",
      specialization: "Neurologist",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Appointment Data:", formData);

    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-white to-blue-300 px-4 py-12">
      {/* Heading */}
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <h1 className="text-3xl font-bold text-gray-800 md:text-4xl">
          Book Your Appointment
        </h1>

        <p className="mt-3 text-gray-600">
          Schedule an appointment with our qualified doctors.
        </p>
      </div>

      {/* Appointment Card */}
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/60 bg-white/70 p-6 shadow-xl backdrop-blur-xl md:p-10">
        {submitted ? (
          /* Success Message */
          <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <span className="text-4xl text-green-600">✓</span>
            </div>

            <h2 className="text-2xl font-bold text-gray-800">
              Appointment Booked!
            </h2>

            <p className="mt-3 max-w-md text-gray-600">
              Your appointment request has been submitted successfully. Our
              healthcare team will contact you shortly.
            </p>

            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  doctor: "",
                  name: "",
                  email: "",
                  phone: "",
                  date: "",
                  time: "",
                  reason: "",
                });
              }}
              className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Book Another Appointment
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* Doctor */}
            <div className="mb-6">
              <label className="mb-2 block font-semibold text-gray-700">
                Select Doctor
              </label>

              <select
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              >
                <option value="">Choose a doctor</option>

                {doctors.map((doctor) => (
                  <option key={doctor.id} value={doctor.name}>
                    {doctor.name} - {doctor.specialization}
                  </option>
                ))}
              </select>
            </div>

            {/* Patient Details */}
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block font-semibold text-gray-700">
                  Patient Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold text-gray-700">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>
            </div>

            {/* Email */}
            <div className="mt-6">
              <label className="mb-2 block font-semibold text-gray-700">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            {/* Date & Time */}
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block font-semibold text-gray-700">
                  Appointment Date
                </label>

                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold text-gray-700">
                  Preferred Time
                </label>

                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>
            </div>

            {/* Reason */}
            <div className="mt-6">
              <label className="mb-2 block font-semibold text-gray-700">
                Reason for Appointment
              </label>

              <textarea
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                rows="4"
                placeholder="Briefly describe your problem..."
                required
                className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-8 w-full rounded-xl bg-blue-600 px-6 py-3.5 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
            >
              Book Appointment
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Appointment;
