/* eslint-disable @typescript-eslint/no-unused-vars */
// import React from "react";

 export interface ContactInfo {
    manager : string,
    phone: string
}

export interface Service {
    id: string,
    title :string,
    description : string,
    icon:string;
}

export interface HeroProps{
    businessName :string,
    slogan: string;
}

export interface ServiceProps{
    service: Service[];
}

export interface NavItem {
    path: string;
    label: string;
}

export interface contactProps {
    contact: ContactInfo;
}

export interface NutritionInfo {
  calories: string;
  protein: string;
  carbs: string;
  fat: string;
}

export interface SampleMeals {
  breakfast: string;
  lunch: string;
  dinner: string;
  snack: string;
}
export interface MenuItem {
  nama: string;
  harga: string;
  gambar?: string;
  deskripsi: string;
  features: string[];
  nutritionInfo: NutritionInfo;
  sampleMeals: SampleMeals;
}

export interface Testimonial {
  name: string;
  message: string;
  rating: number;
}

export interface StarsProps {
  interactive?: boolean;
  rating: number;
  onChange?: (rating: number) => void;
  children?: React.ReactNode;
};

export interface SubcriptionPlan {
  id:string
  title: string, 
  price: number, 
  period: string,
  features: string[],
  popular: boolean,
}

export interface MealType{
   id: string;
  name: string;
  price: number;
  description: string;
}

export interface DeliveryDay {
  id:string,
  name:string,
  price: number
};

export interface FormData {
  fullName:string,
  phoneNumber:string,
  selectedPlan: SubcriptionPlan | null,
  mealTypes:string[],
  deliveryDays:string[],
  allergies:string
}

export interface FormErrors {
  fullName?:string,
  phoneNumber?: string;
  selectedPlan?: string;
  mealTypes?: string;
  deliveryDays?: string;
}


// export {FormData,} 