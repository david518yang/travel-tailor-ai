import OpenAI from 'openai'
const apiKey = process.env.REACT_APP_OPENAI_API_KEY
const openai = new OpenAI({ apiKey: apiKey, dangerouslyAllowBrowser: true })

async function chatCompletion(prompt) {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content:
          "You are a helpful travel destination discovery assistant designed to find fitting destinations for a user based on their preferences. Output in JSON with keys 'location', 'description', 'background-info'."
      },
      { role: 'user', content: prompt }
    ],
    model: 'gpt-3.5-turbo-1106',
    response_format: { type: 'json_object' }
  })
  //   console.log(completion.choices[0])
  return completion.choices[0]
}

function constructPrompt(preferences) {
  var preferenceString = ''
  Object.entries(preferences).forEach(([question, choices]) => {
    if (question === 'What are you looking to achieve on your trip?') {
      preferenceString += 'Travel Goals: '
      choices.forEach(choice => (preferenceString += `${choice.slice(3)}, `))
      preferenceString += '. '
    } else if (question === 'Which climate zones do you love for vacationing?') {
      preferenceString += 'Preferred Climates: '
      choices.forEach(choice => (preferenceString += `${choice.slice(3)}, `))
      preferenceString += '. '
    } else if (question === 'What activities do you seek out while traveling?') {
      preferenceString += 'Preferred Activities: '
      choices.forEach(choice => (preferenceString += `${choice.slice(3)}, `))
      preferenceString += '. '
    } else if (question === 'Which cultural aspects are you most interested in exploring?') {
      preferenceString += 'Cultural Interests: '
      choices.forEach(choice => (preferenceString += `${choice.slice(3)}, `))
      preferenceString += '. '
    } else if (question === 'What dining experiences do you prefer while on vacation?') {
      preferenceString += 'Preferred Dining Experiences: '
      choices.forEach(choice => (preferenceString += `${choice.slice(3)}, `))
      preferenceString += '. '
    } else if (question === 'How do you prefer to get around during your travels?') {
      preferenceString += 'Preferred transportation methods: '
      choices.forEach(choice => (preferenceString += `${choice.slice(3)}, `))
      preferenceString += '. '
    } else if (question === "What's your spending style for travel accommodations and activities?") {
      preferenceString += 'spending style: '
      choices.forEach(choice => (preferenceString += `${choice.slice(3)}, `))
      preferenceString += '. '
    } else if (question === 'For your upcoming travels, how do you envision your ideal travel party?') {
      preferenceString += 'ideal travel party size: '
      choices.forEach(choice => (preferenceString += `${choice.slice(3)}, `))
      preferenceString += '. '
    }
  })
  return preferenceString
}

const getRecommendations = async preferences => {
  const prompt =
    'Generate 3 destinations, along with a brief description and background information with the following user preferences: ' +
    constructPrompt(preferences)
  try {
    const response = await chatCompletion(prompt)

    // console.log('Recommendations:', response.message.content.destinations)

    return response.message.content
  } catch (error) {
    console.error('Error in getRecommendations:', error)
    throw error
  }
}

export { getRecommendations }
