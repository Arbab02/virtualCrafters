import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#000319] text-white border-t-[1px] py-10">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p>
            We are a leading Technical company offering services
            tailored to your needs. Our commitment is to deliver the best
            services to our customers.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">Home</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">About</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Services</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
           <Link href="mailto:virtualcrafterstek.com"><p className="mb-2">Email: virtualcrafterstek.com</p></Link>
          <p className="mb-2">Phone: +1 580 215 4325</p>
          <p className="mb-2">Address: V3W 0E9. City: SURREY. Area Name: SURREY. Province: BC. Area Code: 604.</p>
          <div className="flex space-x-4 mt-4">
           
           
            <a href="#" className="hover:text-gray-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.04c-5.49 0-9.96 4.47-9.96 9.96 0 4.41 3.6 8.08 8.16 8.93v-6.32h-2.44v-2.61h2.44v-2c0-2.42 1.48-3.76 3.63-3.76 1.03 0 1.91.08 2.17.11v2.52h-1.49c-1.17 0-1.39.56-1.39 1.37v1.78h2.78l-.36 2.61h-2.42v6.32c4.55-.85 8.15-4.52 8.15-8.93 0-5.49-4.47-9.96-9.96-9.96z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 text-center mt-8">
        <p>&copy; 2024 Virtual Crafters. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
