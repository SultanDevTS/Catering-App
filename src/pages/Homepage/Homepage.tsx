import { Contact } from "../../components/feature/Contact/Contact";
import { Hero } from "../../components/feature/Hero/Hero";
import { Services } from "../../components/feature/Services/Services";
import { Testimoni } from "../../components/feature/Testimonal/Testimoni";
import { Footer } from "../../components/layout/Footer/Footer";
// import { Header } from "../../components/layout/Header/Header";
import type { ContactInfo, Service } from "../../types";

const Homepage: React.FC = () => {
  const businessName = "SEA Catering";
  const slogan = "Makanan Sehat, Kapan Saja, Di Mana Saja";
  
  const services: Service[] = [
    {
      id: "customization",
      title: "Kustomisasi Makanan",
      description: "Sesuaikan menu dengan preferensi diet, alergi, dan kebutuhan nutrisi personal Anda",
      icon: "🎯"
    },
    {
      id: "delivery",
      title: "Pengiriman Nasional",
      description: "Melayani pengiriman ke kota-kota besar di seluruh Indonesia dengan sistem logistik terpercaya",
      icon: "🚚"
    },
    {
      id: "nutrition",
      title: "Informasi Nutrisi Lengkap",
      description: "Dapatkan detail lengkap kalori, protein, karbohidrat, dan vitamin dalam setiap hidangan",
      icon: "📊"
    },
    {
      id: "consultation",
      title: "Konsultasi Gizi",
      description: "Tim ahli gizi profesional siap membantu merencanakan pola makan sehat Anda",
      icon: "👩‍⚕️"
    }
  ];
  
  const contactInfo: ContactInfo = {
    manager: "Brian",
    phone: "08123456789"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Header /> */}
      <main>
        <Hero businessName={businessName} slogan={slogan} />
        <Services service={services} />
        <Contact contact={contactInfo} />
        <Testimoni service={[]} />
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;