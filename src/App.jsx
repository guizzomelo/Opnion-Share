import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landingpage from "./pages/landingpage.jsx"
import Authentication from './pages/Authentication.jsx'
import MainPage from './pages/mainpage.jsx'
import Profile from './component/mainpage/Profile.jsx'

function App() {
  return (
    <BrowserRouter basename='Opnion-Share'>
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
