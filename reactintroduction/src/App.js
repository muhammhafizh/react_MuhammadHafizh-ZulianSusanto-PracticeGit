import Headers from "./headers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home"
import About from "./about"
import Contact from "./contact"

function App() {
  return (
    <>
      <Headers />

      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
