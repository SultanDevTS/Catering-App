import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import { Footer } from './components/layout/Footer/Footer';
import { MenuPage } from './pages/Menupage/Menupage';
import { ContactPage } from './pages/Contactpage/Contactpage';
import { Navbar } from './components/ui/Navbar/Navbar';
import { Subscriptionform } from './pages/Subscriptionpage/SubcriptionForm';
import { SubscriptionPage } from './pages/Subscriptionpage/Subcriptionpage';


const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/menu" element={<MenuPage />} /> 
          <Route path="/subscription" element={<SubscriptionPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/subcribe/form" element={<Subscriptionform/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;