import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import SignOutButton from '../components/SignOutButton'
import LocationCard from '../components/LocationCard'
import fetchImages from '../utils/unsplash'

export default function Home() {
  const location = useLocation()
  const rec = location.state?.parsedRecommendations
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
      <nav class="flex flex-col col-span-1 justify-between h-screen">
        <div class="text-lg font-bold m-2">Travel Tailor</div>
        <div class="align-center">
          <SignOutButton />
        </div>
      </nav>

      <div className="col-span-7">
        <div className="h-20 flex items-end">
          <h2 className="text-2xl font-bold">Recommended for You</h2>
        </div>

        <div className="flex flex-auto">
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
