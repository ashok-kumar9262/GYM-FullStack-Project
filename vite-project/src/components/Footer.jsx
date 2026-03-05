import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[rgb(96,92,110)] text-white py-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-8">
          {/* Gym Information Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Gym Info</h3>
            <p className="text-lg">123 Fitness St, Muscle City, TX</p>
            <p className="text-lg">Phone: (123) 456-7890</p>
            <p className="text-lg">Email: info@gymwebsite.com</p>
          </div>

          {/* Copyright Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Legal</h3>
            <p className="text-lg">© 2023 Gym Website. All rights reserved.</p>
            <p className="text-lg">Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;