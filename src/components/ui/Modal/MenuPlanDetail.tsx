import { Button } from "../Button/Button";

export const MenuPlanDetail: React.FC<{
  plan: {
    title: string;
    price: string;
    icon: string;
    description: string;
    features: string[];
    nutritionInfo: {
      calories: string;
      protein: string;
      carbs: string;
      fat: string;
    };
    sampleMeals: {
      breakfast: string;
      lunch: string;
      dinner: string;
      snack: string;
    };
  };
}> = ({ plan }) => (
  <div className="p-8">
    {/* Header */}
    <div className="text-center mb-8">
      <div className="text-6xl mb-4">{plan.icon}</div>
      <h2 className="text-3xl font-bold text-gray-900 mb-2">{plan.title}</h2>
      <p className="text-2xl font-bold text-green-600 mb-4">{plan.price}</p>
      <p className="text-gray-600 leading-relaxed">{plan.description}</p>
    </div>

    {/* Features */}
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-4">✨ Keunggulan Paket</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Nutrition Info */}
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-4">📊 Informasi Nutrisi (per hari)</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-red-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-red-600">{plan.nutritionInfo.calories}</div>
          <div className="text-sm text-gray-600">Kalori</div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-blue-600">{plan.nutritionInfo.protein}</div>
          <div className="text-sm text-gray-600">Protein</div>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-yellow-600">{plan.nutritionInfo.carbs}</div>
          <div className="text-sm text-gray-600">Karbohidrat</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-green-600">{plan.nutritionInfo.fat}</div>
          <div className="text-sm text-gray-600">Lemak</div>
        </div>
      </div>
    </div>

    {/* Sample Meals */}
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-4">🍽️ Contoh Menu Harian</h3>
      <div className="space-y-4">
        <div className="bg-orange-50 p-4 rounded-lg">
          <div className="font-semibold text-orange-800 mb-1">🌅 Sarapan</div>
          <div className="text-gray-700">{plan.sampleMeals.breakfast}</div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="font-semibold text-blue-800 mb-1">☀️ Makan Siang</div>
          <div className="text-gray-700">{plan.sampleMeals.lunch}</div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="font-semibold text-purple-800 mb-1">🌙 Makan Malam</div>
          <div className="text-gray-700">{plan.sampleMeals.dinner}</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="font-semibold text-green-800 mb-1">🍎 Snack</div>
          <div className="text-gray-700">{plan.sampleMeals.snack}</div>
        </div>
      </div>
    </div>

    {/* Action Buttons */}
    <div className="flex flex-col sm:flex-row gap-4">
      <Button variant="primary" className="flex-1">
        Pesan Sekarang
      </Button>
      <Button variant="secondary" className="flex-1">
        Konsultasi Gratis
      </Button>
    </div>
  </div>
);