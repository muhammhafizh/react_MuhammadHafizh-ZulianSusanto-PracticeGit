import Headers from "./HeadersPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./HomePage"
import About from "./AboutPage"
import Contact from "./ContactPage"

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
