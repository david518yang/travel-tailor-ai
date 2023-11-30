import React from 'react'

const GenerateRecommendationsButton = ({ onClick }) => {
  return (
    <div className="mt-10 flex justify-center">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        onClick={onClick}
      >
        Generate Recommendations
      </button>
    </div>
  )
}

export default GenerateRecommendationsButton
