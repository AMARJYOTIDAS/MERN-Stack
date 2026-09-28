import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];
function Snapp() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex gap-5 w-max p-5">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Food ${index + 1}`}
            className="w-64 h-40 object-cover rounded-xl"
          />
        ))}
      </div>
    </div>
  );
}

export default Snapp;
