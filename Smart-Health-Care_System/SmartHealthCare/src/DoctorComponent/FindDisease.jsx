import React, { useState } from "react";

const symptomsList = [
  "Fever",
  "Cough",
  "Headache",
  "Sore Throat",
  "Runny Nose",
  "Body Pain",
  "Fatigue",
  "Nausea",
  "Vomiting",
  "Stomach Pain",
  "Diarrhea",
  "Shortness of Breath",
];

const diseaseData = [
  {
    name: "Common Cold",
    symptoms: ["Cough", "Runny Nose", "Sore Throat", "Headache"],
  },
  {
    name: "Flu",
    symptoms: ["Fever", "Cough", "Headache", "Body Pain", "Fatigue"],
  },
  {
    name: "Migraine",
    symptoms: ["Headache", "Nausea", "Fatigue"],
  },
  {
    name: "Gastroenteritis",
    symptoms: ["Nausea", "Vomiting", "Stomach Pain", "Diarrhea"],
  },
];

function FindDisease() {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSymptomChange = (symptom) => {
    setSelectedSymptoms((previous) =>
      previous.includes(symptom)
        ? previous.filter((item) => item !== symptom)
        : [...previous, symptom],
    );
  };

  const findDisease = () => {
    if (selectedSymptoms.length === 0) {
      setResults([]);
      setSearched(true);
      return;
    }

    const matches = diseaseData
      .map((disease) => {
        const matchedSymptoms = disease.symptoms.filter((symptom) =>
          selectedSymptoms.includes(symptom),
        );

        return {
          ...disease,
          matchedCount: matchedSymptoms.length,
          matchedSymptoms,
          percentage: Math.round(
            (matchedSymptoms.length / disease.symptoms.length) * 100,
          ),
        };
      })
      .filter((disease) => disease.matchedCount > 0)
      .sort((a, b) => b.matchedCount - a.matchedCount);

    setResults(matches);
    setSearched(true);
  };

  const resetSearch = () => {
    setSelectedSymptoms([]);
    setResults([]);
    setSearched(false);
  };

  return (
    <section className="min-h-screen bg-blue-200 px-5 py-10">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Find Your Disease
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Select the symptoms you are experiencing to see possible health
            conditions that may be associated with them.
          </p>
        </div>

        {/* Symptoms */}
        <div className="rounded-2xl bg-white p-6 shadow-md">
          <h2 className="mb-5 text-2xl font-bold text-gray-800">
            Select Your Symptoms
          </h2>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            {symptomsList.map((symptom) => (
              <label
                key={symptom}
                className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition ${
                  selectedSymptoms.includes(symptom)
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedSymptoms.includes(symptom)}
                  onChange={() => handleSymptomChange(symptom)}
                  className="h-5 w-5"
                />

                <span className="text-gray-700">{symptom}</span>
              </label>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={findDisease}
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Find Possible Conditions
            </button>

            <button
              onClick={resetSearch}
              className="rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Results */}
        {searched && selectedSymptoms.length === 0 && (
          <div className="mt-8 rounded-xl bg-yellow-50 p-5 text-center text-yellow-800">
            Please select at least one symptom.
          </div>
        )}

        {searched && selectedSymptoms.length > 0 && (
          <div className="mt-8">
            <h2 className="mb-5 text-2xl font-bold text-gray-800">
              Possible Conditions
            </h2>

            {results.length > 0 ? (
              <div className="grid gap-5 md:grid-cols-2">
                {results.map((disease) => (
                  <div
                    key={disease.name}
                    className="rounded-2xl bg-white p-6 shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-gray-800">
                        {disease.name}
                      </h3>

                      <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                        {disease.percentage}% match
                      </span>
                    </div>

                    <p className="mt-4 font-semibold text-gray-700">
                      Matching symptoms:
                    </p>

                    <div className="mt-2 flex flex-wrap gap-2">
                      {disease.matchedSymptoms.map((symptom) => (
                        <span
                          key={symptom}
                          className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                        >
                          {symptom}
                        </span>
                      ))}
                    </div>

                    <button
                      className="mt-5 w-full rounded-xl bg-green-600 px-4 py-3 font-semibold text-white hover:bg-green-700"
                      onClick={() =>
                        alert(
                          "Please consult a qualified healthcare professional for proper diagnosis.",
                        )
                      }
                    >
                      Consult Doctor
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-xl bg-white p-8 text-center shadow-md">
                <div className="text-5xl">🔍</div>

                <h3 className="mt-4 text-xl font-bold text-gray-800">
                  No matching condition found
                </h3>

                <p className="mt-2 text-gray-500">
                  Please consult a healthcare professional for further
                  evaluation.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Medical Disclaimer */}
        <div className="mt-10 rounded-2xl border border-yellow-300 bg-yellow-50 p-5">
          <h3 className="font-bold text-yellow-900">⚠️ Medical Disclaimer</h3>

          <p className="mt-2 text-sm leading-6 text-yellow-800">
            This tool provides general information about possible conditions
            based on selected symptoms. It is not a medical diagnosis and should
            not replace professional medical advice. If you have severe or
            worsening symptoms, seek medical attention promptly.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FindDisease;
