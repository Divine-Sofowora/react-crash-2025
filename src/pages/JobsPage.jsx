import React from 'react'
import JobListings from '../components/JobListings'

const JobsPage = ({ isHome = false }) => {
   
  return (
    <section className='bg-blue-50 px4 py6'>
      <JobListings/>
    </section>
  )
}

export default JobsPage
