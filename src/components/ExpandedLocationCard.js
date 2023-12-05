const ExpandedLocationCard = ({ location, onClose }) => {
  if (!location) return null

  const handleBackgroundClick = () => {
    onClose()
  }

  const stopPropagation = e => {
    e.stopPropagation()
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4"
      onClick={handleBackgroundClick}
    >
      <div
        className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all w-11/12 md:max-w-4xl h-auto"
        onClick={stopPropagation}
      >
        <div className="p-6">
          {location.imageUrls && location.imageUrls.length > 0 && (
            <div className="flex overflow-x-auto whitespace-nowrap scrollbar-hide mb-4">
              {location.imageUrls.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`Location view ${index + 1}`}
                  className="h-[40vh] w-auto object-cover rounded-md mr-4"
                />
              ))}
            </div>
          )}

          <h2 className="text-3xl font-bold mb-2">{location.name}</h2>
          <p className="text-lg mb-2">{location.description}</p>
          <p className="text-lg">{location.backgroundInfo}</p>
        </div>
        <button onClick={onClose} className="absolute top-2 right-2 text-lg p-2">
          &times;
        </button>
      </div>
    </div>
  )
}

export default ExpandedLocationCard
