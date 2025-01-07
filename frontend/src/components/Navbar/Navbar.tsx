const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
                <div className="text-xl font-bold text-blue-600">EnergyInfra.AI</div>
                <div className="hidden md:flex space-x-8">
                    <a href="#features" className="text-gray-700 hover:text-blue-600">Features</a>
                    <a href="#ai" className="text-gray-700 hover:text-blue-600">AI Capabilities</a>
                    <a href="#use-cases" className="text-gray-700 hover:text-blue-600">Use Cases</a>
                    <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    Get Started
                </button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar