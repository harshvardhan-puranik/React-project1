import React from 'react'
import Video from './Video'

const Homeherotext = () => {
  return (
    <div className='font-[font1] pt-5  text-center'>
        <div className='text-[9.5vw] flex items-center justify-center uppercase leading-[8vw]'>The spark for</div>
        <div className='text-[9.5vw] flex items-center justify-center uppercase leading-[8vw]'>
            all
            <div className='h-[7vw] w-[16vw] -mt-5 rounded-full overflow-hidden'>
                <Video/>
            </div>
            things
        </div>
        <div className='text-[9.5vw] flex items-center justify-center uppercase leading-[8vw]'>creative</div>
    </div>
  )
}

export default Homeherotext