import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";

const OurServices = () => {
  const data = [
    {
      img: img1,
      heading: "Search doctor",
      para: "Choose your doctor from thousands of specialist, general, and trusted hospitals",
    },
    {
      img: img2,
      heading: "Online pharmacy",
      para: "Buy  your medicines with our mobile application with a simple delivery system",
    },
    {
      img: img3,
      heading: "Consultation",
      para: "Free consultation with our trusted doctors and get the best recomendations",
    },
    {
      img: img4,
      heading: "Details info",
      para: "Free consultation with our trusted doctors and get the best recomendations",
    },
    {
      img: img5,
      heading: "Emergency care",
      para: "You can get 24/7 urgent care for yourself or your children and yourlovely family",
    },
    {
      img: img6,
      heading: "Tracking",
      para: "Track and save your medical history and health data ",
    },
  ];

  return (
    <section id="ourservice">
      <div className=" py-6 bg-blue-200">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-bold text-4xl text-center ">Our Services</h1>
          <p className="mt-8 text-gray-900 text-lg leading-relaxed text-center max-">
            We provide to you the best choiches for you. Adjust it to your
            health needs and make sure your undergo treatment <br /> with our
            highly qualified doctors you can consult with us which type of
            service is suitable for your health
          </p>

          <div className="grid grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 gap-24 mt-10">
            {data.map((item, i) => (
              <div
                key={i}
                className="bg-white px-12 py-8 space-y-6 rounded-xl shadow-2xl shadow-blue-950 cursor-pointer"
              >
                <img
                  src={item.img}
                  alt={item.heading}
                  className=" object-cover"
                />
                <h1 className="font-bold text-2xl">{item.heading}</h1>
                <p className="text-[#7D7987] text-base">{item.para}</p>
              </div>
            ))}
          </div>
        </div>

        <div className=" flex items-center justify-center">
          <button
            className="mt-8 bg-blue-500 text-white px-8 py-3 
        rounded-full font-semibold hover:bg-blue-600 transition duration-300 
        shadow-2xl shadow-blue-900 border-black cursor-pointer "
          >
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
