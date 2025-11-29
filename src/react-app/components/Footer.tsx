import { Link } from 'react-router';
import { Activity } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              BMI Calculator
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <Link to="/" className="hover:text-emerald-600 transition-colors">
              Home
            </Link>
            <Link to="/blog" className="hover:text-emerald-600 transition-colors">
              Blog
            </Link>
            <Link to="/about" className="hover:text-emerald-600 transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="hover:text-emerald-600 transition-colors">
              Contact
            </Link>
            <Link to="/privacy" className="hover:text-emerald-600 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-emerald-600 transition-colors">
              Terms & Conditions
            </Link>
          </div>
          
          <div className="text-sm text-gray-500">
            © {currentYear} BMI Calculator. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
