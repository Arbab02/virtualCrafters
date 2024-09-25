"use client";

import { useState } from "react";
import Link from 'next/link'


const SocialMediaPricing = () => {
  return (
    <section className="text-gray-400 bg-[#000319] body-font overflow-hidden">
      <div className="container px-5 pb-8 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
         
          <h2 className="text-4xl font-extrabold title-font -mb-6 mt-12 ">
            Social Media Marketing
          </h2>
        
        </div>
        <div className="flex flex-wrap -m-4">
          {/* Add your PricingCard components here with the updated code */}
          <PricingCard
            title="BASIC"
            price="$399.99"
            features={[
                "1 Platform (i.e Facebook)",
                "FB page Optimization (Creation & management)",
                "2 posts a week"  ,  ,       
                "2 FB posts boost/month",
                "Monthly activity report",
                "Facebook Cover Design",
                "Graphic designing of images"
            ]}
            buttonText="Order Now"
            buttonStyle="bg-gray-800 hover:bg-gray-700"
            footerText="Literally you probably haven't heard of them jean shorts."
          />
          <PricingCard
            title="Standard"
            price="$599.99"
            features={[
                "2 Platforms (i.e FB & Instagram)",
                "Optimize both pages (Creation & management)",
                "4 posts a week " ,                       
                "Content creation",
               "4 FB posts boost/month",
                "Monthly activity report",
                "Facebook Cover Design",
                "Graphic designing of images",
                "Response on messages/comments"
            ]}
            buttonText="Order Now"
            buttonStyle="bg-gray-800 hover:bg-gray-700"
            footerText="Literally you probably haven't heard of them jean shorts."
          />
          <PricingCard
            title="Premium"
            price="$699.99"
            features={[
                "3 Platforms (i.e FB, Instagram & Twitter/YouTube)",
                "Optimize all pages (Creation & management)",
               " Daily posting"     ,                    
                "Content creation",
                "8 FB posts boost/month",
                "Monthly activity report",
                "Facebook Cover Design",
                "Graphic designing of images",
                "Response on messages/comments",
                "Advertising"
            ]}
            buttonText="Order Now"
            buttonStyle="bg-gray-800 hover:bg-gray-700"
            footerText="Literally you probably haven't heard of them jean shorts."
          />
          
          {/* Add other PricingCard components similarly */}
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({
  title,
  price,
  features,
  badge,
  buttonText,
  buttonStyle,
  footerText,
}) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <div className="p-4 md:w-1/2 w-full">
    <div className={`h-full p-6 rounded-lg flex flex-col relative overflow-hidden ${badge ? "border-indigo-500" : "border-gray-700"}`}>
      {badge && (
        <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">{badge}</span>
      )}
        <h2 className="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">
          {title}
        </h2>
        <h1 className="text-5xl text-white pb-4 mb-4 border-b border-gray-800 leading-none">
          {price}
        </h1>
        {features
          .slice(0, expanded ? features.length : 5)
          .map((feature, index) => (
            <p key={index} className="flex items-center text-gray-400 mb-2">
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              {feature}
            </p>
          ))}
        {features.length > 5 && (
          <button className="text-indigo-500 mt-3" onClick={toggleExpanded}>
            {expanded ? "Read Less" : "Read More"}
          </button>
        )}
         <Link href="mailto:virtualcrafterstek@gmail.com" ><button className={`flex items-center mt-auto ${buttonStyle} border-0 py-2 px-4 w-full focus:outline-none  rounded-full`}>
          {buttonText}
        </button></Link>
        {/* <p className="text-xs text-gray-400 mt-3">{footerText}</p> */}
      </div>
    </div>
  );
};

export default SocialMediaPricing;
