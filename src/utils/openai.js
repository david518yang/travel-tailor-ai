import OpenAI from 'openai'
const apiKey = process.env.REACT_APP_OPENAI_API_KEY
const openai = new OpenAI({ apiKey: apiKey, dangerouslyAllowBrowser: true })

async function chatCompletion(prompt) {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content:
          "You are a helpful travel destination discovery assistant designed to find fitting destinations for a user based on their preferences. Each destination should include keys 'name' which should be the city and country of the location, 'description' which should be a 4 sentence description of the location including why it aligns with the user's preferences, and 'backgroundInfo' which should be logistic information or background information a traveler should know before travelling there like local currency/traditions, modes of transportation, languages spoken, weather information/approprate clothing. Ensure that each destination is distinct and closely matches the user's preferences."
      },
      { role: 'user', content: prompt }
    ],
    model: 'gpt-3.5-turbo-1106',
    response_format: { type: 'json_object' },
    temperature: 0.9
  })
  //   console.log(completion.choices[0])
  return completion.choices[0]
}

function constructPrompt(preferences) {
  var preferenceString = ''
  Object.entries(preferences).forEach(([question, choices]) => {
    if (['What are you looking to achieve on your trip?', 'Travel Goals: '].includes(question)) {
      preferenceString += 'Travel Goals: '
      choices.forEach(choice => (preferenceString += `${choice.slice(3)}, `))
      preferenceString += '. '
    } else if (['Which climate zones do you love for vacationing?', 'Preferred Climates: '].includes(question)) {
      preferenceString += 'Preferred Climates: '
      choices.forEach(choice => (preferenceString += `${choice.slice(3)}, `))
      preferenceString += '. '
    } else if (['What activities do you seek out while traveling?', 'Preferred Activities: '].includes(question)) {
      preferenceString += 'Preferred Activities: '
      choices.forEach(choice => (preferenceString += `${choice.slice(3)}, `))
      preferenceString += '. '
    } else if (
      ['Which cultural aspects are you most interested in exploring?', 'Cultural Interests: '].includes(question)
    ) {
      preferenceString += 'Cultural Interests: '
      choices.forEach(choice => (preferenceString += `${choice.slice(3)}, `))
      preferenceString += '. '
    } else if (
      ['What dining experiences do you prefer while on vacation?', 'Preferred Dining Experiences: '].includes(question)
    ) {
      preferenceString += 'Preferred Dining Experiences: '
      choices.forEach(choice => (preferenceString += `${choice.slice(3)}, `))
      preferenceString += '. '
    } else if (
      ['How do you prefer to get around during your travels?', 'Preferred transportation methods: '].includes(question)
    ) {
      preferenceString += 'Preferred transportation methods: '
      choices.forEach(choice => (preferenceString += `${choice.slice(3)}, `))
      preferenceString += '. '
    } else if (
      ["What's your spending style for travel accommodations and activities?", 'spending style: '].includes(question)
    ) {
      preferenceString += 'Spending Style: '
      choices.forEach(choice => (preferenceString += `${choice.slice(3)}, `))
      preferenceString += '. '
    } else if (
      ['For your upcoming travels, how do you envision your ideal travel party?', 'ideal travel party size: '].includes(
        question
      )
    ) {
      preferenceString += 'Ideal travel party size: '
      choices.forEach(choice => (preferenceString += `${choice.slice(3)}, `))
      preferenceString += '. '
    }
  })
  // console.log(preferenceString)
  return preferenceString
}

const getRecommendations = async preferences => {
  const prompt =
    'Generate 3 travel destinations that align with these preferences in a json: ' + constructPrompt(preferences)
  try {
    const response = await chatCompletion(prompt)

    // console.log('Recommendations:', JSON.parse(response.message.content).destinations)

    return JSON.parse(response.message.content).destinations
  } catch (error) {
    console.error('Error in getRecommendations:', error)
    throw error
  }
}

export { getRecommendations }
