import React from 'react'
import { useLocation } from 'react-router-dom'
import SignOutButton from '../components/SignOutButton'

export default function Home() {
  const location = useLocation()
  const recommendations = location.state?.parsedRecommendations

  return (
    <div>
      <h1>Home</h1>
      {recommendations ? (
        recommendations.destinations.map((destination, index) => (
          <div key={index}>
            <h2>{destination.location}</h2>
            <p>{destination.description}</p>
            <p>{destination['background-info']}</p>
            <br></br>
          </div>
        ))
      ) : (
        <p>No recommendations available.</p>
      )}
      <SignOutButton />
    </div>
  )
}
