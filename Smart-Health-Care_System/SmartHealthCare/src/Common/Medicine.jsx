import React from "react";
import { useState } from "react";
const medicines = [
  {
    id: 1,
    name: "Paracetamol",
    purpose: "Fever & mild pain",
    dosage: "500 mg",
    frequency: "As directed by doctor",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Medication_Paracetamol.JPG",
  },
  {
    id: 2,
    name: "Cetirizine",
    purpose: "Allergy & sneezing",
    dosage: "10 mg",
    frequency: "As directed by doctor",
    image:
      "https://cdn.shopify.com/s/files/1/0729/9203/1029/files/Cetirizine_Tablet.png?v=1768641351",
  },
  {
    id: 3,
    name: "Omeprazole",
    purpose: "Acidity & stomach issues",
    dosage: "20 mg",
    frequency: "As directed by doctor",
    image:
      "https://images.openai.com/static-rsc-4/ueAWhfe_qBc8Df6GpotrtMou2lBgBeVqZWH6ggSserOKKEv-pNU4DQsdm6Q1DkEOV2-Ed5AqEvPByUABlyotGUZu5Aldpzsuzk24KQiJJUbwJCr2z1foghJVIlADP8qGXI4-5eStZW281LQ16k0vafVXkrAgwSIOd0A6hp74w7mDmPGT4BIIIVGa7_SqzJwq?purpose=fullsize",
  },
  {
    id: 4,
    name: "Amoxicillin",
    purpose: "Bacterial infections",
    dosage: "500 mg",
    frequency: "Only when prescribed",
    image:
      "https://images.openai.com/static-rsc-4/etc9MXhgLcYd-_zGpPbiVf2OtfZqRzQDcnL4AvRSdwLtwozkZl-uQZ-56qUJZtCCSupI-_JdBaQy6gO1piEN5YM5nPErGeG4G4RhtA1SiySX-K7B_6R7AQJ0VQ7Ti3qScYnPWYjOT3aRzVNPcHdbiRlTw0HNWgin9AVnTs5lSZq2PEptgt6dHH9P56R3aLnh?purpose=fullsize",
  },
  {
    id: 5,
    name: "Vitamin C",
    purpose: "Immunity support",
    dosage: "500mg",
    frequency: "As directed by doctor",
    image: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=500",
  },
  {
    id: 6,
    name: "Ibuprofen",
    purpose: "Pain & inflammation",
    dosage: "400mg",
    frequency: "As directed by doctor",
    image: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=500",
  },
  {
    id: 7,
    name: "Insulin",
    purpose: "Diabetes treatment",
    dosage: "As prescribed",
    frequency: "As directed by doctor",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500",
  },
  {
    id: 8,
    name: "Multivitamin",
    purpose: "Nutritional supplement",
    dosage: "1 tablet daily",
    frequency: "As directed by doctor",
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=500",
  },
  {
    id: 9,
    name: "Ibuprofen",
    purpose: "Pain & Inflammation",
    dosage: "400 mg",
    frequency: "As directed by doctor",
    image: "https://cdn-icons-png.flaticon.com/512/2785/2785819.png",
  },
  {
    id: 10,
    name: "Vitamin C",
    purpose: "Immunity Support",
    dosage: "500 mg",
    frequency: "As directed by doctor",
    image: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
  },
  {
    id: 11,
    name: "Azithromycin",
    purpose: "Antibiotic",
    dosage: "250 mg",
    frequency: "As directed by doctor",
    image: "https://cdn-icons-png.flaticon.com/512/3143/3143460.png",
  },
  {
    id: 12,
    name: "Metformin",
    purpose: "Diabetes Management",
    dosage: "500 mg",
    frequency: "As directed by doctor",
    image: "https://cdn-icons-png.flaticon.com/512/2966/2966488.png",
  },
];

function Medicines() {
  const [search, setSearch] = useState("");
  const filteredMedicines = medicines.filter(
    (medicine) =>
      medicine.name.toLowerCase().includes(search.toLowerCase()) ||
      medicine.purpose.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <section className="min-h-screen bg-blue-200 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800"> Medicines </h1>
          <p className="mt-2 text-gray-600">Search and explore medicines</p>
        </div>

        <div className="mx-auto mb-10 max-w-2xl">
          <div className="flex items-center rounded-xl bg-white px-4 shadow-md">
            <span className="mr-3 text-xl"> 🔍 </span>
            <input
              type="text"
              placeholder="Search medicine..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl py-4 outline-none"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="ml-2 text-gray-500 hover:text-gray-800"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {filteredMedicines.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredMedicines.map((medicine) => (
              <div
                key={medicine.id}
                className="overflow-hidden rounded-2xl bg-blue-100 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-52 items-center justify-center bg-blue-100">
                  <img
                    src={medicine.image}
                    alt={medicine.name}
                    className="h-full w-full object-contain p-4"
                  />
                </div>

                <div className="p-5">
                  <h2 className="text-xl font-bold text-gray-800">
                    {medicine.name}
                  </h2>
                  <p className="mt-2 text-gray-500"> {medicine.purpose} </p>
                  <p className="mt-3">
                    <span className="font-semibold"> Dosage: </span>
                    {medicine.dosage}
                  </p>
                  <button className="mt-5 w-full rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* No Results */ <div className="py-16 text-center">
            <div className="text-6xl"> 💊 </div>
            <h2 className="mt-4 text-2xl font-bold text-gray-700">
              No medicine found
            </h2>
            <p className="mt-2 text-gray-500">
              Try searching for another medicine.
            </p>
          </div>
        )}
        {/* Warning */}
        <div className="mt-10 rounded-xl border border-yellow-300 bg-yellow-50 p-4 text-sm text-yellow-800">
          <strong>Important:</strong> Medicine information is provided for
          general reference. Always consult a qualified healthcare professional
          before using medication.
        </div>
      </div>
    </section>
  );
}
export default Medicines;
