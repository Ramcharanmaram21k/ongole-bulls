import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';
import Footer from './components/Footer/Footer.jsx';
import AppointmentForm from './RoutingPages/AppointmentForm/AppointmentForm.jsx';
import ContactForm from './RoutingPages/ContactForm/ContactForm.jsx'
import AboutUs from './RoutingPages/AboutUs/AboutUs.jsx';
import MutualFund from './RoutingPages/MutualFund/MutualFund.jsx';
import PmsPage from './RoutingPages/PmsPage/PmsPage.jsx';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/AppointmentForm" element={<AppointmentForm />} />
                    <Route path="/ContactForm" element={<ContactForm /> } />
                    <Route path="/AboutUs" element={<AboutUs />} />
                    <Route path='/MutualFund' element={<MutualFund/>}  />
                    <Route path='/PmsPage' element={<PmsPage />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
