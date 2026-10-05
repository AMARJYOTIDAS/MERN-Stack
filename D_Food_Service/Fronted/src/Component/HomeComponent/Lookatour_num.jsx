import React from "react";
import img8 from "../../assets/img8.png";
import img9 from "../../assets/img9.png";
import img10 from "../../assets/img10.png";
import img11 from "../../assets/img11.png";

const Lookatour_num = () => {
  let data = [
    {
      img: img8,
      num: "10k",
      head: "Satisfied Customer",
    },
    {
      img: img9,
      num: "45k",
      head: "Food Delivered",
    },
    {
      img: img10,
      num: "25k",
      head: "Trusted Partners",
    },
    {
      img: img11,
      num: "15k",
      head: "Experienced Drivers",
    },
  ];

  return (
    <div className="font-sans ">
      <h1 className="mx-auto text-4xl font-semibold mt-10 text-center">
        Look at Our Numbers
      </h1>
      <div className="flex justify-between items-center gap-10 mt-20">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-white px-12 py-8 space-y-6 rounded-xl flex flex-col items-center shadow-2xl shadow-gray-800"
          >
            <img
              src={item.img}
              alt={item.head}
              className="size-30 object-cover"
            />
            <h1 className="text-5xl font-semibold text-green-600">
              {item.num}
            </h1>
            <h1 className="font-stretch-90% text-2xl">{item.head}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lookatour_num;
