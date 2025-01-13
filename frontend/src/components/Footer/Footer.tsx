import { Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12 flex flex-col items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="text-lg font-bold mb-2 sm:mb-4">EnergyInfra.AI</h3>
              <p className="text-sm text-center sm:text-start text-gray-400">
                Innovating the future of energy management with cutting-edge AI
                solutions.
              </p>
            </div>
            <div className="flex flex-col items-center sm:items-end">
                <h3 className="text-lg font-bold mb-2 sm:mb-4">Follow Us</h3>
                <div className="flex flex-row gap-2">
                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition"
                >
                    <Facebook size={24} />
                </a>
                <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition"
                >
                    <Twitter size={24} />
                </a>
                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition"
                >
                    <Linkedin size={24} />
                </a>
                </div>
            </div>
          </div>
          <div className="mt-10 text-center text-sm text-gray-500">
            © 2025 EnergyInfra.AI. All rights reserved.
          </div>
        </div>
      </footer>
    );
};

export default Footer;  