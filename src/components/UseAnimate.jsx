import { useAnimate, useInView } from 'framer-motion'
import React, { useEffect, useRef } from 'react'

const UseAnimate = () => {

const [scope, animate] = useAnimate()
const ref  = useRef()

const isInView = useInView(ref)

const handleAnimate = async() => {
   await animate('#target', {x : 150 }, {duration:.5})
   await animate('#target', {y:150}, {duration:.5})
   await animate('#target', {borderRadius: '50%'}, {duration:.5})
   await animate('#target', {x:-150}, {duration:.5})
   await animate('#target', {y:0}, {duration: .5})
   await animate('#target', {x : 150 }, {duration:.5}, {width: '500px'})

}

useEffect(() => {
  if(isInView){
    handleAnimate()
  }
  
}, [isInView])

  return (
    <div className='my-40 grid place-items-center' ref={scope}>
      <div ref={ref} id='target' className=' h-24 w-24 bg-violet-950 '>
      </div>

      <button onClick={handleAnimate} className='mt-4 text-white rounded-lg px-6 py-3 bg-violet-950'>Animate me</button>
    </div>
  )
}

export default UseAnimate
