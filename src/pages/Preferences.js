import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PreferenceQuestion from '../components/PreferenceQuestion'
import GenerateRecommendationsButton from '../components/GenerateRecommendationsButton'
import { getRecommendations } from '../utils/openai'

export default function Preferences() {
  const [preferences, setPreferences] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const updatePreferences = (question, choice) => {
    setPreferences(prevPreferences => ({
      ...prevPreferences,
      [question]: [...(prevPreferences[question] || []), choice]
    }))
    console.log(preferences)
  }

  const handleGenerateRecommendations = async () => {
    setIsLoading(true)
    try {
      const recommendations = await getRecommendations(preferences)
      const parsedRecommendations = JSON.parse(recommendations)
      console.log('Received recommendations:', parsedRecommendations.destinations)
      navigate('/home', { state: { parsedRecommendations } })
    } catch (error) {
      console.error('Error getting recommendations:', error)
    }
    setIsLoading(false)
  }

  return (
    <div className="grid grid-cols-12 gap-5 px-5 py-20 bg-sky-200">
      <div className="col-start-2 col-end-12 bg-amber-100 p-10 shadow-lg rounded-3xl">
        <h1 className="text-4xl mb-6 text-center font-lato">Welcome to Your Personalized Travel Experience</h1>
        <p className="mb-10 text-center font-lato">
          Let's tailor your next adventure! Share a few preferences, and we'll curate destinations just for you. <br />
          Your journey to unforgettable places begins here.
        </p>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-start-2 col-end-12 bg-gray-200 p-5 rounded-3xl">
            <PreferenceQuestion
              question="What are you looking to achieve on your trip?"
              answerChoices={[
                '🏖️ Beach Relaxation',
                '🍽️ Culinary Delights',
                '🎪 Festivities & Events',
                '🏺 Cultural Experiences',
                '🌲 Nature Escape',
                '🌟 Luxury Retreat',
                '🌆 Urban Discovery'
              ]}
              onSelectionChange={updatePreferences}
            />
          </div>
          <div className="col-start-2 col-end-12 bg-gray-200 p-5 rounded-3xl">
            <PreferenceQuestion
              question="Which climate zones do you love for vacationing?"
              answerChoices={[
                '🏜️ Desert',
                '❄️ Arctic',
                '🌦️ Temperate',
                '🌴 Tropical',
                '☀️ Sunny',
                '🏔️ Alpine',
                '🌁️ Foggy',
                '💧 Humid',
                '🌊 Marine',
                '🌧️ Rainy'
              ]}
              onSelectionChange={updatePreferences}
            />
          </div>
          <div className="col-start-2 col-end-12 bg-gray-200 p-5 rounded-3xl">
            <PreferenceQuestion
              question="What activities do you seek out while traveling?"
              answerChoices={[
                '🏯 Sightseeing',
                '🐘 Wildlife Encounters',
                '🤿 Snorkeling',
                '🍽️ Gourmet Dining',
                '🥾 Hiking',
                '🪂 Thrill-Seeking',
                '🎶 Live Performances',
                '📸 Photography',
                '🛍️ Shopping'
              ]}
              onSelectionChange={updatePreferences}
            />
          </div>
          <div className="col-start-2 col-end-12 bg-gray-200 p-5 rounded-3xl">
            <PreferenceQuestion
              question="Which cultural aspects are you most interested in exploring?"
              answerChoices={[
                '🎭 Performing Arts',
                '🖼️ Art Galleries',
                '🏰 Architecture',
                '🎶 Music',
                '📜 History',
                '💃 Dance',
                '🍜 Cuisine',
                '🎉 Festivals',
                '🏛️ Museums'
              ]}
              onSelectionChange={updatePreferences}
            />
          </div>
          <div className="col-start-2 col-end-12 bg-gray-200 p-5 rounded-3xl">
            <PreferenceQuestion
              question="What dining experiences do you prefer while on vacation?"
              answerChoices={[
                '🍽️ Local Restaurants',
                '🌟 Gourmet Dining',
                '🛒 Marketplaces',
                '🍢 Street Food',
                '🥗 Healthy Options',
                '☕ Cafés and Bakeries',
                '🍳 Cook-Your-Own',
                '🎪 Food Festivals'
              ]}
              onSelectionChange={updatePreferences}
            />
          </div>
          <div className="col-start-2 col-end-12 bg-gray-200 p-5 rounded-3xl">
            <PreferenceQuestion
              question="How do you prefer to get around during your travels?"
              answerChoices={[
                '🚆 Trains',
                '🚗 Driving',
                '🚌 Public Transit',
                '🚖 Taxi',
                '🛥️ Ferries/Boats',
                '🛴 Electric Scooters',
                '🚲 Biking',
                '🚶 Walking'
              ]}
              onSelectionChange={updatePreferences}
            />
          </div>
          <div className="col-start-2 col-end-12 bg-gray-200 p-5 rounded-3xl">
            <PreferenceQuestion
              question="What's your spending style for travel accommodations and activities?"
              answerChoices={['💵 Budget', '🏨 Comfort', '💳 Mid-Range', '🍸 Upscale', '🛎️ Deluxe', '💎 Exclusive']}
              onSelectionChange={updatePreferences}
            />
          </div>
          <div className="col-start-2 col-end-12 bg-gray-200 p-5 rounded-3xl">
            <PreferenceQuestion
              question="For your upcoming travels, how do you envision your ideal travel party?"
              answerChoices={['👤 Solo', '👥 Couple', '🧑‍🤝‍🧑 Small Group', '👨‍👩‍👧‍👦 Family', '🚌 Large Tour Group']}
              onSelectionChange={updatePreferences}
            />
          </div>
        </div>
        <div className="flex items-center justify-center space-x-2 my-5 h-12">
          {isLoading ? (
            <>
              <div className="w-8 h-8 border-4 border-blue-500 border-solid rounded-full spinner"></div>
              <span>Generating recommendations...</span>
            </>
          ) : (
            <GenerateRecommendationsButton onGenerate={handleGenerateRecommendations} />
          )}
        </div>
      </div>
    </div>
  )
}
