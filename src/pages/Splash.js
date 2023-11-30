import React from 'react'
import SignUpButton from '../components/SignUpButton'
import LogInButton from '../components/LogInButton'

export default function Splash() {
  return (
    <div className="splash-container relative">
      {/* TOP DIV */}
      <div className="relative w-full h-[55vh] bg-cover bg-center" style={{ backgroundImage: 'url(/uyuni.avif)' }}>
        <div className="absolute w-full" style={{ top: '60%' }}>
          <div className="grid grid-cols-12 gap-x-5">
            <div className="col-start-2 col-span-10">
              <h1 className="text-6xl font-merriweather" style={{ color: '#2E4564' }}>
                Discover the Unseen -<br />
                Your Next Journey
                <br />
                Begins Here
              </h1>
            </div>
          </div>
        </div>
        <figcaption
          style={{
            position: 'absolute',
            right: '0',
            bottom: '0',
            background: 'rgba(255, 255, 255, 0.7)',
            color: '#333',
            padding: '5px'
          }}
        >
          Photo by Heiko Meyer on{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.nationalgeographic.es/viaje-y-aventuras/consejos-de-viaje-salar-de-uyuni-el-desierto-de-sal-mas-grande-del-mundo"
          >
            National Geographic
          </a>
        </figcaption>
      </div>

      {/* MIDDLE DIV */}
      <div className="flex relative w-full h-[10vh] justify-center bg-indigo-200">
        <SignUpButton />
        <LogInButton />
      </div>

      {/* BOTTOM DIV */}
      <div className="grid grid-cols-3 mx-5 gap-5 h-[35vh]">
        <div
          className="discover-more flex flex-col justify-center items-center border-4 border-slate-200 rounded-3xl space-y-4 my-5 p-4"
          style={{ maxHeight: '35vh' }}
        >
          <svg
            viewBox="0 0 512 512"
            fill="#3B6EA5"
            className="w-[6.25vw] h-[6.25vh]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m414.39 97.74a224 224 0 1 0 -316.78 316.78 224 224 0 1 0 316.78-316.78zm-350.39 158.39a191.63 191.63 0 0 1 6.7-50.31c7.34 15.8 18 29.45 25.25 45.66 9.37 20.84 34.53 15.06 45.64 33.32 9.86 16.21-.67 36.71 6.71 53.67 5.36 12.31 18 15 26.72 24 8.91 9.08 8.72 21.52 10.08 33.36a305.36 305.36 0 0 0 7.45 41.27c0 .1 0 .21.08.31-74.83-26.28-128.63-97.61-128.63-181.28zm192 192a193.12 193.12 0 0 1 -32-2.68c.11-2.71.16-5.24.43-7 2.43-15.9 10.39-31.45 21.13-43.35 10.61-11.74 25.15-19.68 34.11-33 8.78-13 11.41-30.5 7.79-45.69-5.33-22.44-35.82-29.93-52.26-42.1-9.45-7-17.86-17.82-30.27-18.7-5.72-.4-10.51.83-16.18-.63-5.2-1.35-9.28-4.15-14.82-3.42-10.35 1.36-16.88 12.42-28 10.92-10.55-1.41-21.42-13.76-23.82-23.81-3.08-12.92 7.14-17.11 18.09-18.26 4.57-.48 9.7-1 14.09.68 5.78 2.14 8.51 7.8 13.7 10.66 9.73 5.34 11.7-3.19 10.21-11.83-2.23-12.94-4.83-18.21 6.71-27.12 8-6.14 14.84-10.58 13.56-21.61-.76-6.48-4.31-9.41-1-15.86 2.51-4.91 9.4-9.34 13.89-12.27 11.59-7.56 49.65-7 34.1-28.16-4.57-6.21-13-17.31-21-18.83-10-1.89-14.44 9.27-21.41 14.19-7.2 5.09-21.22 10.87-28.43 3-9.7-10.59 6.43-14.06 10-21.46 1.65-3.45 0-8.24-2.78-12.75q5.41-2.28 11-4.23a15.6 15.6 0 0 0 8 3c6.69.44 13-3.18 18.84 1.38 6.48 5 11.15 11.32 19.75 12.88 8.32 1.51 17.13-3.34 19.19-11.86 1.25-5.18 0-10.65-1.2-16a190.83 190.83 0 0 1 105 32.21c-2-.76-4.39-.67-7.34.7-6.07 2.82-14.67 10-15.38 17.12-.81 8.08 11.11 9.22 16.77 9.22 8.5 0 17.11-3.8 14.37-13.62-1.19-4.26-2.81-8.69-5.42-11.37a193.27 193.27 0 0 1 18 14.14c-.09.09-.18.17-.27.27-5.76 6-12.45 10.75-16.39 18.05-2.78 5.14-5.91 7.58-11.54 8.91-3.1.73-6.64 1-9.24 3.08-7.24 5.7-3.12 19.4 3.74 23.51 8.67 5.19 21.53 2.75 28.07-4.66 5.11-5.8 8.12-15.87 17.31-15.86a15.4 15.4 0 0 1 10.82 4.41c3.8 3.94 3.05 7.62 3.86 12.54 1.43 8.74 9.14 4 13.83-.41a192.12 192.12 0 0 1 9.24 18.77c-5.16 7.43-9.26 15.53-21.67 6.87-7.43-5.19-12-12.72-21.33-15.06-8.15-2-16.5.08-24.55 1.47-9.15 1.59-20 2.29-26.94 9.22-6.71 6.68-10.26 15.62-17.4 22.33-13.81 13-19.64 27.19-10.7 45.57 8.6 17.67 26.59 27.26 46 26 19.07-1.27 38.88-12.33 38.33 15.38-.2 9.81 1.85 16.6 4.86 25.71 2.79 8.4 2.6 16.54 3.24 25.21a158 158 0 0 0 4.74 30.07 191.75 191.75 0 0 1 -151.43 74.13z" />
          </svg>
          <p className="text-5xl font-poppins">Discover More</p>
          <p className="text-m font-roboto text-center">
            Find your perfect destination. Our platform aligns with your preferences for an ideal vacation.
          </p>
        </div>
        <div
          className="smart-insights flex flex-col justify-center items-center border-4 border-slate-200 rounded-3xl space-y-4 my-5 p-4"
          style={{ maxHeight: '35vh' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#317D73" className="w-[6.25vw] h-[6.25vh]">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M19 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 16h-4.83l-.59.59L12 20.17l-1.59-1.59-.58-.58H5V4h14v14zm-7-1l1.88-4.12L18 11l-4.12-1.88L12 5l-1.88 4.12L6 11l4.12 1.88z" />
          </svg>
          <p className="text-5xl font-poppins">Smart Insights</p>
          <p className="text-m font-roboto text-center">
            Get the scoop on your next destination with AI-driven tips and local knowledge.
          </p>
        </div>
        <div
          className="store flex flex-col justify-center items-center border-4 border-slate-200 rounded-3xl space-y-4 my-5 p-4"
          style={{ maxHeight: '35vh' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F2B04E" className="w-[6.25vw] h-[6.25vh]">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M15 7v12.97l-4.21-1.81-.79-.34-.79.34L5 19.97V7h10m4-6H8.99C7.89 1 7 1.9 7 3h10c1.1 0 2 .9 2 2v13l2 1V3c0-1.1-.9-2-2-2zm-4 4H5c-1.1 0-2 .9-2 2v16l7-3 7 3V7c0-1.1-.9-2-2-2z" />
          </svg>
          <p className="text-5xl font-poppins">Your Travel, Curated</p>
          <p className="text-m font-roboto text-center">
            Store and manage your ideal travel experiences and retrieve them with ease.
          </p>
        </div>
      </div>
    </div>
  )
}
