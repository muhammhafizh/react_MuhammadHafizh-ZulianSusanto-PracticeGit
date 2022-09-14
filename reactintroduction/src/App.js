import Headers from "./Headers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"

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
