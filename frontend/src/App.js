
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Sign from './Sign';
import Home from './Home';
import AdminLogin from './Adminlogin';
import Single from './Single';
import Profilepage from "./Profilepage";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/home" element={<Home />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/single" element={<Single />} />
          <Route path='/profilepage' element={<Profilepage/>}/>
          <Route path='/Dashboard' element={<Dashboard/>}/>
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
