import Homepage from "./Components/Homepage/Homepage";
import Header from "./Components/Header/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  BrowserRouter
} from "react-router-dom";

import Writing from "./Pages/Writing";
import Social from "./Pages/Social";
import Marketing from "./Pages/Marketing";
import Seo from "./Pages/Seo";
import Design from "./Pages/Design";
import Travel from "./Pages/Travel";
import './App.css'

function App() {
  return (
    <div className="Main_app" >
      <Header/>
      <BrowserRouter>
      {/* <Navbar/> */}
      {/* <Test/> */}
      <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path='/Social' element={<Social/>}></Route>
      <Route path='/Writing' element={<Writing/>}></Route>
      <Route path='/Marketing' element={<Marketing/>}></Route>
      <Route path='/Seo' element={<Seo/>}></Route>
      <Route path='/Design' element={<Design/>}></Route>
      <Route path='/Travel' element={<Travel/>}></Route>
      </Routes>
      </BrowserRouter>
    
      {/* <Homepage/> */}
    
    </div>
  );
}

export default App;
