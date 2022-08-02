import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Homepage from "./pages/hopmepage/Homepage";
import CaseStudies from "./pages/caseStudies/CaseStudies";
import Luart from "./pages/caseStudies/luart/Luart";
import Croswap from "./pages/caseStudies/croswap/Croswap";
import TerraAliens from "./pages/caseStudies/terraAliens/TerraAliens";
import GetInTouch from "./components/getInTouch/GetInTouch";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="CaseStudies" element={<CaseStudies />} />
          <Route path="CaseStudies/Luart" element={<Luart />} />
          <Route path="CaseStudies/Croswap" element={<Croswap />} />
          <Route path="GetInTouch" element={<GetInTouch />} />
          <Route
            path="CaseStudies/TerraAliens"
            element={<TerraAliens />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
