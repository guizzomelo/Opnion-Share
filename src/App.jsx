import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landingpage from "./pages/landingpage"
import Authentication from './pages/Authentication'
import MainPage from './pages/mainpage'
import Profile from './component/mainpage/Profile'

function App() {
  return (
    <BrowserRouter basename="/Opnion-Share">
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/auth" element={<Authentication />}/>
        <Route path="/mainPage" element={<MainPage />}/>
        <Route path="/Profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
