import React from "react";
import img7 from "../Assets/img7.png";
import img8 from "../Assets/img8.png";
import img9 from "../Assets/img9.png";

const Article = () => {
  const data = [
    {
      img: img7,
      header: "Disease detection, check up in the laboratory",
      description:
        "In this case, the role of the health laboratory is very important  to do a disease detection",
    },
    {
      img: img8,
      header: "Disease detection, check up in the laboratory",
      description:
        "In this case, the role of the health laboratory is very important  to do a disease detection",
    },
    {
      img: img9,
      header: "Disease detection, check up in the laboratory",
      description:
        "In this case, the role of the health laboratory is very important  to do a disease detection",
    },
  ];
  return (
    <section
      className="font-mono mb-5 min-h-screen 
      >"
    >
      <div className=" flex flex-col items-center gap-8 mt-15 px-7">
        <h1 className="text-olive-900 text-2xl font-bold mx-auto">
          Check out our latest article
        </h1>
        <div className=" border-2 bg-black w-36 mx-auto"></div>
      </div>
      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-6
        sm:gap-7
        lg:gap-8
        mt-10
        px-4
        sm:px-6
        lg:px-10
        max-w-7xl
        mx-auto"
      >
        {data.map((item, i) => (
          <div
            key={i}
            className="
        group
        w-full
        overflow-hidden
        rounded-2xl
        border border-white/30
        bg-white
        backdrop-blur-xl
        shadow-lg shadow-black/10
        transition-all duration-300
        hover:-translate-y-2
        hover:shadow-2xl
        hover:bg-white/30
      "
          >
            {/* Image */}
            <div className="w-full overflow-hidden p-4 sm:p-5 lg:p-6 py-1">
              <img
                src={item.img}
                alt={item.header}
                className="
            w-full
            h-48
            sm:h-52
            lg:h-56
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
          "
              />
            </div>

            {/* Content */}
            <div className="p-4 sm:p-5 lg:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
                {item.header}
              </h2>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {item.description}
              </p>

              <button
                className="
            mt-5
            px-4 sm:px-5
            py-2
            rounded-full
            bg-white/30
            border border-white/40
            backdrop-blur-md
            text-sm sm:text-base
            font-semibold
            text-gray-800
            transition-all duration-300
            hover:bg-white/50
            hover:scale-105
          "
              >
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Article;
