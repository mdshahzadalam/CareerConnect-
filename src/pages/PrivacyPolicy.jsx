import { Link } from 'react-router-dom';
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="prose prose-indigo mx-auto">
          <p className="text-gray-600 mb-6">
            At CareerConnect Pro, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
          <p className="text-gray-600 mb-4">We may collect personal information that you provide directly to us, including but not limited to:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Contact information (name, email address, phone number)</li>
            <li>Professional information (resume, work history, education)</li>
            <li>Account credentials</li>
            <li>Job preferences and search criteria</li>
            <li>Communication preferences</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-600 mb-4">We may use the information we collect for various purposes, including to:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Provide, maintain, and improve our services</li>
            <li>Match job seekers with potential employers</li>
            <li>Send you job alerts and other relevant communications</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Analyze and improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Information Sharing and Disclosure</h2>
          <p className="text-gray-600 mb-4">We may share your personal information with:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Potential employers when you apply for jobs</li>
            <li>Service providers who assist us in operating our website and services</li>
            <li>Legal authorities when required by law or to protect our rights</li>
            <li>Other parties with your consent</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Data Security</h2>
          <p className="text-gray-600 mb-6">
            We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Your Rights</h2>
          <p className="text-gray-600 mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Access and receive a copy of your personal data</li>
            <li>Rectify any personal information that is inaccurate</li>
            <li>Request deletion of your personal information</li>
            <li>Object to or restrict processing of your data</li>
            <li>Withdraw consent at any time</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Changes to This Policy</h2>
          <p className="text-gray-600 mb-6">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Contact Us</h2>
          <p className="text-gray-600 mb-6">
            If you have any questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:privacy@careerconnectpro.com" className="text-indigo-600 hover:underline">
              privacy@careerconnectpro.com
            </a>
            .
          </p>

          <div className="mt-12 pt-6 border-t border-gray-200">
            <Link to="/" className="text-indigo-600 hover:text-indigo-800 font-medium">
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
