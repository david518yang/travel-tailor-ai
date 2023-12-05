import React, { useState } from 'react'
import { saveDestination } from '../utils/destinationService'
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs'

const SaveButton = ({ location, uuid, onSave }) => {
  const [saved, setSaved] = useState(false)

  const handleSave = async () => {
    try {
      console.log(location)
      await saveDestination({ location, uuid })
      if (onSave) {
        onSave()
      }
      setSaved(true)
    } catch (error) {
      console.error('Error saving location:', error)
      alert('Failed to save location.')
      setSaved(false)
    }
  }

  return (
    <button
      onClick={handleSave}
      className="flex items-center bg-gray-400 hover:bg-blue-500 text-white text-sm font-bold py-2 px-4 my-2 rounded"
    >
      {saved ? <BsBookmarkFill className="mr-2" /> : <BsBookmark className="mr-2" />}
      Save Location
    </button>
  )
}

export default SaveButton
