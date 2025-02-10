import { useState } from 'react'
import './App.css'
import background from './assets/bg-intro-desktop.png'

function App() {
  return (
    <div className="w-full h-screen bg-[var(--Red)] flex items-center justify-center relative"
      style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Content on top of the image */}
      <div className="w-full md:w-[1440px] h-full md:h-auto flex flex-col md:flex-row overflow-hidden items-center">
        <div className="w-full md:w-[50%] flex flex-col text-white">
          <h1 className="text-5xl font-bold leading-16 pl-[170px] mb-[2.5rem]">Learn to code by watching others</h1>
          <p className='font-medium leading-6 pl-[170px]'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great,
            but understanding how developers think is invaluable.</p>
        </div>
        <div className="w-full md:w-[50%] flex flex-col px-[72px] py-[72px]">
          <div className='bg-[var(--Blue)] rounded-lg py-[1rem] text-center text-white mb-5 shadow-[0_5px_0_rgba(0,0,0,0.2)]'>
            Try it free 7 days then $20/mo. thereafter
          </div>
          <div className='bg-white rounded-lg py-[3rem] px-[2rem] text-black shadow-[0_5px_0_rgba(0,0,0,0.2)]'>
            <form className="flex flex-col gap-6">
              <input type="text" placeholder="First Name" className="border border-gray-300 rounded-md py-4 px-4 focus:outline-none focus:ring-2 focus:ring-[var(--Blue)]" />
              <input type="text" placeholder="Last Name" className="border border-gray-300 rounded-md py-4 px-4 focus:outline-none focus:ring-2 focus:ring-[var(--Blue)]" />
              <input type="email" placeholder="Email" className="border border-gray-300 rounded-md py-4 px-4 focus:outline-none focus:ring-2 focus:ring-[var(--Blue)]" />
              <input type="password" placeholder="Password" className="border border-gray-300 rounded-md py-4 px-4 focus:outline-none focus:ring-2 focus:ring-[var(--Blue)]" />
              <button className="bg-[var(--Green)] text-white py-[1rem] rounded-md hover:bg-opacity-80 uppercase 
                   border border-[var(--Green)] border-b-2">
                Claim your free trial
              </button>
            </form>
            <p className="text-center text-[var(--Grayish-Blue)] mt-2 text-xs">By clicking the button, you are agreeing to our <span className='font-bold text-[var(--Red)] '>Terms and Services</span></p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App
