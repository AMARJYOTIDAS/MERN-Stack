import React from "react";

const FoodGrocery = () => {
  return (
    <section id="food">
      <div className="flex items-center justify-center py-8 mt-10">
        <h1 className="text-black font-semibold text-4xl">Food & Grocery</h1>
      </div>
      <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-9 px-4 gap-4 font-semibold shadow-lg shadow-gray-900 ">
        <div
          className="group relative overflow-hidden rounded-2xl bg-white shadow-lg shadow-gray-800
         transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl gap-9 py-2 flex flex-col items-center"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPoky3t83a9vXUE20C9aA_rVcQVP-dHNzpRFOeznlvuQ&s=10"
            alt="Pokhal Bhatt"
            className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <h2 className="font-bold text-3xl ">Our Pokhal Bhatt</h2>
          <p className=" tracking-tight gap-2 text-gray-800  font-sans px-4">
            Pakhaḷa (Odia: ପଖାଳ, romanized: påkhāḷå, Odia pronunciation:
            [pɔkʰaɭɔ]) is a dish in Odia cu isine, consisting of cooked rice
            washed or lightly fermented in water. The liquid part of the dish is
            known as Toraṇi (Odia: ତୋରାଣି, romanized: tōrāṇi).
          </p>
        </div>
        <div
          className="group relative overflow-hidden rounded-2xl bg-white shadow-lg shadow-gray-800 gap-9 py-2
        transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center "
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt_Hk_QhBIfX91kc9Um_iEtb-S7Pxgh0a4SQ17emUBQA&s=10"
            alt="Fish"
            className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <h2 className="font-bold text-3xl ">Fish Curry</h2>
          <p className=" tracking-tight gap-2 text-gray-800 font-sans px-4">
            Machha Kalia: A rich, spicy, and festive gravy prepared with fried
            freshwater fish (like Rohu or Catla), onions, ginger-garlic paste,
            tomatoes, and whole spices. It is often cooked for special
            occasions.
          </p>
        </div>
        <div
          className="group relative overflow-hidden rounded-2xl bg-white shadow-lg shadow-gray-800 gap-9 py-2
        transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center "
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQckwPWvIPYvlHt6PRIefGeo0nBcP5ibqv7s50ghR8aw&s=10encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPoky3t83a9vXUE20C9aA_rVcQVP-dHNzpRFOeznlvuQ&s=10"
            alt="Maccha Besara"
            className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <h2 className="font-bold text-3xl">Machha Besara</h2>
          <p className="  tracking-tight gap-2 text-gray-800 font-sans px-4">
            Machha Besara: A classic rustic curry made using a paste of mustard
            seeds, cumin, and garlic, finished with dried mangoes (ambula) or
            tamarind for a sour twist, tempered with pancha phutana (five-spice
            mixture).
          </p>
        </div>

        <div
          className="group relative overflow-hidden rounded-2xl bg-white shadow-lg shadow-gray-800 gap-9 py-2
        transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center "
        >
          <img
            src="https://www.firsttimercook.com/wp-content/uploads/2016/09/Dalma.jpg"
            alt="Dalma"
            className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <h2 className="font-bold text-3xl">Dalma</h2>
          <p className="text-gray-800 font-sans tracking-tight px-4">
            Dalma is Odisha’s iconic, wholesome lentil and vegetable stew,
            traditionally prepared as comfort food and offered as part of the
            Mahaprasad at the Jagannath Temple in Puri.
          </p>
        </div>
        <div
          className="group relative overflow-hidden rounded-2xl bg-white shadow-lg shadow-gray-800
         transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl gap-9 py-2 flex flex-col items-center "
        >
          <img
            src="https://cdn.tasteatlas.com/images/dishes/713e5f01cbb2463386be9bc57c037639.jpg?w=1476&h=830"
            alt="Murgh makhani (Butter chicken)"
            className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <h2 className="font-bold text-3xl">Murgh makhani (Butter chicken)</h2>
          <p className="text-gray-800 font-sans tracking-tight px-4 ">
            The restaurant's cooks combined leftover marinade juices with
            tomatoes and butter, and then stewed the tandoor-cooked chicken in
            it, without even knowing that they have accidentally stumbled upon
            one of the most loved dishes ever and a future international
            delicacy.
          </p>
        </div>
        <div
          className="group relative overflow-hidden rounded-2xl bg-white shadow-lg shadow-gray-800
        transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl gap-9 py-2 flex flex-col items-center"
        >
          <img
            src="https://cdn.tasteatlas.com/images/dishes/144615ec3ea34b35ace5544b8b3887d8.jpg?w=1476&h=830"
            alt="Murgh rezala (Chicken rezala)"
            className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <h2 className="font-bold text-3xl">Murgh rezala (Chicken rezala)</h2>
          <p className="text-gray-800 font-sans tracking-tight px-4">
            Murgh rezala is a traditional curry originating from East India, and
            it’s especially popular in Bengal. This aromatic and rich curry is
            usually made with a combination of chicken, dahi, oil, ghee,
            cashews, poppy seeds, ginger-garlic paste, cloves, cinnamon,
            cardamom, peppercorns, hot peppers, white pepper, salt, garam
            masala, milk, and saffron. The cashews and poppy seeds are soaked in
            water and ground into a paste. The chicken is marinated in a mixture
            of yogurt, ginger, and garlic. The cloves, peppercorns, cinnamon,
            cardamom, and dried hot peppers are fried in ghee and oil, and the
            marinated chicken pieces are then added to the pan and fried over
            high heat.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button className="mt-5 cursor-pointer rounded-full bg-black w-3xs py-2 text-sm text-white transition hover:bg-orange-500">
          Explore
        </button>
      </div>
    </section>
  );
};

export default FoodGrocery;
