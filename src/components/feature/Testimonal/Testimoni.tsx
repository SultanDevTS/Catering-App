/* eslint-disable @typescript-eslint/no-unused-vars */
import type React from "react";
import { Card } from "../../ui/Card/Card";
import type { ServiceProps, Testimonial } from "../../../types";
import { useState } from "react";
import { ChevronLeft, ChevronRight, MessageCircle, Send, User } from "lucide-react";
import { dataTestimoni } from "../../../data/testimoniData";
import { Stars } from "../../ui/Stars/Stars";
import { Button } from "../../ui/Button/Button";

export const Testimoni: React.FC<ServiceProps> = () => {
  const [testimonials, setTestimonials] =
    useState<Testimonial[]>(dataTestimoni);
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState<Testimonial>({
    name: "",
    message: "",
    rating: 5,
  });

  const itemsPerPage = 3;
  const totalSlides = Math.ceil(testimonials.length / itemsPerPage);
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "rating" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim() && formData.message.trim() && formData.rating > 0) {
     setIsSubmitting(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setTestimonials([formData, ...testimonials]);
      setFormData({ name: "", message: "", rating: 5 });
      setShowForm(false);
      setIsSubmitting(false);
      
      // Success feedback
      alert("Terima kasih! Testimoni Anda telah berhasil ditambahkan.");
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev +1) % totalSlides);
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev -1 + totalSlides) % totalSlides);
  }
  return (
    <section id="testimoni" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Testimoni <span className="text-green-600">Pelanggan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Kepuasan pelanggan adalah prioritas utama kami. Berikut adalah
            testimoni dari mereka yang telah mempercayai layanan kami.
          </p>

          <Button
            onClick={() => setShowForm(!showForm)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <MessageCircle size={20} />
            {showForm ? "Tutup Form" : "Tulis Testimoni"}
          </Button>
        </div>

        {/* show form */}

        {showForm && (
          <div className="mb-16">
            <Card className="p-8 max-w-2xl mx-auto">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Bagikan Pengalaman Anda
                </h3>
                <p className="text-gray-600">
                  Testimoni Anda sangat berharga bagi kami dan calon pelanggan
                  lainnya
                </p>
              </div>
              <div className="space-y-6">
                {/* input name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    <User size={16} className="inline mr-1" />
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Masukkan nama Lengkap Anda"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                  />
                </div>

                {/* input Rating */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Rating (1-5 bintang)
                  </label>
                  <Stars
                    rating={formData.rating}
                    interactive={true}
                    onChange={(rating) =>
                      setFormData((prev) => ({ ...prev, rating }))
                    }
                  />
                  <p className="text-sm text-gray-500 mt-2 text-center">
                    Klik bintang untuk memberikan rating
                  </p>
                </div>

                    {/* input Message */}

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    <MessageCircle size={16} className="inline mr-1" />
                    Pesan Testimoni
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Ceritakan pengalaman Anda menggunakan layanan kami..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 resize-vertical"
                  />
                </div>

                {/* submit button */}
                <Button
                  variant="primary"
                  className="w-full"
                >
                  {isSubmitting ? (
                    <>
                    <p>
                       Mengirim
                    </p>
                       
                    
                    </>
                  ): 

                  <p>
                    <Send size={20}/>
                    kirim
                  </p>
                
                  }
                </Button>
              </div>
            </Card>
          </div>
        )}

        {/* carousel section */}
        <div className="relative">
          {/* nav buttons */}
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">
              Testimoni Terbaru ({testimonials.length})
            </h3>
            
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <ChevronLeft size={20} className="text-gray-600" />
              </button>
              <button
                onClick={nextSlide}
                disabled={currentSlide === totalSlides - 1}
                className="p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <ChevronRight size={20} className="text-gray-600" />
              </button>
            </div>
          </div>

        {/* testi card */}
        <div className="overflow-hidden">
          <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{transform: `translateX(-${currentSlide * 100}%)`}}
          >
            {Array.from({length:totalSlides}).map((_, slideIndex) =>(
              <div key={slideIndex} className="w-full shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
                 {testimonials
                      .slice(slideIndex * itemsPerPage, (slideIndex + 1) * itemsPerPage)
                      .map((testimonial, index) => (
                        <Card key={`${slideIndex}-${index}`} className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                          <div className="text-center">
                            {/* Rating Stars */}
                            <div className="mb-4">
                              <Stars rating={testimonial.rating}/>
                            </div>
                            
                            {/* Message */}
                            <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                              "{testimonial.message}"
                            </blockquote>
                            
                            {/* Author */}
                            <div className="border-t border-gray-100 pt-4">
                              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-white font-bold text-lg">
                                  {testimonial.name.charAt(0).toUpperCase()}
                                </span>
                              </div>
                              <h4 className="font-bold text-gray-900 text-lg">
                                {testimonial.name}
                              </h4>
                              <p className="text-sm text-gray-500 mt-1">Pelanggan Terpuaskan</p>
                            </div>
                          </div>
                        </Card>
                      ))}
                </div>

              </div>
            ))}

          </div>

        </div>
        </div>
      </div>
    </section>
  );
};
