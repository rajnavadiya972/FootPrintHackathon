
import Loginpage from './Component/Loginpage';
import Notification from './Component/Notification';
import Home from './Component/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Loginpage />} />
      <Route path="/Notification" element={<Notification />} />
      <Route path="/Home" element={<Home />} />
      
  </Routes>    
    </BrowserRouter>
  );
}

export default App;
