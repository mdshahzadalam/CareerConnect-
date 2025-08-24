import React from 'react';

import { useState } from 'react';

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    fathersName: '',
    mothersName: '',
    dateOfBirth: '',
    email: '',
    phone: '',
    address: '',
    qualification: '',
    skills: '',
    certifications: '',
    resume: null,
    coverLetter: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic will be added later
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      firstName: '',
      lastName: '',
      fathersName: '',
      mothersName: '',
      dateOfBirth: '',
      email: '',
      phone: '',
      address: '',
      qualification: '',
      skills: '',
      certifications: '',
      resume: null,
      coverLetter: ''
    });
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6 bg-indigo-700">
          <h3 className="text-lg leading-6 font-medium text-white">
            Job Application Form
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-indigo-200">
            Please fill in all the required fields to apply for this position.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="px-4 py-5 sm:p-6">
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            {/* Personal Information */}
            <div className="sm:col-span-3">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="fathersName" className="block text-sm font-medium text-gray-700">
                Father's Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fathersName"
                id="fathersName"
                required
                value={formData.fathersName}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="mothersName" className="block text-sm font-medium text-gray-700">
                Mother's Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="mothersName"
                id="mothersName"
                required
                value={formData.mothersName}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
                Date of Birth <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                required
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Full Address <span className="text-red-500">*</span>
              </label>
              <textarea
                name="address"
                id="address"
                rows={3}
                required
                value={formData.address}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            {/* Education and Skills */}
            <div className="sm:col-span-6">
              <label htmlFor="qualification" className="block text-sm font-medium text-gray-700">
                Highest Qualification <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="qualification"
                id="qualification"
                required
                value={formData.qualification}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="e.g., B.Tech in Computer Science"
              />
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="skills" className="block text-sm font-medium text-gray-700">
                Technical Skills <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="skills"
                id="skills"
                required
                value={formData.skills}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="e.g., JavaScript, React, Node.js, Python"
              />
              <p className="mt-1 text-xs text-gray-500">Separate skills with commas</p>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="certifications" className="block text-sm font-medium text-gray-700">
                Certifications (if any)
              </label>
              <input
                type="text"
                name="certifications"
                id="certifications"
                value={formData.certifications}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="e.g., AWS Certified Developer, Google Cloud Professional"
              />
            </div>

            {/* Resume Upload */}
            <div className="sm:col-span-6">
              <label className="block text-sm font-medium text-gray-700">
                Upload Resume (PDF, DOC, DOCX) <span className="text-red-500">*</span>
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="resume-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="resume-upload"
                        name="resume"
                        type="file"
                        required
                        accept=".pdf,.doc,.docx"
                        onChange={handleChange}
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 5MB</p>
                </div>
              </div>
            </div>

            {/* Cover Letter */}
            <div className="sm:col-span-6">
              <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700">
                Cover Letter
              </label>
              <div className="mt-1">
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  rows={4}
                  value={formData.coverLetter}
                  onChange={handleChange}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                  placeholder="Tell us why you're the perfect candidate for this position..."
                  defaultValue={''}
                />
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              type="button"
              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationForm;
