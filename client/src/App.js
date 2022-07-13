import {Landing,Register, Error} from './pages'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        
      <Routes>
        <Route path='/' element={<div>Dashboard</div>} />
        <Route path='/register' element={<Register />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='*' element={<Error />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
