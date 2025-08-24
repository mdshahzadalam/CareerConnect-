import { Link } from 'react-router-dom';
import React from 'react';

const TermsOfService = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="prose prose-indigo mx-auto">
          <p className="text-gray-600 mb-6">
            Welcome to CareerConnect Pro. By accessing or using our website and services, you agree to be bound by these Terms of Service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600 mb-6">
            By accessing or using the CareerConnect Pro platform, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree with any part of these terms, you may not access the service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. User Accounts</h2>
          <p className="text-gray-600 mb-4">When you create an account with us, you must provide accurate and complete information. You are responsible for:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Maintaining the confidentiality of your account credentials</li>
            <li>All activities that occur under your account</li>
            <li>Ensuring that your use of the service complies with all applicable laws</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Job Listings and Applications</h2>
          <p className="text-gray-600 mb-4">CareerConnect Pro provides a platform for job seekers and employers to connect. We do not:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Guarantee employment or job placement</li>
            <li>Endorse or guarantee the accuracy of job listings</li>
            <li>Charge job seekers for basic job search and application services</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. User Content</h2>
          <p className="text-gray-600 mb-4">You retain ownership of any content you submit, post, or display on or through the service. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and display such content.</p>
          <p className="text-gray-600 mb-6">You agree not to post content that is:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Unlawful, harmful, or fraudulent</li>
            <li>Discriminatory or harassing</li>
            <li>Misleading or deceptive</li>
            <li>Infringing on intellectual property rights</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Intellectual Property</h2>
          <p className="text-gray-600 mb-6">
            The CareerConnect Pro platform and its original content, features, and functionality are owned by us and are protected by international copyright, trademark, and other intellectual property laws.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Limitation of Liability</h2>
          <p className="text-gray-600 mb-6">
            To the maximum extent permitted by law, CareerConnect Pro shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of, or inability to access or use, the service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Termination</h2>
          <p className="text-gray-600 mb-6">
            We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Changes to Terms</h2>
          <p className="text-gray-600 mb-6">
            We reserve the right to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page and updating the "Last updated" date.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Governing Law</h2>
          <p className="text-gray-600 mb-6">
            These Terms shall be governed and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Contact Us</h2>
          <p className="text-gray-600 mb-6">
            If you have any questions about these Terms, please contact us at{' '}
            <a href="mailto:legal@careerconnectpro.com" className="text-indigo-600 hover:underline">
              legal@careerconnectpro.com
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

export default TermsOfService;
