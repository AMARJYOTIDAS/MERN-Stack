import firstimage from "../assets/firstimage.jpeg";
import secondimage from "../assets/secondimage.jpeg";
import DownloadApp from "./DownloadApp";
const HeroSection = () => {
  return (
    <section id="herosection" className="bg-blue-200">
      <div className="m-15 mt-10 bg-blue-200 text-black">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-16">
          <div className="max-w-lg  rounded-lg">
            {/* //bg-[url(src/assets/secondimage.jpeg)] */}
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              virtual healthcare for you
            </h1>
            <p className="mt-6 text-lg text-gray-900 leading-8 font-bold  ">
              Trafalagar provides progressive ,and affordable healthcare
              ,accessible on mobile and online for everyone
            </p>
            <button className="mt-8 bg-blue-600 text-white px-8 py-3 cursor-pointer font-semibold hover:bg-blue-700 hover:rounded-full transition duration-200">
              Consult today
            </button>
          </div>
          <div>
            <img
              src={firstimage}
              alt="Healthcare"
              className="w-[500px] rounded-2xl shadow-2xl shadow-blue-950"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
{
  /* <section className="max-w-7xl mx-auto px-6 py-8 mt-0">
          <div className="container py-4 px-3 flex flex-col items-center justify-center gap-4">
            <h2 className="font-serif font-bold text-zinc-900">Our Services</h2>
            <div className="w-10 h-0 bg-black"></div>
            <p className="text-gray-900 leading-8 max-w-3xl ">
              We provide to you the best choiches for you. Adjust it to your
              health needs and make sure your undergo treatment with our highly
              qualified doctors you can consult with us which type of service is
              suitable for your health
            </p>
          </div>
          <div className=""></div>
          <div className="">
            <img src={secondimage} alt="" />
          </div>
        </section> */
}
