const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-12 flex flex-col ">
        <div className="flex flex-col sm:flex-row justify-between gap-10 sm:gap-5">
          {/* Left Column: Company Description */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-bold mb-2 sm:mb-4">EnergyInfra.AI</h3>
            <p className="max-w-72 text-sm text-center sm:text-start text-gray-400">
              Innovating the future of energy management with cutting-edge AI 
              solutions.
            </p>
          </div>

          {/* Right Column: Placeholder Text (instead of social media) */}
          <div className="flex flex-col items-center sm:items-end">
            <h3 className="text-lg font-bold mb-2 sm:mb-4">Our Commitment</h3>
            <p className="max-w-72 text-sm text-center sm:text-end text-gray-400">
              We strive to empower businesses and communities with sustainable, 
              intelligent energy infrastructures.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center text-sm text-gray-500">
          © 2025 EnergyInfra.AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;