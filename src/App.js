import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Navigation from "./components/navigation/Navigation";
import Homepage from "./pages/hopmepage/Homepage";
import CaseStudies from "./pages/CaseStudies";

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/CaseStudies" element={<CaseStudies />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
