import type React from "react";
import { Button } from "../../ui/Button/Button";
import type { HeroProps } from "../../../types";


 export const Hero: React.FC<HeroProps> = ({ businessName, slogan }) => (
  <section
    id="home"
    className="relative bg-gradient-to-br from-green-50 to-blue-50 py-20"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:grid-cols-2 gap-12 items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              {businessName}
            </h1>
            <p className="text-2xl text-green-600 font-semibold mb-6">
              {slogan}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Selamat datang di revolusi makanan sehat Indonesia! SEA Catering
              hadir sebagai solusi inovatif untuk kebutuhan makanan sehat yang
              dapat disesuaikan dengan preferensi dan kebutuhan nutrisi Anda.
              Dengan jangkauan pengiriman ke seluruh kota besar di Indonesia,
              kami berkomitmen membuat hidup sehat menjadi lebih mudah dan
              terjangkau.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary">Pesan Sekarang</Button>
            <Button variant="secondary">Pelajari Lebih Lanjut</Button>
          </div>
        </div>
        <div className="realtive">
          <div className="bg-green-100 rounded-3xl p-8 transform -rotate-6 shadow-2xl">
            <div className="bg-white rounded-2xl p-8 transform -rotate-6 shadow-2xl">
              <div className="text-center">
                <div className="text-6xl mb-4">🥗</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Makanan Sehat Premium
                </h3>
                <p className="text-gray-600">
                  Dibuat dengan bahan-bahan segar pilihan dan standar kualitas
                  tinggi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
