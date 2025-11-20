import React from 'react'
import { useState, useEffect } from 'react' // Import useState and useEffect hooks
import JobListing from './JobListing'
import Spinner from './Spinner' // Import the Spinner component for loading state


const JobListings = ( {isHome = false}) => {
    // 1. STATE: State to hold the fetched job data (initialized as an empty array)
    const [jobs, setJobs] = useState([])
    
    // 2. STATE: State to track the loading status (initialized to true, meaning data fetching is starting)
    const [loading, setLoading] = useState(true)

    // 3. EFFECT: useEffect hook runs code after the component renders
    useEffect(() => { 
      const fetchJobs = async () => {
        const apiUrl = isHome ? 'http://localhost:8000/jobs?_limit=3' : 'http://localhost:8000/jobs'
        try{
          // Fetch data from the specified API endpoint
          const res = await fetch(apiUrl)
          const data = await res.json();
          
          // Update the 'jobs' state with the fetched data
          setJobs(data)
        }catch(error){
          // Log any errors that occur during the fetch process
          console.log('Error fetching data', error)
        } finally{
          // Set loading to false regardless of success or failure
          // This ensures the spinner disappears after the attempt is finished
          setLoading(false)
        }
        
      }
      fetchJobs();
    }, [])

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        {/* Section title, dynamically changes based on the 'isHome' prop */}
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>

        {/* CONDITIONAL RENDERING: Check the loading state */}
        {loading ? (
            // If 'loading' is true, display the Spinner component
            <Spinner loading ={loading}/>
        ) : (
            // If 'loading' is false (data is fetched), display the job grid
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                { jobs.map((job) => (
                    <JobListing 
                        key={job.id} 
                        job={ job } 
                    />
                ))}
            </div>
        )}
            
      </div>
    </section>
  )
}

export default JobListings