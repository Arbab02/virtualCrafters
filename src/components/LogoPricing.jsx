'use client';

import { useState } from 'react';
import Link from 'next/link'


const LogoPricing = () => {
  return (
    <section className="text-gray-400 bg-[#000319] body-font overflow-hidden">
      <div className="container px-5 pb-8 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          
          <h2 className="text-4xl font-extrabold title-font -mb-6 mt-12 ">Logo Designing</h2>
          
      
        </div>
        <div className="flex flex-wrap -m-4">
          {/* Add your PricingCard components here with the updated code */}
          <PricingCard
            title="Basic Logo Package"
            price="$49.99"
            features={[
             " 2 Custom Logo Design Concepts",
"1 Dedicated Designer" ,            
"3 Revisions" ,                           
"All Final Files Format (AI, EPS, PNG, JPG)  " ,      
"Complete Deployment",
"Dedicated Accounts Manager",
"100% Ownership Rights",
"100% Satisfaction Guarantee",
"100% Unique Design Guarantee",
"100% Money Back Guarantee *"
            ]}
            buttonText="Order Now"
            buttonStyle="bg-gray-800 hover:bg-gray-700"
            footerText="Literally you probably haven't heard of them jean shorts."
          />
          <PricingCard
              title="Start Up Logo Package"
              price="$119.99"
              features={[
                "4 Custom Logo Design Concepts By 1 Designers (Industry specific)",
                "FREE Icon" ,             
                "FREE Business Card Design",
                "UNLIMITED Revisions",
                "All Final Files Format (AI, EPS, PNG, JPG, PDF)" ,   
                "Complete Deployment",
                "Dedicated Accounts Manager",
                "100% Ownership Rights",
                "100% Satisfaction Guarantee",
                "100% Unique Design Guarantee"
            ]}
            buttonText="Order Now"
            buttonStyle="bg-gray-800 hover:bg-gray-700"
            // footerText="Literally you probably haven't heard of them jean shorts."
          />
          <PricingCard
              title="PROFESSIONAL LOGO Package"
              price="$149"
              features={[
                "UNLIMITED Logo Design Concepts By 05 Designs",
"UNLIMITED Revisions",
"FREE Stationary Design Set",
"FREE MS Word Letterhead",
"All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)",
"15% Discount on your next order" ,                         
"Complete Deployment",
"Dedicated Accounts Manager",
"100% Ownership Rights",
"100% Satisfaction Guarantee",
"100% Unique Design Guarantee"
            ]}
            buttonText="Order Now"
            buttonStyle="bg-gray-800 hover:bg-gray-700"
            footerText="Literally you probably haven't heard of them jean shorts."
          />
          <PricingCard
              title="Premium 3D Logo"
              price="$299.99"
              features={[
                "3 Unique 3D Logo Concepts",
"Light Effects and VFX",
"Fully Rendered " ,            
"Multiple 3D Angles",
"By 3 Award Winning Designers",
"72 hours Turnaround Time",
"UNLIMITED Revisions "    ,         
"Guarantee:"    ,          
"Complete Deployment",
"Dedicated Accounts Manager",
"100% Ownership Rights",
"100% Satisfaction Guarantee",
"100% Unique Design Guarantee",
"100% Money Back Guarantee *"
            ]}
            buttonText="Order Now"
            buttonStyle="bg-gray-800 hover:bg-gray-700"
            footerText="Literally you probably haven't heard of them jean shorts."
          />
          <PricingCard
              title="Animated Logo"
              price="$299.99"
              features={[
                "3 custom and Unique design" ,       
"2 Unique Animation styles",
"Camera Angles Positioning",
"Lighting/Composing "  ,                
"3 Revisions "  ,                
"Animation and Effects",
"Dynamic colours "   ,               
"background music",
"Source files format Mp4 MOV ETC",
"Guarantee: " ,                 
"Complete Deployment",
"Dedicated Accounts Manager",
"100% Ownership Rights",
"100% Satisfaction Guarantee",
"100% Unique Design Guarantee",
"100% Money Back Guarantee *"
            ]}
            buttonText="Order Now"
            buttonStyle="bg-gray-800 hover:bg-gray-700"
            footerText="Literally you probably haven't heard of them jean shorts."
          />
          <PricingCard
              title="2D Advance Logo Animated"
              price="$499.99"
              features={[
                "3 custom and Unique design",
"3 Unique Animation styles",
"Camera Angles Positioning",
"Lighting/Composing",
"unlimited Revisions",
"Animation and Effects",
"Dynamic colours",
"background music",
"Source files format Mp4 MOV ETC",
"Guarantee:"  ,                 
"Complete Deployment",
"Dedicated Accounts Manager",
"100% Ownership Rights",
"100% Satisfaction Guarantee",
"100% Unique Design Guarantee",
"100% Money Back Guarantee *"
            ]}
            buttonText="Order Now"
            buttonStyle="bg-gray-800 hover:bg-gray-700"
            footerText="Literally you probably haven't heard of them jean shorts."
          />
          <PricingCard
              title="3D Extreme Logo Animated"
              price="$599.99"
              features={[
                "5 custom and Unique design",
"5 Unique Animation styles",
"Camera Angles Positioning",
"Lighting/Composing",
"Unlimited Revisions",
"Animation and VFX "  ,                
"Dynamic colours "  ,                
"background music",
"Source files format Mp4 MOV ETC",
"Guarantee:"     ,           
"Complete Deployment",
"Dedicated Accounts Manager",
"100% Ownership Rights",
"100% Satisfaction Guarantee",
"100% Unique Design Guarantee",
"100% Money Back Guarantee *"
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

const PricingCard = ({ title, price, features, badge, buttonText, buttonStyle, footerText }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <div className="p-4 md:w-1/2 w-full">
    <div className={`h-full p-6 rounded-lg flex flex-col relative overflow-hidden ${badge ? "border-indigo-500" : "border-gray-700"}`}>
      {badge && (
        <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">{badge}</span>
      )}
        <h2 className="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">{title}</h2>
        <h1 className="text-5xl text-white pb-4 mb-4 border-b border-gray-800 leading-none">{price}</h1>
        {features.slice(0, expanded ? features.length : 5).map((feature, index) => (
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
          <button
            className="text-indigo-500 mt-3"
            onClick={toggleExpanded}
          >
            {expanded ? 'Read Less' : 'Read More'}
          </button>
        )}
         <Link href="mailto:info@virtualcrafterstek.com" ><button className={`flex items-center mt-auto ${buttonStyle} border-0 py-2 px-4 w-full focus:outline-none  rounded-full`}>
          {buttonText}
        </button></Link>
        {/* <p className="text-xs text-gray-400 mt-3">{footerText}</p> */}
      </div>
    </div>
  );
};

export default LogoPricing;
