import React from 'react'

const AboutUs = () => {
  return (
    <section className="text-gray-400 bg-[#000319] body-font">
    <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">
          Who We Are?
         
        </h1>
        <p className="mb-8 leading-relaxed">
        We are Virtual Crafters — a Canadian-based Software Company, specializing in providing creative digital solutions 🌍. Our services include  social media marketing, website development, website designing, SEO , and graphic design 🎨. We help your brand thrive online by building visually stunning websites and data-driven social media strategies. Let us boost your online visibility with customized SEO services 🚀. 
        </p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-[blue] border-0 py-2 px-6 focus:outline-none transition-all hover:scale-110 rounded-full text-lg">
           Join Us Now
          </button>
          
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img className="object-cover object-center rounded" alt="hero" src="/images/about.jpg" />
      </div>
    </div>
  </section>
  )
}

export default AboutUs