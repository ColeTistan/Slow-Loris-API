import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Documentation from "./components/Documentation";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">   
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="https://github.com/ColeTistan/Slow-Lorises" />
          <Route path="https://ko-fi.com/cctistan" />  
        </Routes> 
        <Documentation />
        <Footer />
       </Router>
    </div>
  );
}

export default App;
