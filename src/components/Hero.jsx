import React from 'react'

const Hero = () => {
  return (
    <section className='flex flex-col'>
        <img src="photo-grid.png" alt="grid" className="w-96 max-w-full self-center" />
            <h1 className='my-6 text-4xl font-bold self-center'>Online Experiences</h1>
            <p className='-mt-2 self-center max-w-sm text-center'>Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
    </section>
  )
}

export default Hero
