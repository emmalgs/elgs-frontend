import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Drawings from './pages/Drawings'
import Paintings from './pages/Paintings'
import Splash from './pages/Splash'

const App: React.FC = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/drawings" element={<Drawings />}/>
          <Route path="/drawings/:drawingId" element={<Drawings />}/>
          <Route path="/paintings" element={<Paintings />}/>
          <Route path="/paintings/:paintingId" element={<Paintings />}/>
        </Routes>
    </Router>
  )
}

export default App
