import React from 'react'
import TicketBookingForm from '../components/TicketBookingForm'

const Home = ({isLoggedIn}) => {
  return (
    <div className='flex justify-center items-center text-white text-3xl h-full'>
      
      <TicketBookingForm/>
    </div>
    
  )
}

export default Home
