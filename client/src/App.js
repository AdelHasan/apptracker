import { Landing, Register, Error } from "./pages";
import { AllJobs,AddJob, Profile, SharedLayout, Stats } from "./pages/dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/">
            <Route path="stats" element={<Stats />} />
            <Route path="all-jobs" element={<AllJobs />}></Route>
            <Route path="add-job" element={<AddJob />}></Route>
            <Route path="profile" element={<Profile />}></Route>
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
