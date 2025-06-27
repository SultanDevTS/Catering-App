import { Button } from "../../components/ui/Button/Button";
import { Card } from "../../components/ui/Card/Card";
import type { ContactInfo } from "../../types";

export const ContactPage: React.FC = () => {
  const contactInfo: ContactInfo = {
    manager: "Brian",
    phone: "08123456789"
  };

  return (
    <main className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Hubungi Kami</h1>
            <p className="text-xl text-gray-600">
              Kami siap membantu Anda memulai perjalanan hidup sehat bersama SEA Catering
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card>
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">👨‍💼</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Manajer</h3>
                    <p className="text-lg text-green-600 font-semibold">{contactInfo.manager}</p>
                  </div>
                </div>
              </Card>
              
              <Card>
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">📞</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Telepon</h3>
                    <p className="text-lg text-green-600 font-semibold">{contactInfo.phone}</p>
                  </div>
                </div>
              </Card>
              
              <Card>
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">⏰</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Jam Operasional</h3>
                    <p className="text-gray-600">Senin - Minggu: 08:00 - 20:00 WIB</p>
                  </div>
                </div>
              </Card>
            </div>
            
            <Card>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Masukkan email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Tuliskan pesan Anda..."
                  ></textarea>
                </div>
                <Button variant="primary" className="w-full">
                  Kirim Pesan
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};