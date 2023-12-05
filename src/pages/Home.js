import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import SignOutButton from '../components/SignOutButton'
import LocationCard from '../components/LocationCard'
import fetchImages from '../utils/unsplash'
import { fetchDestinations } from '../utils/destinationService'
import EditPreferencesButton from '../components/EditPreferencesButton'
import DashboardButton from '../components/DashboardButton'
import ExpandedLocationCard from '../components/ExpandedLocationCard'

export default function Home() {
  const location = useLocation()
  const rec = location.state?.recommendations
  const uuid = location.state?.uuid
  const fetchBool = false
  const navigate = useNavigate()
  useEffect(() => {
    if (!uuid) {
      alert('UUID not found, please sign up or log in before accessing the homepage')
      navigate('/')
    }
  }, [uuid, navigate])

  // console.log(uuid)
  const displayName = location.state?.displayName
  const [recommendations, setRecommendations] = useState(
    typeof location.state?.recommendations !== 'undefined' ? rec : []
  )
  const [last3Destinations, setLast3Destinations] = useState([])
  const [selectedLocation, setSelectedLocation] = useState(null)

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
  }, [fetchBool])

  useEffect(() => {
    fetchAndUpdateLast3Destinations()
  }, [uuid])

  if (!uuid) {
    return <div>Loading or invalid access...</div>
  }

  const fetchAndUpdateLast3Destinations = async () => {
    const destinations = await fetchDestinations(uuid, 'top3')
    setLast3Destinations(destinations)
  }

  return (
    <div className="grid grid-cols-8 gap-2">
      <nav className="flex flex-col col-span-1 space-between h-screen bg-gray-800 text-white">
        <div className="text-3xl font-bold m-4">Travel Tailor</div>
        <div className="flex flex-col m-4 space-y-2">
          <DashboardButton uuid={uuid} displayName={displayName} recommendations={rec} />
          <EditPreferencesButton uuid={uuid} displayName={displayName} />
          <button className="py-2 px-4 bg-blue-500 rounded hover:bg-blue-700">Saved Destinations</button>
        </div>
        <div className="flex-grow"></div>
        <SignOutButton className="m-4" />
      </nav>

      <div className="col-span-7 p-4 h-[100vh]">
        <h1 className="text-3xl font-bold mb-4">Welcome back {displayName}</h1>

        <div className="flex flex-col ">
          <div className="flex items-end">
            <h2 className="text-2xl font-bold ">Recommended for You</h2>{' '}
          </div>

          <div className="flex flex-auto ">
            {!(recommendations.length === 0) ? (
              recommendations.map((location, index) => (
                <LocationCard
                  key={index}
                  location={location}
                  uuid={uuid}
                  onSave={fetchAndUpdateLast3Destinations}
                  recommendation={true}
                  onSelect={() => setSelectedLocation(location)}
                />
              ))
            ) : (
              <>No recommended destinations</>
            )}
            {}
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex items-end">
            <h2 className="text-2xl font-bold">Recently Saved</h2>
          </div>

          <div className="flex flex-auto">
            {!(last3Destinations.length === 0) ? (
              last3Destinations.map((location, index) => (
                <LocationCard
                  key={index}
                  location={location}
                  uuid={uuid}
                  recommendation={false}
                  onSelect={() => setSelectedLocation(location)}
                />
              ))
            ) : (
              <>No recently saved destinations</>
            )}
          </div>
        </div>
        {selectedLocation && (
          <ExpandedLocationCard
            key={Date.now()}
            location={selectedLocation}
            onClose={() => setSelectedLocation(null)}
          />
        )}
      </div>
    </div>
  )
}
