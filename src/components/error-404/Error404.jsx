import { Link } from "react-router-dom";

export default function Error404Section() {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">

        {/* Illustration */}
        <div className="relative flex justify-center">

          {/* Background Blur */}
          <div className="absolute w-105 h-80 bg-blue-100 rounded-full blur-3xl opacity-70"></div>

          {/* 404 */}
          <h1 className="absolute text-[220px] font-extrabold text-blue-600/20 select-none">
            404
          </h1>

          {/* Character */}
          <img
            src="/404.svg"
            alt="404 Illustration"
            className="relative w-90 z-10"
          />
        </div>

        {/* Heading */}
        <h2 className="mt-8 text-5xl font-bold text-gray-900">
          Oops! Page not found
        </h2>

        {/* Description */}
        <p className="mt-5 text-gray-500 max-w-xl mx-auto leading-8 text-lg">
          The page you are looking for doesn't exist or has been moved to
          another location.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

          <Link
            to="/"
            className="px-10 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-300 shadow-lg"
          >
            Go Home
          </Link>

          <Link
            to="/jobs"
            className="px-10 py-4 rounded-xl border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold transition duration-300"
          >
            Browse Jobs
          </Link>

        </div>
      </div>
    </section>
  );
}