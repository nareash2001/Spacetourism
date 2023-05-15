import Home from "./component/homepage/Home";
import Destination from "./component/destination-page/Destination.js";
import Crew from "./component/crew-page/Crew";
import Technology from "./component/technology-page/Technology";
import {Routes,Route} from "react-router-dom" 
import "./app.css"
function App() {
  return (
    <div> 
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/destination" element={<Destination/>}/>
  <Route path="/crew" element={<Crew/>}/>
  <Route path="/technology" element={<Technology/>}/>
 </Routes>
 </div>
 
  );
}

export default App;
