import React from 'react';


import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Mock data - This will be replaced with actual API calls
const mockJobs = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'TechCorp',
    location: 'Remote',
    type: 'Full-time',
    salary: '$90,000 - $120,000',
    posted: '2 days ago',
    description: 'We are looking for an experienced frontend developer to join our team. You\'ll be working with modern technologies like React, TypeScript, and GraphQL.',
    requirements: [
      '5+ years of experience with React',
      'Strong knowledge of JavaScript/TypeScript',
      'Experience with state management (Redux, Context API)',
      'Familiarity with RESTful APIs and GraphQL',
      'Experience with testing frameworks (Jest, React Testing Library)'
    ]
  },
  {
    id: 2,
    title: 'Backend Engineer',
    company: 'DataSystems',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$100,000 - $140,000',
    posted: '1 week ago',
    description: 'Join our backend team to build scalable and efficient server-side applications.',
    requirements: [
      'Experience with Node.js and Express',
      'Knowledge of databases (MongoDB, PostgreSQL)',
      'Understanding of microservices architecture',
      'Experience with Docker and Kubernetes',
      'Familiarity with cloud platforms (AWS, GCP)'
    ]
  },
  {
    id: 3,
    title: 'UX/UI Designer',
    company: 'DesignHub',
    location: 'San Francisco, CA',
    type: 'Contract',
    salary: '$70 - $90 per hour',
    posted: '3 days ago',
    description: 'We are seeking a talented UX/UI Designer to create amazing user experiences.',
    requirements: [
      '3+ years of experience in UX/UI design',
      'Proficiency in design tools (Figma, Sketch, Adobe XD)',
      'Strong portfolio of design projects',
      'Experience with user research and testing',
      'Knowledge of HTML/CSS is a plus'
    ]
  }
];

const JobCard = ({ job, onApply }) => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
      <div className="px-4 py-5 sm:px-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">{job.title}</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">{job.company} • {job.location}</p>
          </div>
          <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
            {job.type}
          </span>
        </div>
        <div className="mt-4">
          <p className="text-gray-700">{job.description}</p>
          <div className="mt-4">
            <h4 className="font-medium text-gray-900">Requirements:</h4>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              {job.requirements.slice(0, 3).map((req, i) => (
                <li key={i} className="text-sm">{req}</li>
              ))}
              {job.requirements.length > 3 && (
                <li className="text-sm text-indigo-600">+{job.requirements.length - 3} more</li>
              )}
            </ul>
          </div>
        </div>
        <div className="mt-5 flex items-center justify-between">
          <div className="text-sm text-gray-500">
            <span>Posted {job.posted}</span>
            <span className="mx-2">•</span>
            <span>{job.salary}</span>
          </div>
          {/* <button
            // onClick={() => onApply(job.id)}
            href="/jobapplicationform"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Apply Now
          </button> */}
          <Link
  to="/jobapplicationform"
  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
>
  Apply Now
</Link>
        </div>
      </div>
    </div>
  );
};

const JobDetail = ({ job, onBack, onApply }) => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <button
          onClick={onBack}
          className="text-indigo-600 hover:text-indigo-900 text-sm font-medium mb-4 inline-flex items-center"
        >
          <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Jobs
        </button>
        
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{job.title}</h2>
            <p className="mt-1 text-lg text-gray-600">{job.company} • {job.location}</p>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <span>{job.type}</span>
              <span className="mx-2">•</span>
              <span>{job.salary}</span>
              <span className="mx-2">•</span>
              <span>Posted {job.posted}</span>
            </div>
          </div>
          <button
            onClick={() => onApply(job.id)}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Apply for this position
          </button>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8">
          <h3 className="text-lg font-medium text-gray-900">Job Description</h3>
          <div className="mt-4 text-gray-700 space-y-4">
            <p>{job.description}</p>
            
            <div>
              <h4 className="font-medium text-gray-900">Responsibilities:</h4>
              <ul className="list-disc list-inside mt-2 space-y-1">
                {job.requirements.map((req, i) => (
                  <li key={i} className="text-gray-700">{req}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-gray-900">Requirements:</h4>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Bachelor's degree in Computer Science or related field</li>
                <li>{job.requirements.length}+ years of relevant experience</li>
                <li>Strong problem-solving skills</li>
                <li>Excellent communication and teamwork abilities</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-gray-900">Benefits:</h4>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Competitive salary and benefits package</li>
                <li>Flexible work hours and remote work options</li>
                <li>Health, dental, and vision insurance</li>
                <li>Professional development opportunities</li>
                <li>Generous paid time off and holidays</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 flex justify-end">
          <button
            onClick={() => onApply(job.id)}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Apply for this position
          </button>
        </div>
      </div>
    </div>
  );
};

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [jobTypeFilter, setJobTypeFilter] = useState('all');
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  useEffect(() => {
    // Simulate API call
    const fetchJobs = async () => {
      try {
        // In a real app, you would fetch data from your backend
        // const response = await fetch('/api/jobs');
        // const data = await response.json();
        
        // Using mock data for now
        setTimeout(() => {
          setJobs(mockJobs);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLocation = 
      !locationFilter || 
      job.location.toLowerCase().includes(locationFilter.toLowerCase());
    
    const matchesJobType = 
      jobTypeFilter === 'all' || 
      job.type.toLowerCase() === jobTypeFilter.toLowerCase();
    
    return matchesSearch && matchesLocation && matchesJobType;
  });

  const handleApply = (jobId) => {
    const job = jobs.find(j => j.id === jobId);
    setSelectedJob(job);
    setShowApplicationForm(true);
  };

  const handleBackToList = () => {
    setSelectedJob(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (showApplicationForm) {
    return (
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <JobApplicationForm job={selectedJob} onCancel={() => setShowApplicationForm(false)} />
      </div>
    );
  }

  if (selectedJob) {
    return (
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <JobDetail 
          job={selectedJob} 
          onBack={handleBackToList} 
          onApply={handleApply} 
        />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Find Your Next Job</h1>
        <p className="mt-2 text-lg text-gray-600">Browse through our latest job openings</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
              What
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="text"
                name="search"
                id="search"
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 pr-12 sm:text-sm border-gray-300 rounded-md h-10"
                placeholder="Job title, company, or keywords"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
              Where
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="location"
                id="location"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md h-10 px-4"
                placeholder="City, state, or remote"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="job-type" className="block text-sm font-medium text-gray-700 mb-1">
              Job Type
            </label>
            <select
              id="job-type"
              name="job-type"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md h-10"
              value={jobTypeFilter}
              onChange={(e) => setJobTypeFilter(e.target.value)}
            >
              <option value="all">All Types</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
              <option value="Temporary">Temporary</option>
            </select>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium text-gray-900">
            {filteredJobs.length} {filteredJobs.length === 1 ? 'Job' : 'Jobs'} Found
          </h2>
          <div className="flex items-center">
            <span className="text-sm text-gray-500 mr-2">Sort by:</span>
            <select className="rounded-md border-gray-300 py-1 pl-2 pr-8 text-base focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
              <option>Most Recent</option>
              <option>Relevance</option>
              <option>Salary: High to Low</option>
              <option>Salary: Low to High</option>
            </select>
          </div>
        </div>

        {filteredJobs.length > 0 ? (
          <div className="space-y-4">
            {filteredJobs.map(job => (
              <JobCard 
                key={job.id} 
                job={job} 
                onApply={handleApply} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white shadow rounded-lg">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">No jobs found</h3>
            <p className="mt-1 text-sm text-gray-500">
              We couldn't find any jobs matching your search. Try adjusting your filters.
            </p>
            <div className="mt-6">
              <button
                type="button"
                onClick={() => {
                  setSearchTerm('');
                  setLocationFilter('');
                  setJobTypeFilter('all');
                }}
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Clear all filters
              </button>
            </div>
          </div>
        )}

        {/* Pagination */}
        {filteredJobs.length > 0 && (
          <nav className="mt-8 flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
            <div className="-mt-px flex-1 flex">
              <a
                href="#"
                className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
              >
                <svg className="mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Previous
              </a>
            </div>
            <div className="hidden md:-mt-px md:flex">
              <a
                href="#"
                className="border-indigo-500 text-indigo-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                aria-current="page"
              >
                1
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
              >
                2
              </a>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
              >
                3
              </a>
              <span className="border-transparent text-gray-500 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
                ...
              </span>
              <a
                href="#"
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
              >
                8
              </a>
            </div>
            <div className="-mt-px flex-1 flex justify-end">
              <a
                href="#"
                className="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
              >
                Next
                <svg className="ml-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </nav>
        )}
      </div>

      {/* Job Alerts CTA */}
      <div className="bg-indigo-50 rounded-lg p-6 mb-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-medium text-gray-900">Get new jobs by email</h3>
            <p className="mt-1 text-sm text-gray-600">
              Create an alert and receive new job postings that match your search criteria.
            </p>
          </div>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create Job Alert
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
