import React from 'react'
import SaveButton from './SaveButton'
import UnsaveButton from './UnsaveButton'
import { FaChevronRight } from 'react-icons/fa'

const LocationCard = ({ location, uuid, onSave, recommendation, onSelect, onUnsaveSuccess }) => {
  const { name, imageUrls, description, backgroundInfo } = location

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
        {/* {backgroundInfo && <p className="text-sm">{backgroundInfo}</p>} */}
        <div className="flex flex-auto space-x-5">
          {recommendation ? (
            <SaveButton location={location} uuid={uuid} onSave={onSave} />
          ) : (
            <UnsaveButton location={location} uuid={uuid} onSave={onSave} onUnsaveSuccess={onUnsaveSuccess} />
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
