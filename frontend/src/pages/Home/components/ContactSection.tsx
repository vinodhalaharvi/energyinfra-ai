const ContactSection = () => {
    return (
      <div  className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
            Get in Touch
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Have questions or want to get started? Fill out the form below, and
            we’ll get back to you as soon as possible.
          </p>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  rows={5}
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-blue-600 text-white font-medium text-lg rounded-md shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-400"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    );
};
  
export default ContactSection;