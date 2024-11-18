const getPredictedAge = async (name: string) => {
  const res = await fetch(`https://api.agify.io?name=${name}`);
  return res.json();
};

const getPredictedGender = async (name: string) => {
  const res = await fetch(`https://api.genderize.io?name=${name}`);
  return res.json();
};

const getPredictedNationality = async (name: string) => {
  const res = await fetch(`https://api.nationalize.io?name=${name}`);
  return res.json();
};

interface Params {
  params: { name: string };
}

async function Prediction({ params }: Params) {
  const ageData = getPredictedAge(params.name);
  const genderData = getPredictedGender(params.name);
  const nationalityData = getPredictedNationality(params.name);
  const [age, gender, nationality] = await Promise.all([
    ageData,
    genderData,
    nationalityData,
  ]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 via-blue-500 to-purple-600">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in m-4 p-16">
        <h1 className="text-2xl font-bold text-gray-800">
          Hello, <span className="text-indigo-500">{params.name}</span>!
        </h1>
        <div className="mt-6 space-y-4">
          <div className="text-lg font-medium text-gray-700">
            Your Age: <span className="text-indigo-500">{age?.age}</span>
          </div>
          <div className="text-lg font-medium text-gray-700">
            Your Gender:{" "}
            <span className="text-indigo-500">{gender?.gender}</span>
          </div>
          <div className="text-lg font-medium text-gray-700">
            Your Nationality:{" "}
            <span className="text-indigo-500">
              {nationality?.country[0]?.country_id || "N/A"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prediction;
