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
          <Route path="/" exact element={<Home/>} />
          <Route path="/documentation" element={<Documentation/>} />
          <Route path="https://ko-fi.com/cctistan" />  
        </Routes> 
        <Footer />
       </Router>
    </div>
  );
}

export default App;
