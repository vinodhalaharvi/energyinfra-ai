import Navbar from './components/Navbar/Navbar.tsx';
import HomePage from './pages/Home/HomePage.tsx';

import Footer from './components/Footer/Footer.tsx';

//React flow css
import '@xyflow/react/dist/style.css';

//App css
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