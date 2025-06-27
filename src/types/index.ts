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
// export default {HeroProps, ServiceProps, contactProps, ContactInfo}