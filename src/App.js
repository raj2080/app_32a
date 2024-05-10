
import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";


import './App.css';
import Homepage from "./pages/homepage/Homepage";
import Loginpage from "./pages/login/Loginpage";
import Registerpage from "./pages/register/Registerpage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>

      <Navbar/>

      <Routes>

        


        
        <Route path='/Homepage' element={ < Homepage />} /> 
        <Route path='/login' element={ < Loginpage />} /> 
        <Route path='/register' element={ < Registerpage />} /> 





      </Routes>





    </Router>
  );
}

export default App;


//starting

//<Route path='/register' element={<h1> Register Page </h1>} /> 
// <Route path='/login' element={<h1> Login Page</h1>} /> 