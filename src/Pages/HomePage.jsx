import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/joblistings'
import ViewAlljobs from '../components/viewAlljobs'


const HomaPage = () => {
  return (
    <>
      <Hero/>
      <HomeCards/>
      <JobListings/>
      <ViewAlljobs/>
    </>
  )
}

export default HomaPage