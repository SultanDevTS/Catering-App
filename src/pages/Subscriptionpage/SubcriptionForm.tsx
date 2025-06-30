/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { AlertCircle, Calculator, Calendar, CheckCircle, User, Utensils} from "lucide-react";
import { Button } from "../../components/ui/Button/Button";
import { Card } from "../../components/ui/Card/Card";
import { dataSubcriptions, deliveryDays, mealTypes } from "../../data/dataSubcription";
import type { FormData, SubcriptionPlan } from "../../types";
import type { FormErrors } from "../../types";
import { InputForm } from "../../components/ui/Form/InputForm";
import { useLocation } from "react-router-dom";



export const Subscriptionform:React.FC = () => {
  const location = useLocation();
  const selectedPlan = location.state?.selectedPlan as SubcriptionPlan | undefined;
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phoneNumber: '',
    selectedPlan: selectedPlan || null,
    mealTypes: [],
    deliveryDays: [],
    allergies: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Function to handle plan selection from cards
  // const selectPlanAnd = (planId: string) => {
  //   setFormData(prev => ({
  //     ...prev,
  //     selectedPlan: planId
  //   }));
  //   setShowForm(true);
    
  //   // Smooth scroll to form
  //   setTimeout(() => {
  //     const formElement = document.getElementById('subscription-form');
  //     if (formElement) {
  //       formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //     }
  //   }, 100);
  // };

  
  useEffect(() => {
    calculatePrice();
    if(selectedPlan){
      setFormData(prev => ({
        ...prev, selectedPlan:selectedPlan
      }));
    }
  }, [formData, selectedPlan]);

  const calculatePrice = () => {
    let price = 0;
    
    // Base plan price
    const selectedPlan =  formData.selectedPlan;
    if (selectedPlan) {
      price += selectedPlan.price;
    }
    
    // Additional meal types price
    formData.mealTypes.forEach(mealTypeId => {
      const mealType = mealTypes.find(meal => meal.id === mealTypeId);
      if (mealType) {
        price += mealType.price;
      }
    });
    
    // Weekend delivery price
    formData.deliveryDays.forEach(dayId => {
      const day = deliveryDays.find(d => d.id === dayId);
      if (day) {
        price += day.price;
      }
    });
    
    setTotalPrice(price);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    // Validate full name
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Nama lengkap wajib diisi';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Nama lengkap minimal 3 karakter';
    }
    
    // Validate phone number
    const phoneRegex = /^(\+62|62|0)[0-9]{9,12}$/;
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Nomor telepon wajib diisi';
    } else if (!phoneRegex.test(formData.phoneNumber.replace(/\s/g, ''))) {
      newErrors.phoneNumber = 'Format nomor telepon tidak valid';
    }
    
    // Validate plan selection
    if (!formData.selectedPlan) {
      newErrors.selectedPlan = 'Pilih salah satu paket berlangganan';
    }
    
    // Validate meal types
    if (formData.mealTypes.length === 0) {
      newErrors.mealTypes = 'Pilih minimal 1 jenis makanan';
    }
    
    // Validate delivery days
    if (formData.deliveryDays.length === 0) {
      newErrors.deliveryDays = 'Pilih minimal 1 hari pengiriman';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handlePlanChange = (planId: string) => {

    const selectedPlanObj = dataSubcriptions.find(plan => plan.id === planId);
    if(!selectedPlanObj) return;
    setFormData(prev => ({
      ...prev,
      selectedPlan: selectedPlanObj
    }));
    
    if (errors.selectedPlan) {
      setErrors(prev => ({
        ...prev,
        selectedPlan: undefined
      }));
    }
  };

  const handleCheckboxChange = (
    type: 'mealTypes' | 'deliveryDays',
    value: string,
    checked: boolean
  ) => {
    setFormData(prev => {
      const currentArray = prev[type];
      const newArray = checked
        ? [...currentArray, value]
        : currentArray.filter(item => item !== value);
      
      return {
        ...prev,
        [type]: newArray
      };
    });
    
    // Clear error when user makes selection
    if (errors[type]) {
      setErrors(prev => ({
        ...prev,
        [type]: undefined
      }));
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    
    alert(`Berhasil! Total harga: Rp ${totalPrice.toLocaleString('id-ID')}`);
    setIsSubmitting(false);
    // setShowForm(false);
    
    // Reset form
    setFormData({
      fullName: '',
      phoneNumber: '',
      selectedPlan: null,
      mealTypes: [],
      deliveryDays: [],
      allergies: ''
    });
  };

  const formatPrice = (price: number) => {
    return `Rp ${price.toLocaleString('id-ID')}`;
  };

  return (
    <main className="py-20 bg-gradient-to-br from-green-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Paket <span className="text-green-600">Berlangganan</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Hemat lebih banyak dengan paket berlangganan bulanan
          </p>
        </div>

        {/* Subscription Form */}
        
          <div id="subscription-form" className="max-w-4xl mx-auto">
            <Card className="relative">
              {/* Button close */}
              {/* <Button
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors z-10"
              >
                <X size={24} />
              </Button> */}

              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Form Berlangganan</h2>
                <p className="text-gray-600">
                  {formData.selectedPlan ? (
                    <>
                      Anda telah memilih paket{" "}
                      <span className="font-semibold text-green-600">
                        {formData.selectedPlan?.title}
                      </span>
                      . Lengkapi data di bawah untuk melanjutkan.
                    </>
                  ) : (
                    "Lengkapi data di bawah untuk memulai subscription Anda"
                  )}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
             
                <div className="lg:col-span-2 space-y-6">
               
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                      <User size={20} className="text-green-600" />
                      Informasi Pribadi
                    </h3>
                    <div>

                    <InputForm
                    content="Nama Lengkap *"
                    type="text" 
                    name="fullName"
                    value={formData.fullName}
                     onChange={handleInputChange}
                     placeholder="Masukkan nama lengkap Anda" />

                      {errors.fullName && (
                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle size={16} />
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* phone number */}
                    <div>
                      
                      <InputForm
                      content=' Nomor Telepon Aktif *'
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="08xxxxxxxxxx atau +62xxxxxxxxx"
                      />
                      {errors.phoneNumber && (
                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle size={16} />
                          {errors.phoneNumber}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Plan Selection */}
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                      <Calculator size={20} className="text-green-600" />
                      Pilihan Paket *
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {dataSubcriptions.map((plan) => (
                        <div
                          key={plan.id}
                          onClick={() => handlePlanChange(plan.id)}
                          className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-200 relative ${
                            formData.selectedPlan?.id === plan.id
                              ? 'border-green-500 bg-green-50 ring-2 ring-green-200'
                              : 'border-gray-200 hover:border-green-300 hover:shadow-md'
                          }`}
                        >
                          {formData.selectedPlan?.id === plan.id && (
                            <div className="absolute -top-2 -right-2">
                              <div className="bg-green-500 text-white rounded-full p-1">
                                <CheckCircle size={16} />
                              </div>
                            </div>
                          )}
                          <div className="text-center">
                            <h4 className="font-bold text-lg mb-1">{plan.title}</h4>
                            <p className="text-green-600 font-semibold">{formatPrice(plan.price)}</p>
                            {plan.popular && (
                              <span className="inline-block bg-green-500 text-white text-xs px-2 py-1 rounded-full mt-2">
                                Popular
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    {errors.selectedPlan && (
                      <p className="text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle size={16} />
                        {errors.selectedPlan}
                      </p>
                    )}
                  </div>

                  {/* Meal Types */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                      <Utensils size={20} className="text-green-600" />
                      Jenis Makanan * (Pilih minimal 1)
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {mealTypes.map((mealType) => (
                        <label
                          key={mealType.id}
                          className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-200 flex items-start gap-3 ${
                            formData.mealTypes.includes(mealType.id)
                              ? 'border-green-500 bg-green-50'
                              : 'border-gray-200 hover:border-green-300'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={formData.mealTypes.includes(mealType.id)}
                            onChange={(e) => handleCheckboxChange('mealTypes', mealType.id, e.target.checked)}
                            className="mt-1 w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                          />
                          <div>
                            <div className="font-medium text-gray-900">{mealType.name}</div>
                            <div className="text-sm text-gray-600">{mealType.description}</div>
                            {mealType.price > 0 && (
                              <div className="text-sm text-green-600 font-semibold">
                                +{formatPrice(mealType.price)}
                              </div>
                            )}
                          </div>
                        </label>
                      ))}
                    </div>
                    {errors.mealTypes && (
                      <p className="text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle size={16} />
                        {errors.mealTypes}
                      </p>
                    )}
                  </div>

                  {/* Delivery Days */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                      <Calendar size={20} className="text-green-600" />
                      Hari Pengiriman * (Pilih minimal 1)
                    </h3>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {deliveryDays.map((day) => (
                        <label
                          key={day.id}
                          className={`border-2 rounded-lg p-3 cursor-pointer transition-all duration-200 text-center ${
                            formData.deliveryDays.includes(day.id)
                              ? 'border-green-500 bg-green-50'
                              : 'border-gray-200 hover:border-green-300'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={formData.deliveryDays.includes(day.id)}
                            onChange={(e) => handleCheckboxChange('deliveryDays', day.id, e.target.checked)}
                            className="sr-only"
                          />
                          <div className="font-medium text-gray-900">{day.name}</div>
                          {day.price > 0 && (
                            <div className="text-xs text-green-600 font-semibold">
                              +{formatPrice(day.price)}
                            </div>
                          )}
                        </label>
                      ))}
                    </div>
                    {errors.deliveryDays && (
                      <p className="text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle size={16} />
                        {errors.deliveryDays}
                      </p>
                    )}
                  </div>

                  {/* Alergi */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900">Alergi Makanan (Opsional)</h3>
                    <textarea
                      name="allergies"
                      value={formData.allergies}
                      onChange={handleInputChange}
                      placeholder="Sebutkan alergi makanan yang Anda miliki (jika ada)"
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all resize-vertical"
                    />
                  </div>
                </div>

                {/* Price Summary */}
                <div className="lg:col-span-1">
                  <div className="sticky top-2">
                    <Card className="bg-gray-50 border-2 border-green-200">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Calculator size={20} className="text-green-600" />
                        Ringkasan Harga
                      </h3>
                      
                      <div className="space-y-3 mb-6">
                        {/* Base Plan */}
                        {formData.selectedPlan && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">
                              Paket {formData.selectedPlan?.title}
                            </span>
                            <span className="font-semibold">
                              {formatPrice(formData.selectedPlan?.price || 0)}
                            </span>
                          </div>
                        )}
                        
                        {/* Additional Meal Types */}
                        {formData.mealTypes.map(mealTypeId => {
                          const mealType = mealTypes.find(m => m.id === mealTypeId);
                          if (mealType && mealType.price > 0) {
                            return (
                              <div key={mealTypeId} className="flex justify-between">
                                <span className="text-gray-600">{mealType.name}</span>
                                <span className="font-semibold">+{formatPrice(mealType.price)}</span>
                              </div>
                            );
                          }
                          return null;
                        })}
                        
                        {/* Weekend Delivery */}
                        {formData.deliveryDays.map(dayId => {
                          const day = deliveryDays.find(d => d.id === dayId);
                          if (day && day.price > 0) {
                            return (
                              <div key={dayId} className="flex justify-between">
                                <span className="text-gray-600">Pengiriman {day.name}</span>
                                <span className="font-semibold">+{formatPrice(day.price)}</span>
                              </div>
                            );
                          }
                          return null;
                        })}
                      </div>
                      
                      {/* Total */}
                      <div className="border-t border-gray-300 pt-3 mb-6">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-bold text-gray-900">Total</span>
                          <span className="text-2xl font-bold text-green-600">
                            {formatPrice(totalPrice)}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">per bulan</p>
                      </div>
                      
                      {/* Submit Button */}
                      <Button
                        onClick={handleSubmit}
                        disabled={isSubmitting || totalPrice === 0}
                        className="w-full flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Memproses...
                          </>
                        ) : (
                          <>
                            <CheckCircle size={20} />
                            Berlangganan Sekarang
                          </>
                        )}
                      </Button>
                      
                      <p className="text-xs text-gray-500 mt-3 text-center">
                        Dengan berlangganan, Anda menyetujui syarat dan ketentuan kami
                      </p>
                    </Card>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        
      </div>
    </main>
  );
}