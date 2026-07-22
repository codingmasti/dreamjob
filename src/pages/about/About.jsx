import {
  FaUsers,
  FaBriefcase,
  FaBuilding,
  FaBullseye,
  FaHandshake,
  FaRocket,
} from "react-icons/fa";

const stats = [
  {
    id: 1,
    icon: <FaUsers />,
    number: "50K+",
    title: "Job Seekers",
  },
  {
    id: 2,
    icon: <FaBuilding />,
    number: "500+",
    title: "Companies",
  },
  {
    id: 3,
    icon: <FaBriefcase />,
    number: "10K+",
    title: "Jobs Posted",
  },
];

const values = [
  {
    id: 1,
    icon: <FaBullseye />,
    title: "Our Mission",
    description:
      "To connect talented professionals with the right companies through a simple, fast, and transparent hiring platform.",
  },
  {
    id: 2,
    icon: <FaHandshake />,
    title: "Our Vision",
    description:
      "To become the most trusted job portal where employers and job seekers build successful careers together.",
  },
  {
    id: 3,
    icon: <FaRocket />,
    title: "Why Choose Us",
    description:
      "Verified companies, smart job matching, one-click applications, and a user-friendly experience.",
  },
];

const About = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero */}

      <section className="bg-linear-to-r from-blue-600 to-indigo-700 text-white py-24">

        <div className="max-w-7xl mx-auto px-5 text-center">

          <h1 className="text-5xl font-bold">
            About Our Job Portal
          </h1>

          <p className="mt-6 text-lg max-w-3xl mx-auto leading-8 text-blue-100">
            We help talented professionals discover their dream careers
            while enabling companies to hire the best talent quickly and
            efficiently.
          </p>

        </div>

      </section>

      {/* About */}

      <section className="max-w-7xl mx-auto px-5 py-20 grid lg:grid-cols-2 gap-14 items-center">

        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900"
          alt="about"
          className="rounded-3xl shadow-xl object-cover h-112.5 w-full"
        />

        <div>

          <span className="text-blue-600 font-semibold uppercase">
            Who We Are
          </span>

          <h2 className="text-4xl font-bold mt-3">
            Connecting Talent With Opportunity
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Our platform bridges the gap between talented job seekers and
            top employers. Whether you're searching for your first job,
            planning a career change, or hiring skilled professionals,
            our mission is to make the hiring journey simple and efficient.
          </p>

          <p className="mt-5 text-gray-600 leading-8">
            Thousands of professionals trust our platform every day to
            discover new opportunities and build successful careers.
          </p>

        </div>

      </section>

      {/* Stats */}

      <section className="max-w-7xl mx-auto px-5 py-10">

        <div className="grid md:grid-cols-3 gap-8">

          {stats.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg p-8 text-center"
            >
              <div className="text-5xl text-blue-600 flex justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold">
                {item.number}
              </h3>

              <p className="text-gray-500 mt-2">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* Values */}

      <section className="max-w-7xl mx-auto px-5 py-20">

        <div className="text-center">

          <h2 className="text-4xl font-bold">
            What Drives Us
          </h2>

          <p className="text-gray-500 mt-3">
            Everything we build is focused on helping careers grow.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {values.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition"
            >
              <div className="text-5xl text-blue-600 mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="bg-blue-600 py-20 text-white">

        <div className="max-w-5xl mx-auto text-center px-5">

          <h2 className="text-4xl font-bold">
            Ready to Find Your Dream Job?
          </h2>

          <p className="mt-5 text-blue-100 text-lg">
            Join thousands of professionals and companies building the
            future together.
          </p>

          <button className="mt-8 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition">
            Explore Jobs
          </button>

        </div>

      </section>

    </div>
  );
};

export default About;