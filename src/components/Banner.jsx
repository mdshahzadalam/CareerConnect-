import React from 'react';

const Banner = () => {
  return (
    <div className="relative bg-indigo-700">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Career banner"
        />
        <div className="absolute inset-0 bg-indigo-800 mix-blend-multiply" aria-hidden="true" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Find Your Dream Job Today
        </h1>
        <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
          Join thousands of companies and candidates who are already using CareerConnect Pro to find their perfect match.
        </p>
        <div className="mt-10 sm:flex sm:justify-start">
          <div className="rounded-md shadow">
            <a
              href="/jobs"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 md:py-4 md:text-lg md:px-10"
            >
              Browse Jobs
            </a>
          </div>
          {/* <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <a
              href="/post-job"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 bg-opacity-90 hover:bg-opacity-100 md:py-4 md:text-lg md:px-10"
            >
              Registration Form
            </a>
          </div> */}

          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 relative group">
            <a
              href="https://forms.gle/rTAfeuxP8nMUsNEb8"
              className="relative w-full flex items-center justify-center px-8 py-3 
               text-base font-medium rounded-md text-white 
               bg-indigo-500 bg-opacity-90 hover:bg-opacity-100 
               md:py-4 md:text-lg md:px-10
               overflow-hidden z-10"
            >
              Registration Form
            </a>
          </div>



        </div>
      </div>
    </div>
  );
};

export default Banner;
