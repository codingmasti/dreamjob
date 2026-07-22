import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-white">
              Dream<span className="text-blue-500">Job</span>
            </h2>

            <p className="mt-5 leading-7">
              Find your dream job with top companies around the world.
              Discover thousands of opportunities, connect with employers,
              and take the next step in your career.
            </p>

            <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 transition flex items-center justify-center"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-sky-500 transition flex items-center justify-center"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-700 transition flex items-center justify-center"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-pink-500 transition flex items-center justify-center"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Job Seekers */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-5">
              Job Seekers
            </h3>

            <ul className="space-y-3">
              <li><Link to="/jobs" className="hover:text-blue-400">Browse Jobs</Link></li>
              <li><Link to="/companies" className="hover:text-blue-400">Companies</Link></li>
              <li><Link to="/" className="hover:text-blue-400">Career Advice</Link></li>
              <li><Link to="/" className="hover:text-blue-400">Saved Jobs</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-5">
              Company
            </h3>

            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-blue-400">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
              <li><Link to="/" className="hover:text-blue-400">Privacy Policy</Link></li>
              <li><Link to="/" className="hover:text-blue-400">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-5">
              Newsletter
            </h3>

            <p className="text-sm leading-6">
              Subscribe to receive the latest job opportunities directly in your inbox.
            </p>

            <div className="flex mt-6">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 rounded-l-lg bg-slate-800 outline-none text-white"
              />

              <button className="bg-blue-600 hover:bg-blue-700 px-5 rounded-r-lg transition">
                <FaPaperPlane />
              </button>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-gray-400">
            © 2026 Dream Job. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <Link to="/" className="hover:text-blue-400">
              Privacy
            </Link>

            <Link to="/" className="hover:text-blue-400">
              Terms
            </Link>

            <Link to="/" className="hover:text-blue-400">
              Cookies
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;