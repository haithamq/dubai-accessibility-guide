import React from 'react';
import { Accessibility, Mail, Phone, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer 
      role="contentinfo" 
      className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 text-white py-8 mt-12"
      aria-label="Site footer"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Accessibility size={24} aria-hidden="true" />
              <h3 className="text-lg font-semibold">Dubai Accessibility Guide</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Helping visitors with disabilities discover accessible places and activities in Dubai. 
              Our mission is to make Dubai's attractions inclusive for everyone.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Mail size={16} aria-hidden="true" />
                <a 
                  href="mailto:info@dubaiaccessibility.ae" 
                  className="text-gray-300 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded transition-colors"
                >
                  info@dubaiaccessibility.ae
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} aria-hidden="true" />
                <a 
                  href="tel:+971-4-123-4567" 
                  className="text-gray-300 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded transition-colors"
                >
                  +971 4 123 4567
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Globe size={16} aria-hidden="true" />
                <a 
                  href="https://www.dubaiaccessibility.ae" 
                  className="text-gray-300 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.dubaiaccessibility.ae
                </a>
              </div>
            </div>
          </div>

          {/* Accessibility Statement */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Accessibility</h3>
            <p className="text-gray-300 text-sm mb-4">
              This website is designed to be accessible to all users, including those with disabilities.
            </p>
            <div className="space-y-1 text-sm text-gray-300">
              <p>• WCAG 2.1 AA compliant</p>
              <p>• Screen reader compatible</p>
              <p>• Keyboard navigation</p>
              <p>• High contrast mode</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Dubai Accessibility Guide. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a 
                href="/privacy" 
                className="text-gray-400 hover:text-cyan-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms" 
                className="text-gray-400 hover:text-cyan-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded transition-colors"
              >
                Terms of Service
              </a>
              <a 
                href="/accessibility" 
                className="text-gray-400 hover:text-cyan-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded transition-colors"
              >
                Accessibility Statement
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
