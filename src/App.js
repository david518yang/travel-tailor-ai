import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Splash from './pages/Splash'
import Preferences from './pages/Preferences'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Splash />} />
        <Route path="/preferences" element={<Preferences />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
