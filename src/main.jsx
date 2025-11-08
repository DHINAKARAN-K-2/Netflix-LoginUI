import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import{BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Success from './Success.jsx'
import Fail from './Fail.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/login" element={<App />} />
        <Route path="/success" element={<Success />} />
        <Route path="/fail" element={<Fail />} />
        {/* Redirect all other paths to login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
  </Routes>
  </BrowserRouter>
)
