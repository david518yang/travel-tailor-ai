import React from 'react'
import SaveButton from './SaveButton'
import UnsaveButton from './UnsaveButton'

const LocationCard = ({ location, uuid, onSave, recommendation }) => {
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
        {recommendation ? (
          <SaveButton location={location} uuid={uuid} onSave={onSave} />
        ) : (
          <UnsaveButton location={location} uuid={uuid} onSave={onSave} />
        )}
      </div>
    </div>
  )
}

export default LocationCard
