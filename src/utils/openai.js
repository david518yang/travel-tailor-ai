// import OpenAI from 'openai'
// const openai = new OpenAI()

// async function chatCompletion(prompt) {
//   const completion = await openai.chat.completions.create({
//     messages: [
//       {
//         role: 'system',
//         content:
//           "You are a helpful travel destination discovery assistant designed to find fitting destinations for a user based on their preferences. Output in JSON with keys 'location', 'description', 'background-info'."
//       },
//       { role: 'user', content: prompt }
//     ],
//     model: 'gpt-3.5-turbo-1106',
//     response_format: { type: 'json_object' }
//   })
//   console.log(completion.choices[0])
//   return completion.choices[0]
// }
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
  const prompt = 'Generate 3 destinations with the following user preferences: ' + constructPrompt(preferences)
  // Logic to use OpenAI API with the preferences object
  // For example, making an HTTP request to the OpenAI API

  // Placeholder for OpenAI API interaction
  console.log('Sending preferences to OpenAI API:', preferences)
  console.log('Prompt: ' + prompt)
  await new Promise(resolve => setTimeout(resolve, 2000))
  // Return the recommendations from OpenAI API
  // This is a placeholder return
  return ['Recommendation 1', 'Recommendation 2', 'Recommendation 3']
}

export { getRecommendations }
