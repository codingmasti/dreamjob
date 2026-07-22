import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const contactInfo = [
  {
    id: 1,
    icon: <FaPhoneAlt />,
    title: "Call Us",
    value: "+91 98765 43210",
  },
  {
    id: 2,
    icon: <FaEnvelope />,
    title: "Email",
    value: "support@jobportal.com",
  },
  {
    id: 3,
    icon: <FaMapMarkerAlt />,
    title: "Office",
    value: "New Delhi, India",
  },
];

const Contact = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero */}
      <section className="bg-linear-to-r from-blue-600 to-indigo-700 py-20 text-white">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <h1 className="text-5xl font-bold">Contact Us</h1>

          <p className="mt-5 text-blue-100 max-w-2xl mx-auto text-lg">
            We'd love to hear from you. Whether you have a question,
            feedback, or need support, our team is here to help.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid md:grid-cols-3 gap-8">

          {contactInfo.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition"
            >
              <div className="text-4xl text-blue-600 flex justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {item.value}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* Form */}
      <section className="max-w-7xl mx-auto px-5 pb-20">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left */}
          <div className="bg-white p-10 rounded-2xl shadow-lg">

            <h2 className="text-3xl font-bold">
              Send Us a Message
            </h2>

            <p className="text-gray-500 mt-3">
              Fill out the form below and we'll get back to you soon.
            </p>

            <form className="mt-8 space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />

              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition"
              >
                Send Message
              </button>

            </form>

          </div>

          {/* Right */}
          <div>

            <div className="bg-white p-10 rounded-2xl shadow-lg">

              <h2 className="text-3xl font-bold">
                Office Hours
              </h2>

              <div className="mt-8 space-y-5">

                <div className="flex gap-4">
                  <FaClock className="text-blue-600 text-xl mt-1" />

                  <div>
                    <h4 className="font-semibold">
                      Monday - Friday
                    </h4>

                    <p className="text-gray-500">
                      9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <FaClock className="text-blue-600 text-xl mt-1" />

                  <div>
                    <h4 className="font-semibold">
                      Saturday
                    </h4>

                    <p className="text-gray-500">
                      10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <FaClock className="text-blue-600 text-xl mt-1" />

                  <div>
                    <h4 className="font-semibold">
                      Sunday
                    </h4>

                    <p className="text-gray-500">
                      Closed
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Google Map */}
            <div className="mt-8 rounded-2xl overflow-hidden shadow-lg">

              <iframe
                title="Google Map"
                src="https://www.google.com/maps?q=New+Delhi&output=embed"
                width="100%"
                height="350"
                loading="lazy"
                allowFullScreen
              />

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;