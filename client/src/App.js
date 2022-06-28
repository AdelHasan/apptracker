import Landing from "./pages/Landing";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to='/'>Dashboard</Link>
          <Link to='/register'>Register</Link>
          <Link to='/landing'>Landing</Link>
        </nav>
      <Routes>
        <Route path='/' element={<div>Dashboard</div>} />
        <Route path='/register' element={<div>Register</div>} />
        <Route path='/landing' element={<Landing />} />
        <Route path='*' element={<h1>Error</h1>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
