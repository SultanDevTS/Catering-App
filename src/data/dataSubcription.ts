import type { DeliveryDay, MealType, SubcriptionPlan } from "../types";

export const dataSubcriptions:SubcriptionPlan[] = [
    { 
            id: "1",
            title: "Basic", 
            price: 3500000,
            period: "per bulan",
            features: ["20 hari meal plan", "Konsultasi dasar", "Pengiriman gratis"],
            popular: false
          },
          { 
            id: "2",
            title: "Premium", 
            price: 4500000, 
            period: "per bulan",
            features: ["30 hari meal plan", "Konsultasi premium", "Pengiriman gratis", "Custom menu"],
            popular: true
          },
          { 
            id:"3",
            title: "Ultimate", 
            price: 6000000, 
            period: "per bulan",
            features: ["30 hari meal plan", "Konsultasi personal", "Pengiriman gratis", "Custom menu", "Nutrisi tracker"],
            popular: false
          }
];


export const mealTypes:MealType[] = [
  {
    id: 'breakfast',
    name: 'Sarapan',
    price: 0,
    description: 'Menu sarapan sehat dan bergizi'
  },
  {
    id: 'lunch',
    name: 'Makan Siang',
    price: 0,
    description: 'Menu makan siang yang mengenyangkan'
  },
  {
    id: 'dinner',
    name: 'Makan Malam',
    price: 0,
    description: 'Menu makan malam rendah kalori'
  },
  {
    id: 'snack',
    name: 'Snack',
    price: 50000,
    description: 'Camilan sehat tambahan (+50k/bulan)'
  }
];

export const deliveryDays:DeliveryDay[] = [
  { id: 'monday', name: 'Senin', price: 0 },
  { id: 'tuesday', name: 'Selasa', price: 0 },
  { id: 'wednesday', name: 'Rabu', price: 0 },
  { id: 'thursday', name: 'Kamis', price: 0 },
  { id: 'friday', name: 'Jumat', price: 0 },
  { id: 'saturday', name: 'Sabtu', price: 25000 },
  { id: 'sunday', name: 'Minggu', price: 25000 }
]