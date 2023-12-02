import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import SignOutButton from '../components/SignOutButton'
import LocationCard from '../components/LocationCard'
import fetchImages from '../utils/unsplash'

export default function Home() {
  const location = useLocation()
  const rec = location.state?.parsedRecommendations
  const uuid = location.state?.uuid
  const displayName = location.state?.displayName
  const [recommendations, setRecommendations] = useState(rec.destinations)

  // const [recommendedLocations, setRecommendedLocations] = useState([
  //   {
  //     name: 'Paris',
  //     imageUrls: [],
  //     description: 'The City of Light glows with art, culture, and history.',
  //     backgroundInfo: 'Additional background info about Paris.'
  //   },
  //   {
  //     name: 'Bali',
  //     imageUrls: [],
  //     description: 'A tropical paradise with lush landscapes and rich traditions.',
  //     backgroundInfo: 'Additional background info about Bali.'
  //   },
  //   {
  //     name: 'Tokyo',
  //     imageUrls: [],
  //     description: 'A bustling metropolis blending the ultra-modern with the traditional.',
  //     backgroundInfo: 'Additional background info about Tokyo.'
  //   }
  // ])

  useEffect(() => {
    const fetchAllImages = async () => {
      const updatedLocations = await Promise.all(
        recommendations.map(async location => {
          const imageUrls = await fetchImages(location.name)
          return { ...location, imageUrls }
        })
      )
      setRecommendations(updatedLocations)
    }

    fetchAllImages()
  }, [])

  return (
    <div className="grid grid-cols-8 gap-2">
      <nav className="flex flex-col col-span-1 space-between h-screen bg-gray-800 text-white">
        <div className="text-3xl font-bold m-4">Travel Tailor</div>
        <div className="flex flex-col m-4 space-y-2">
          <button className="py-2 px-4 bg-blue-500 rounded hover:bg-blue-700">Dashboard</button>
          <button className="py-2 px-4 bg-blue-500 rounded hover:bg-blue-700">Edit Preferences</button>
          <button className="py-2 px-4 bg-blue-500 rounded hover:bg-blue-700">Settings</button>
        </div>
        <div className="flex-grow"></div>
        <SignOutButton className="m-4" />
      </nav>

      <div className="col-span-7 p-4 h-[100vh]">
        <h1 className="text-3xl font-bold mb-4">Welcome back {displayName}</h1>

        <div className="h-20 flex items-end">
          <h2 className="text-2xl font-bold">Recommended for You</h2>
        </div>

        <div className="flex flex-auto ">
          {recommendations.map((location, index) => (
            <LocationCard key={index} location={location} />
          ))}
        </div>

        <div className="h-20 flex items-end">
          <h2 className="text-2xl font-bold">Recently Saved</h2>
        </div>

        <div className="flex flex-auto">
          {recommendations.map((location, index) => (
            <LocationCard key={index} location={location} />
          ))}
        </div>
      </div>
    </div>
  )
}
