const apiKey = process.env.REACT_APP_UNSPLASH_API_KEY

const BASE_URL = 'https://api.unsplash.com/search/photos'

async function fetchImages(query) {
  console.log('fetching image of ' + query)
  const url = `${BASE_URL}?query=${query}&client_id=${apiKey}&per_page=3`
  try {
    const response = await fetch(url)
    const data = await response.json()
    data.results.map(img => console.log(query + ': ' + img.urls.regular))
    return data.results.map(img => img.urls.regular)
  } catch (error) {
    console.error('Error fetching images from Unsplash:', error)
    return []
  }
}

export default fetchImages
