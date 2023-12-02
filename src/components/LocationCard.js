import React from 'react'

const LocationCard = ({ location }) => {
  const { name, imageUrls, description, backgroundInfo } = location

  return (
    <div className="m-4 border border-gray-300 rounded-lg w-full flex flex-col">
      {imageUrls && imageUrls.length > 0 && (
        <div style={{ height: '350px' }}>
          <img
            src={imageUrls[1]}
            alt={`Image of ${name}`}
            className="object-cover object-center w-full h-full rounded-t-lg"
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-md">{description}</p>
        {backgroundInfo && <p className="text-sm">{backgroundInfo}</p>}
      </div>
    </div>
  )
}

export default LocationCard
