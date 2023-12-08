import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { fetchDestinations } from '../utils/destinationService'
import DashboardButton from '../components/DashboardButton'
import EditPreferencesButton from '../components/EditPreferencesButton'
import LocationCard from '../components/LocationCard'
import SignOutButton from '../components/SignOutButton'
import ExpandedLocationCard from '../components/ExpandedLocationCard'

const SavedDestinations = () => {
  const location = useLocation()
  const uuid = location.state?.uuid
  const displayName = location.state?.displayName

  const fetchAndUpdateSavedDestinations = async () => {
    const destinations = await fetchDestinations(uuid, 'all')
    setSavedDestinations(destinations)
  }

  const [savedDestinations, setSavedDestinations] = useState([])
  const [selectedLocation, setSelectedLocation] = useState(null)

  useEffect(() => {
    fetchAndUpdateSavedDestinations()
  }, [uuid])

  return (
    <div className="grid grid-cols-8 gap-2 min-h-screen">
      <nav className="flex flex-col col-span-1 space-between bg-gray-800 text-white">
        <div className="text-3xl font-bold m-4">Travel Tailor</div>
        <div className="flex flex-col m-4 space-y-2">
          <DashboardButton uuid={uuid} displayName={displayName} />
          <EditPreferencesButton uuid={uuid} displayName={displayName} />
          <button className="py-2 px-4 bg-blue-500 rounded hover:bg-blue-700">Saved Destinations</button>
        </div>
        <div className="flex-grow"></div>
        <SignOutButton className="m-4" />
      </nav>

      <div className="col-span-7 p-4">
        <h1 className="text-3xl font-bold mb-4">Saved Destinations</h1>

        <div className="grid grid-cols-3 gap-4 flex-auto">
          {!(savedDestinations.length === 0) ? (
            savedDestinations.map((location, index) => (
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

export default SavedDestinations
