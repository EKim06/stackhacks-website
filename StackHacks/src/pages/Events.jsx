import React from 'react'
import Card from '../components/Card'
import { events } from '../data/events'

const Events = () => {
  return (
    <div>
      <h1 className='text-center py-5'>Events</h1>
      
      <div className='flex flex-col max-w-2xl mx-auto gap-2'>
        {events.map(event => (
          <Card title={event.title} date={event.date} image={event.image}> <p>{event.description}</p> </Card>
        ))}
      </div>
      
    </div>
  )
}

export default Events