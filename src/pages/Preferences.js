import React from 'react'
import PreferenceQuestion from '../components/PreferenceQuestion'

export default function Preferences() {
  return (
    <div>
      <h1>Enter Preferences</h1>
      <PreferenceQuestion
        question="What are you looking to achieve on your trip?"
        answerChoices={[
          'Beach Relaxation',
          'Culinary Delights',
          'Festivities & Events',
          'Cultural Experiences',
          'Nature Escape',
          'Luxury Retreat',
          'Urban Discovery',
          'Other'
        ]}
      />
    </div>
  )
}
