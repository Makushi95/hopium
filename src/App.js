import "./App.css";

import Navigation from "./components/navigation/Navigation";
import Title from "./components/title/Title";
import Intro from "./components/intro/Intro";
import Products from "./components/products/Products";
import About from "./components/about/About";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Title />
      <Intro />
      <Products />
      <About />
    </div>
  );
}

export default App;
