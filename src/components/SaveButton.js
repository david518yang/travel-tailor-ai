import React from 'react'
import { saveDestination } from '../utils/destinationService'

const SaveButton = ({ location, uuid, onSave }) => {
  console.log(uuid)
  //   const { name, imageUrls, description, backgroundInfo } = location
  const handleSave = async () => {
    try {
      console.log(location)
      await saveDestination({ location, uuid })
      alert('Location saved successfully!')
      if (onSave) {
        onSave()
      }
    } catch (error) {
      console.error('Error saving location:', error)
      alert('Failed to save location.')
    }
  }

  return <button onClick={handleSave}>Save Location</button>
}

export default SaveButton
