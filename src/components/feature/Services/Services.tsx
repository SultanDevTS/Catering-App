/* eslint-disable @typescript-eslint/no-unused-vars */
import type React from "react";
import { Card } from "../../ui/Card/Card";
import type { ServiceProps } from "../../../types";

export const Services: React.FC<ServiceProps> = ({ service }) => (
  <section id="services" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Layanan Unggulan Kami
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Nikmati berbagai layanan terbaik yang telah dipercaya oleh ribuan pelanggan di seluruh Indonesia
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {service.map((service) => (
          <Card key={service.id} className="text-center hover:transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
