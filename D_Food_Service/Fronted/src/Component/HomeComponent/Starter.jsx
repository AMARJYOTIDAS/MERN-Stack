import React from "react";

const Starter = () => {
  let data = [
    {
      img: "https://www.spiceupthecurry.com/wp-content/uploads/2026/06/olive-garden-breadsticks-1.jpg",
      alt: "Olive Garden Breadsticks (Copycat)",
      header: "Olive Garden Breadsticks (Copycat)",
      description:
        "Olive Garden breadsticks are the most iconic part of the Olive Garden dining experience. They arrive at the table hot, wrapped in a cloth napkin, and are served alongside the house salad as part of the famous “unlimited soup, salad, and breadsticks” offering that has made them one of the most recognizable elements of casual Italian-American dining in the US.",
    },
    {
      img: "https://www.spiceupthecurry.com/wp-content/uploads/2026/04/roasted-baby-potatoes-1.jpg",
      alt: "Roasted Baby Potatoes",
      header: "Roasted Baby Potatoes",
      description:
        "Roasted baby potatoes are small whole potatoes – halved and tossed in olive oil and seasonings, then roasted at high heat until the cut sides turn golden and caramelized while the inside stays perfectly tender and fluffy. ",
    },
    {
      img: "https://www.spiceupthecurry.com/wp-content/uploads/2024/03/chipotle-queso-blanco-2.jpg",
      alt: "Chipotle Queso Blanco (Copycat)",
      header: "Chipotle Queso Blanco (Copycat)",
      description:
        "Chipotle Queso Blanco (Copycat) is a creamy, smooth, and flavorful Mexican-style cheese dip inspired by Chipotle’s famous queso. Made with melted Monterey Jack and white American cheese, jalapeños, green chilies, garlic, onion, and warm spices, it has a rich, mildly spicy flavor and pairs perfectly with tortilla chips, tacos, burritos, and nachos.",
    },
    {
      img: "https://www.spiceupthecurry.com/wp-content/uploads/2021/09/dahi-vada-2.jpg",
      alt: "Dahi Vada",
      header: "Dahi Vada",
      description:
        "Dahi Vada is a popular Indian street-food dish made with soft, fluffy lentil dumplings soaked in creamy, chilled yogurt. It is topped with tangy tamarind chutney, spicy green chutney, roasted cumin powder, chili powder, and fresh coriander. The combination of sweet, spicy, tangy, and creamy flavors makes Dahi Vada a delicious and refreshing snack.",
    },
    {
      img: "https://www.spiceupthecurry.com/wp-content/uploads/2018/06/veg-seekh-kabab-recipe-14.jpg",
      alt: "Veg Kabab (Seekh Kabab)",
      header: "Veg Kabab (Seekh Kabab)",
      description:
        "Veg Seekh Kabab is a delicious vegetarian version of the classic seekh kabab, made with a flavorful mixture of finely chopped vegetables, potatoes, herbs, and aromatic spices. Shaped into skewers and grilled or pan-fried until golden and slightly crispy, these kababs are smoky, savory, and packed with flavor. They are perfect as an appetizer or snack, served with mint chutney, onion rings, and lemon wedges.",
    },
    {
      img: "https://www.spiceupthecurry.com/wp-content/uploads/2017/04/mushroom-manchurian-recipe-10.jpg",
      alt: "Mushroom Manchurian (Dry)",
      header: "Mushroom Manchurian (Dry)",
      description:
        "Mushroom Manchurian (Dry) is a delicious Indo-Chinese appetizer made with crispy, batter-coated mushrooms tossed in a flavorful sauce of garlic, ginger, green chilies, soy sauce, and spring onions. It offers a perfect combination of crispy texture, savory flavors, and mild spicy heat. Served hot, it makes a great starter or snack for any occasion.",
    },
  ];
  return (
    <section id="starter">
      <div className="font-sans mt-10">
        <h1 className="flex items-center justify-center font-semibold text-4xl text-shadow-lg text-shadow-gray-400 ">
          Our Starter Menu
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-9 px-4 gap-4 font-semibold shadow-lg shadow-gray-900 rounded-2xl overflow-hidden">
          {data.map((item, i) => (
            <div key={i}>
              <div
                className=" flex flex-col justify-between items-center max-h-fit gap-3 px-0.5 py-4 shadow-gray-800 shadow-2xl overflow-hidden
               rounded-2xl hover:cursor-pointer transition duration-500  hover:-translate-y-3 hover:shadow-2xl ease-in-out object-cover"
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  className=" h-120 w-120 transition-transform duration-700 hover:scale-110 "
                />
                <h1 className="font-bold text-2xl">{item.header}</h1>
                <p className="font-semibold">"{item.description}"</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <button className="mt-5 cursor-pointer rounded-full bg-black w-3xs py-2 text-sm text-white transition hover:bg-orange-500">
            Explore
          </button>
        </div>
      </div>
    </section>
  );
};

export default Starter;
