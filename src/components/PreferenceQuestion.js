import React from 'react'

function PreferenceQuestion({ question, answerChoices, preferences, onCheckboxChange }) {
  var preference
  if (question === 'What are you looking to achieve on your trip?') {
    preference = 'Travel Goals: '
  } else if (question === 'Which climate zones do you love for vacationing?') {
    preference = 'Preferred Climates: '
  } else if (question === 'What activities do you seek out while traveling?') {
    preference = 'Preferred Activities: '
  } else if (question === 'Which cultural aspects are you most interested in exploring?') {
    preference = 'Cultural Interests: '
  } else if (question === 'What dining experiences do you prefer while on vacation?') {
    preference = 'Preferred Dining Experiences: '
  } else if (question === 'How do you prefer to get around during your travels?') {
    preference = 'Preferred transportation methods: '
  } else if (question === "What's your spending style for travel accommodations and activities?") {
    preference = 'spending style: '
  } else if (question === 'For your upcoming travels, how do you envision your ideal travel party?') {
    preference = 'ideal travel party size: '
  }

  return (
    <div className="p-3 space-y-5 -my-3">
      <h3 className="font-bold">{question}</h3>
      <div className="flex flex-wrap -mx-2">
        {answerChoices.map((choice, index) => (
          <div key={choice} className="flex items-center mb-2 px-2">
            <input
              type="checkbox"
              id={`choice-${index}`}
              className="mr-2"
              checked={preferences[preference]?.includes(choice) ?? false}
              onChange={e => {
                onCheckboxChange(preference, choice, e.target.checked)
              }}
            />
            <label htmlFor={`choice-${index}`}>{choice}</label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PreferenceQuestion
