import React from 'react'
import SignUpButton from '../components/SignUpButton'
import LogInButton from '../components/LogInButton'

export default function Splash() {
  return (
    <div className="splash-container relative">
      {/* TOP DIV */}
      <div className="relative w-full h-[55vh] bg-cover bg-center" style={{ backgroundImage: 'url(/uyuni.avif)' }}>
        <div className="absolute w-full" style={{ top: '60%' }}>
          <div className="grid grid-cols-12 gap-x-5">
            <div className="col-start-2 col-span-10">
              <h1 className="text-6xl font-merriweather" style={{ color: '#2E4564' }}>
                Discover the Unseen -<br />
                Your Next Journey
                <br />
                Begins Here
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* MIDDLE DIV */}
      <div
        style={{
          width: '100%',
          height: '10vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '267px',
          backgroundColor: '#BFD4F9'
        }}
      >
        <SignUpButton />
        <LogInButton />
      </div>

      {/* BOTTOM DIV */}
      <div style={{ width: '100%', height: '35vh' }}></div>
    </div>
  )
}
