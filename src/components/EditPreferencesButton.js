import React from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchPreferences } from '../utils/preferenceService'

export default function EditPreferencesButton({ uuid, displayName }) {
  const navigate = useNavigate()
  const handleEditPreferences = async () => {
    try {
      const pref = await fetchPreferences(uuid)
      //   console.log('fetched preferences: ' + preferences)
      //   Object.entries(preferences).map(([key, value]) => {
      //     console.log(`Preference: ${key}, Selections: ${value}`)
      //   })
      navigate('/preferences', { state: { uuid, displayName, pref } })
    } catch (error) {
      console.error('Error during editing preferences', error)
    }
  }

  return (
    <button className="py-2 px-4 bg-blue-500 rounded hover:bg-blue-700" onClick={handleEditPreferences}>
      Edit Preferences
    </button>
  )
}
