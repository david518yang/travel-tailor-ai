import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Splash from './pages/Splash'
import Preferences from './pages/Preferences'
import Home from './pages/Home'
import SavedDestinations from './pages/SavedDestinations'
import './tailwind.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Splash />} />
        <Route path="/preferences" element={<Preferences />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/savedDestinations" element={<SavedDestinations />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
