/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { dataMenu } from "../../data/dataMenu";
import { Card } from "../../components/ui/Card/Card";
import { Button } from "../../components/ui/Button/Button";
import { Modal } from "../../components/ui/Modal/Modal";
import { MenuPlanDetail } from "../../components/ui/Modal/MenuPlanDetail";

export const MenuPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);



  const openModal = (plan: any) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
  };

  return (
    <main className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Menu & Meal Plans</h1>
          <p className="text-xl text-gray-600">Pilihan menu sehat yang dapat disesuaikan dengan kebutuhan Anda</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dataMenu.map((plan, index) => (
            <Card key={index} className="text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">{plan.gambar}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.nama}</h3>
              <p className="text-2xl font-bold text-green-600 mb-4">{plan.harga}</p>
              <p className="text-gray-600 text-sm mb-6 line-clamp-3">{plan.deskripsi}</p>
              
              <div className="space-y-3">
                <Button 
                  variant="secondary" 
                  className="w-full"
                  onClick={() => openModal(plan)}
                >
                  See More Details
                </Button>
                <Button variant="primary" className="w-full">
                  Pilih Paket
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedPlan && <MenuPlanDetail plan={selectedPlan} />}
      </Modal>
    </main>
  );
};