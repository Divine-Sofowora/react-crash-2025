import React from 'react'
import jobs from '../jobs.json'
import JobListing from './JobListing'


const JobListings = ( {isHome = false}) => {
    // Determine which list of jobs to display based on the 'isHome' prop.
    // If isHome is true, show only the first 3 jobs (recent jobs).
    // If isHome is false (the default), show all jobs.
    const JobsListings = isHome ? jobs.slice(0,3) : jobs

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        {/* Section title, dynamically changes based on the 'isHome' prop */}
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Map over the selected job list (JobsListings) and render a JobListing component for each job */}
            { JobsListings.map((job) => (
                <JobListing 
                    key={job.id} // Unique key for list rendering optimization
                    job={ job } // Pass the individual job object as a prop
                />
            ))}
        </div>
      </div>
    </section>
  )
}

export default JobListings