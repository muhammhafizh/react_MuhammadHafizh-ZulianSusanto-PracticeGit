import './App.css';
import HomePage from './components/Home';
import SidebarMenu from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutAppPage from './components/AboutApp';
import AboutAuthorPage from './components/AboutAuthor';
import ErrorPage from './components/Error';

function App() {
  return (
    <>
      <SidebarMenu />
      <Router>
        <div className="App">
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/about-app' element={<AboutAppPage />}/>
            <Route exact path='/about-author' element={<AboutAuthorPage />}/>
            <Route path="*" element={<ErrorPage />}/>
          </Routes>
        </div>
      </Router> 
    </>
  );
}

export default App;
