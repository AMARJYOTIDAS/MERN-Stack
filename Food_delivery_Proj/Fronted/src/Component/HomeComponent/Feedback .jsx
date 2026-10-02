import React from "react";
import customer1 from "../../assets/customer1.png";
import customer2 from "../../assets/customer2.jpg";
import customer3 from "../../assets/customer3.jpg";
import customer4 from "../../assets/customer4.jpg";

const Feedback = () => {
  let data = [
    {
      img: customer1,
      name: "Shruti Sharma",
      comment:
        "The food at seetal was absolutely delicious! The flavors were vibrant, and everything was cooked to perfection...",
    },
    {
      img: customer2,
      name: "Rabindra Kumar",
      comment:
        "I’ve been to seetal multiple times, and it never disappoints. The menu has a great variety...",
    },
    {
      img: customer3,
      name: "Chinmaya Sharma",
      comment:
        "Excellent food with great value! I ordered takeout from [Food Center Name], and the process was smooth and efficient...",
    },
    {
      img: customer4,
      name: "Rahul Chaudhary",
      comment:
        "I’m so glad I found [Food Center Name]! The meals are bursting with flavor, and the presentation is always beautiful...",
    },
  ];
  return (
    <section id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20 px-10">
        {data.map((item, i) => (
          <div key={i} className="bg-white p-5 rounded-lg shadow-2xl">
            <div className="flex items-center gap-5">
              <img
                src={item.img}
                alt={item.name}
                className="w-16 h-16 rounded-full object-cover"
              />

              <div>
                <h1 className="text-xl font-medium">{item.name}</h1>

                <p className="text-green-600 text-lg">Customer</p>
              </div>
            </div>

            <p className="mt-5 text-[#7D7987] text-lg leading-7">
              "{item.comment}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feedback;
