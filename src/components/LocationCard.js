import React, { useState } from 'react'
import SaveButton from './SaveButton'
import UnsaveButton from './UnsaveButton'
import { FaChevronRight } from 'react-icons/fa'

const LocationCard = ({ location, uuid, onSave, recommendation, onSelect, onUnsaveSuccess }) => {
  const { name, imageUrls, description, backgroundInfo } = location
  const [isSaved, setIsSaved] = useState(false)

  const handleSave = async () => {
    try {
      await onSave()
      setIsSaved(true)
    } catch (error) {
      console.error('Error saving location:', error)
    }
  }

  const handleUnsave = async () => {
    try {
      await onSave()
      setIsSaved(false)
    } catch (error) {
      console.error('Error unsaving location:', error)
    }
  }

  return (
    <div className="m-4 bg-white shadow-lg border border-gray-100 rounded-xl w-full flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {imageUrls && imageUrls.length > 0 && (
        <div className="h-[20vh]">
          <img
            src={imageUrls[1]}
            alt={`Image of ${name}`}
            className="object-cover object-center w-full h-full rounded-t-lg"
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-md line-clamp-3">{description}</p>
        <div className="flex flex-auto space-x-5">
          {recommendation ? (
            <>
              {!isSaved ? (
                <SaveButton location={location} uuid={uuid} onSave={handleSave} />
              ) : (
                <p className="text-lg font-semibold text-green-500 flex items-center">
                  <span className="mr-2">✔️</span> Saved
                </p>
              )}
            </>
          ) : (
            <UnsaveButton location={location} uuid={uuid} onSave={handleUnsave} onUnsaveSuccess={onUnsaveSuccess} />
          )}
          <button
            onClick={() => onSelect()}
            className="flex items-center bg-gray-400 hover:bg-green-500 text-white text-sm font-bold py-2 px-4 my-2 rounded"
          >
            <p className="mr-2">See More</p>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default LocationCard
