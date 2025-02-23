import Navbar from './components/Navbar/Navbar.tsx';
import HomePage from './pages/Home/HomePage.tsx';

import Footer from './components/Footer/Footer.tsx';

import './assets/css/App.css';

export default function App() {
    return (
        <div className="min-h-screen flex flex-col bg-white">

            <Navbar />

            <HomePage />

            <Footer />

        </div>
    );
}