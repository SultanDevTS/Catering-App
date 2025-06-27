import { Button } from "../../components/ui/Button/Button";
import { Card } from "../../components/ui/Card/Card";

export const SubscriptionPage: React.FC = () => (
  <main className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Paket Berlangganan</h1>
        <p className="text-xl text-gray-600">Hemat lebih banyak dengan paket berlangganan bulanan</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {[
          { 
            title: "Basic", 
            price: "Rp 3.500.000", 
            period: "per bulan",
            features: ["20 hari meal plan", "Konsultasi dasar", "Pengiriman gratis"],
            popular: false
          },
          { 
            title: "Premium", 
            price: "Rp 4.500.000", 
            period: "per bulan",
            features: ["30 hari meal plan", "Konsultasi premium", "Pengiriman gratis", "Custom menu"],
            popular: true
          },
          { 
            title: "Ultimate", 
            price: "Rp 6.000.000", 
            period: "per bulan",
            features: ["30 hari meal plan", "Konsultasi personal", "Pengiriman gratis", "Custom menu", "Nutrisi tracker"],
            popular: false
          }
        ].map((plan, index) => (
          <Card key={index} className={`text-center relative ${plan.popular ? 'ring-2 ring-green-500 transform scale-105' : ''}`}>
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Paling Popular
                </span>
              </div>
            )}
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</h3>
            <div className="mb-6">
              <span className="text-3xl font-bold text-green-600">{plan.price}</span>
              <span className="text-gray-600">/{plan.period}</span>
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="text-gray-600">✓ {feature}</li>
              ))}
            </ul>
            <Button variant={plan.popular ? "primary" : "secondary"} className="w-full">
              Pilih Paket
            </Button>
          </Card>
        ))}
      </div>
    </div>
  </main>
);