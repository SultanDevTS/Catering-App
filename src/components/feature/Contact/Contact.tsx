import type React from "react";
import { Card } from "../../ui/Card/Card";
import { Button } from "../../ui/Button/Button";
import type { contactProps } from "../../../types";

export const Contact: React.FC<contactProps> = ({ contact }) => (
  <section id="contact" className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Hubungi Kami
          </h2>
          <p className="text-xl text-gray-600">
            Siap melayani Anda dengan sepenuh hati. Hubungi tim kami untuk konsultasi dan pemesanan.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="text-center">
            <div className="text-4xl mb-4">👨‍💼</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Manajer Kami
            </h3>
            <p className="text-xl text-green-600 font-semibold mb-4">
              {contact.manager}
            </p>
            <p className="text-gray-600">
              Siap membantu Anda dengan pelayanan terbaik dan konsultasi profesional
            </p>
          </Card>
          
          <Card className="text-center">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Hubungi Langsung
            </h3>
            <p className="text-xl text-green-600 font-semibold mb-4">
              {contact.phone}
            </p>
            <p className="text-gray-600">
              Tersedia 24/7 untuk melayani kebutuhan catering sehat Anda
            </p>
            <div className="mt-6">
              <Button variant="primary" className="w-full">
                Hubungi Sekarang
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </section>
);
