import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 pl-8">
        {/* About Us */}
        <div>
          <h2 className="text-xl font-semibold mb-4">About Us</h2>
          <p className="text-sm text-gray-300">
            We provide high-quality services to help your business grow. Join our community to stay updated.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>Email: clickshop@example.com</li>
            <li>Phone: +977 9761794446</li>
            <li>Location: Kathmandu, Nepal</li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Support</h2>
          <ul className="text-sm text-gray-300 space-y-2">
            <li><a href="/faqs" className="hover:text-white">FAQs</a></li>
            <li><a href="/shipping-returns" className="hover:text-white">Shipping & Returns</a></li>
            <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="/terms-conditions" className="hover:text-white">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-slate-900 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ClickShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
