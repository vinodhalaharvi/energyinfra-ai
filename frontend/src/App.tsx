import Navbar from './components/Navbar/Navbar.tsx';
import HomePage from './pages/Home/HomePage.tsx';

import Footer from './components/Footer/Footer.tsx';

import 'aos/dist/aos.css';
import './assets/css/App.css';

export default function App() {
    return (
        <div className="min-h-screen bg-white">

            <Navbar />

            <HomePage />

            <Footer />

        </div>
    );
}