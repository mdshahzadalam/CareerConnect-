import React from 'react';

import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
// import JobApplicationForm from '../components/JobApplicationForm';


const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Banner */}
      <Banner />
      {/* <JobApplicationForm /> */}

      {/* Featured Jobs */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Featured Jobs
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Browse through our latest job postings
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((job) => (
              <div key={job} className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      Senior Frontend Developer
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      We are looking for an experienced frontend developer to join our team. You'll be working with modern technologies like React, TypeScript, and GraphQL.
                    </p>
                    <div className="mt-6">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <span className="text-sm text-gray-500">Location:</span>
                          <span className="ml-1 font-medium">Remote</span>
                        </div>
                        <div className="ml-4 flex-shrink-0 flex">
                          <span className="text-sm text-gray-500">Type:</span>
                          <span className="ml-1 font-medium">Full-time</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Link
                        to="/jobs/1"
                        className="text-base font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        View details<span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/jobs"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              View all jobs
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A better way to find your next job
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our platform connects you with top employers and helps you find the perfect job match.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {[
                {
                  name: 'Easy Application',
                  description: 'Apply to jobs with just a few clicks and track your applications in real-time.',
                  icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
                },
                {
                  name: 'Smart Matching',
                  description: 'Our algorithm matches your skills and preferences with the right job opportunities.',
                  icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'
                },
                {
                  name: 'Career Resources',
                  description: 'Access to career advice, resume tips, and interview preparation resources.',
                  icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
                },
                {
                  name: 'Company Insights',
                  description: 'Get insights into company culture, salaries, and employee reviews.',
                  icon: 'M19 20V5.5a2.5 2.5 0 00-2.5-2.5H7.5A2.5 2.5 0 005 5.5V20m14 0a2 2 0 01-2 2H7a2 2 0 01-2-2m14 0h-2.5m-15 0H5m0 0h2.5m0 0h9m-9 0h9m0 0H12'
                }
              ].map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d={feature.icon}
                        />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to find your dream job?</span>
            <span className="block">Start your search today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Join thousands of professionals who found their perfect job match with us.
          </p>
          <Link
            to="/jobs"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
          >
            Browse Jobs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
