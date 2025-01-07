import Navbar from './components/Navbar/Navbar.tsx';
import HomePage from './pages/Home/HomePage.tsx';

import './assets/css/App.css';

export default function App() {
    return (
        <div className="min-h-screen bg-white">

            <Navbar />

            <HomePage />

        </div>
    );
}