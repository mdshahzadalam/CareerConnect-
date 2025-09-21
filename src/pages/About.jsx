import React from 'react';
import { useState } from 'react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:text-center">
        <h2 className=" text-3xl font-extrabold text-indigo-600  tracking-wide uppercase">About Us</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Connecting Talent with Opportunity
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          CareerConnect Pro is a leading job portal that bridges the gap between talented professionals and top employers worldwide.
        </p>
      </div>

      <div className="mt-20">
        <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div className="relative">
            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Our Mission</p>
            <p className="mt-2 ml-16 text-base text-gray-500">
              To empower job seekers and employers by providing a seamless, efficient, and effective platform for job search and recruitment.
            </p>
          </div>

          <div className="relative">
            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Our Vision</p>
            <p className="mt-2 ml-16 text-base text-gray-500">
              To be the most trusted and comprehensive job portal that transforms the way people find jobs and companies find talent.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="bg-white overflow-hidden">
          <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen"></div>
            <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
              <div>
                <h2 className="text-3xl text-indigo-600 font-extrabold tracking-wide uppercase">Our Story</h2>
                <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  How we got started
                </h3>
              </div>
            </div>
            <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="relative lg:row-start-1 lg:col-start-2">
                <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                  <figure>
                    <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                      <img
                        className="rounded-lg shadow-lg object-cover object-center"
                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80"
                        alt="Team working together"
                        width={1184}
                        height={1376}
                      />
                    </div>
                  </figure>
                </div>
              </div>
              <div className="mt-8 lg:mt-0">
                <div className="text-base max-w-prose mx-auto lg:max-w-none">
                  <p className="text-lg text-gray-500">
                    At <span className="font-semibold text-indigo-600">CareerConnectPro</span>, our mission is simple yet powerful:
                    to provide better opportunities and make job searching more efficient, transparent, and accessible across every field.
                    Since our launch in 2023, we’ve been dedicated to bridging the gap between talented professionals and forward-thinking employers.
                  </p>
                </div>
                <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                  <p>
                    We understand that traditional job portals can often feel overwhelming and outdated.
                    That’s why we built a smarter platform powered by advanced technology and data-driven insights—
                    ensuring the right candidates connect with the right opportunities faster and more effectively.
                  </p>
                  <p>
                    Whether you’re a job seeker exploring your next big career move or an employer searching for top talent,
                    CareerConnectPro is here to make the process seamless and rewarding. Together, we’re reshaping the way people find jobs
                    and helping businesses grow with the right talent in every industry.
                  </p>
                  <p>
                    Join thousands of professionals and organizations who trust us to turn career goals into success stories.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl text-indigo-600 font-extrabold tracking-wide uppercase">Our Team</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Meet our leadership
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              A diverse group of passionate individuals dedicated to making a difference in the job market.
            </p>
          </div>

          <div className="mt-20">
            <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
              {[
                {
                  name: 'John Smith',
                  role: 'CEO & Founder',
                  imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
                  bio: 'John has over 15 years of experience in the HR tech industry and is passionate about using technology to solve real-world problems.'
                },
                {
                  name: 'Sarah Johnson',
                  role: 'CTO',
                  imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
                  bio: 'Sarah leads our engineering team with a focus on building scalable and user-friendly solutions for our customers.'
                },
                {
                  name: 'Michael Chen',
                  role: 'Head of Product',
                  imageUrl: 'https://images.unsplash.com/photo-1519085360759-324711497c1c?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
                  bio: 'Michael is responsible for product strategy and ensuring we deliver the best possible experience for our users.'
                },
              ].map((person) => (
                <div key={person.name} className="text-center">
                  <div className="space-y-4">
                    <img
                      className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56 object-cover"
                      src={person.imageUrl}
                      alt=""
                    />
                    <div className="space-y-2">
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h3>{person.name}</h3>
                        <p className="text-indigo-600">{person.role}</p>
                      </div>
                      <div className="text-sm text-gray-500">
                        <p>{person.bio}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl text-indigo-600 font-extrabold tracking-wide uppercase">Values</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What we stand for
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our core values guide everything we do at CareerConnect Pro.
            </p>
          </div>

          <div className="mt-20">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {[
                {
                  name: 'Integrity',
                  description: 'We believe in being honest, transparent, and ethical in all our interactions with candidates and employers.',
                  icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                },
                {
                  name: 'Innovation',
                  description: 'We constantly seek new and better ways to improve our platform and services.',
                  icon: 'M13 10V3L4 14h7v7l9-11h-7z'
                },
                {
                  name: 'Excellence',
                  description: 'We strive for excellence in everything we do, from our technology to our customer service.',
                  icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
                },
                {
                  name: 'Empathy',
                  description: 'We understand the challenges of job searching and hiring, and we approach both with compassion.',
                  icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                },
                {
                  name: 'Diversity & Inclusion',
                  description: 'We believe in creating opportunities for people from all backgrounds and walks of life.',
                  icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                },
                {
                  name: 'Customer Success',
                  description: 'We measure our success by the success of our customers and candidates.',
                  icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                },
              ].map((value) => (
                <div key={value.name} className="relative">
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
                          d={value.icon}
                        />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{value.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{value.description}</dd>
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
            <span className="block">Ready to join our team?</span>
            <span className="block">We're hiring!</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Check out our open positions and find your next career opportunity.
          </p>
          <a
            href="/jobs"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
          >
            View Open Positions
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
