import React from 'react'
import { useState } from 'react'

const App = () => {
  const [color, setcolor] = useState("pink");
  let arr = ['red', 'green', 'darkblue', 'orange', 'brown', 'black', 'coral']
  return (
    <div className='w-full h-screen' style={{backgroundColor: color}}>
      <div className="absolute bottom-14 px-5 flex justify-center inset-x-0">
        <div className='px-10 rounded-xl flex justify-center flex-wrap gap-4 py-3 bg-white'>
          {arr.map((color) => {
            return  <button onClick={() => setcolor(color)} className='rounded-3xl outline-none text-white font-bold px-5 py-2' style={{backgroundColor: color}}>{color}</button>
          })}
        </div>
      </div>
    </div>
  )
}

export default App