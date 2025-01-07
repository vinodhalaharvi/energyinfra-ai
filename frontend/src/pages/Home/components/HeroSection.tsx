import { ArrowRight } from "lucide-react"

const HeroSection = () => {
  return (
    <div className="pt-24 pb-16 text-center bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Cloud-Native Infrastructure for{' '}
                <span className="text-blue-600">Energy Systems</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
                Transform your energy infrastructure with cloud-native reliability and
                AI-powered intelligence.
            </p>
            <div className="flex justify-center space-x-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center">
                    Start Free Trial <ArrowRight className="ml-2" size={20}/>
                </button>
                <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50">
                    Watch Demo
                </button>
            </div>
        </div>
    </div>
  )
}

export default HeroSection;