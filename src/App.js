import './App.css';
import Contact from './Contact';
import Services from './Services'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from './About';
import Home from './Home';




function App() {
  return (
    <Router>
       <div className="App">
         <Routes>
           <Route path="/contact" element={[<Contact />]}></Route>
           <Route path='/about' element={[<About/>]}></Route>
           <Route path="/services" element={[<Services />]}></Route>
           <Route path='/' element={[<Home />]}></Route>
         </Routes>
       </div> 
    </Router>
  );
}

export default App;
