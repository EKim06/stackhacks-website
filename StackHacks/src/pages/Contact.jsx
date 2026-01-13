import React from 'react'

const Contact = () => {
  return (
    <div className="pt-4 px-4 flex justify-center">
      <div className="min-h-[calc(80vh)] w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        
        {/* Left: Copy */}
        <div className="text-center md:text-left">
          <h1 className="mb-4">
            Any questions for us?
          </h1>
          <p className="text-secondary">
            Leave a message for StackHacks and our team will get back to you as soon as possible. Don't forget to introduce yourself in your message!
          </p>
        </div>

        {/* Right: Form */}
        <form className="flex flex-col gap-4">
          <div className='grid grid-cols-2 gap-4'>
            <input
              className="input"
              name="name"
              type="text"
              placeholder="Enter your name"
            />
            <input
              className="input"
              name="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <textarea
            className="input resize-none"
            name="message"
            placeholder="Enter your message"
            rows="6"
          />

          <button className="btn btn-primary self-start">
            Submit
          </button>
        </form>

      </div>
    </div>
  )
}

export default Contact
