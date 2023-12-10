import React, { useState } from 'react'
import { unsaveDestination } from '../utils/destinationService'
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs'

const UnsaveButton = ({ location, uuid, onSave, onUnsaveSuccess }) => {
  const [saved, setSaved] = useState(false)

  const handleUnsave = async () => {
    try {
      console.log(location)
      await unsaveDestination({ location, uuid })
      if (onSave) {
        onSave()
      }
      if (onUnsaveSuccess) {
        onUnsaveSuccess()
      }
      setSaved(false)
    } catch (error) {
      console.error('Error unsaving location:', error)
      alert('Failed to unsave location.')
      setSaved(true)
    }
  }

  return (
    <button
      onClick={handleUnsave}
      className="flex items-center bg-gray-400 hover:bg-red-500 text-white text-sm font-bold py-2 px-4 my-2 rounded"
    >
      {saved ? <BsBookmarkFill className="mr-2" /> : <BsBookmark className="mr-2" />}
      Unsave Location
    </button>
  )
}

export default UnsaveButton
