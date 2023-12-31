# Travel Tailor AI

Link to [travel-tailor-ai.web.app](https://travel-tailor-ai.web.app/) hosted on Google Cloud

## Introduction

Travel Tailor AI is a dynamic web application designed to transform the travel planning process. By seamlessly integrating Google Sign-In, the app ensures a secure and personalized user experience. The core of the app lies in its use of OpenAI's API, which intelligently generates travel recommendations tailored to each user's unique preferences. With the added functionality of saving and managing favorite destinations through Firebase Firestore, Travel Tailor AI not only simplifies the journey planning but also personalizes it to fit every user's dream itinerary. Whether you're an occasional traveler or a frequent flyer, this app is your companion in crafting memorable and bespoke travel experiences.

## Demo

https://github.com/lmu-cmsi2021-fall2023/your-own-davidy/assets/11432517/f151e900-f8a8-4926-80a1-485a31dfd99f



https://github.com/lmu-cmsi2021-fall2023/your-own-davidy/assets/11432517/83aade3f-2ada-4bb8-a361-6b4d63fa475b


## Technology Highlights

- **ReactJS**: used React, one of the most popular front end javascript frameworks
- **Tailwind CSS**: styled the web app with tailwind, minimizing custom css 
- **Firebase Auth**: implemented secure and easy authentication with Firebase Sign in with Google
- **OpenAI API**: utilized the OpenAI API to generate personalized travel recommendations
- **Unsplash API**: fetched captivating stock photos of destinations using Unsplash
- **Firebase Firestore**: implemented data persistence under each user to store previously entered preferences and previously saved destinations

## Usage

1. Sign in with Google.
2. Enter your travel preferences.
3. Receive AI-generated travel recommendations.
4. Save your favorite destinations.

## Contributions

Solo Project by David Yang

## Aknowledgements

Prof. Dondi Dionisio

## Note:

Due to the OpenAI and Unsplash api keys being private, I stored them in a .env file on my local devices and used process.env in each respective file in the utils folder. This was to avoid the api keys being deactivated if they were to be pushed to git.

If the code was to be run on a local machine, the api calls will not function properly. However, on the publicly hosted url it should work fine
