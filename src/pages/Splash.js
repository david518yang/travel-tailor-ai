import React from 'react'
import SignUpButton from '../components/SignUpButton'
import LogInButton from '../components/LogInButton'

export default function Splash() {
  return (
    <div className="splash-container">
      <h1>Discover the Unseen - Your Next Journey Begins Here</h1>
      <SignUpButton />
      <LogInButton />
    </div>
  )
}
