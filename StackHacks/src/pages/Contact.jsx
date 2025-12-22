import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1 className='text-center my-10'>Leave a message for StackHacks, and we'll be in touch!</h1>
      <div className='flex flex-col mx-auto max-w-lg gap-2'>
        <input name='email'  type='email' placeholder= ' Enter email'/>
        <textarea name='message' placeholder='Enter your message' rows='10'/> 
        <button className='max-w-20'>Submit</button>
      </div>
    </div>
  )
}

export default Contact