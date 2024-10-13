
import Home from "./pages/Home";
import Selection from "./pages/Selection";
import Tooltip from "./components/Tooltip";
import PoseHeader from './components/PoseHeader';
import Restorative from './pages/Restorative';
import Standing from './pages/Standing';
import Seated from './pages/Seated';
import Balance from './pages/Balance';
import PoseDescription from './pages/PoseDescription';
import Confirm from './components/ConfirmMastery';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, HashRouter } from "react-router-dom";
function App() {
  useEffect(() => {
    // Check if the default values are already set
    const isDefaultSet = localStorage.getItem('unhidden');

    if (!isDefaultSet) {
      // Set default values
      localStorage.setItem("unhidden", "100 101 102 103")
      localStorage.setItem("xp", 0)
    }
  }, []);

  ReactDOM.createRoot(document.getElementById('root')).render(
    <HashRouter>
      <Routes>
      <Route index element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/selection' element={<Selection/>}/>
        <Route path='/Restorative' element={<Restorative/>}/>
        <Route path='/Standing' element={<Standing/>}/>
        <Route path='/Seated' element={<Seated/>}/>
        <Route path='/Balance' element={<Balance/>}/>
        <Route path='/PoseDescription' element={<PoseDescription/>}/>
      </Routes>     
</HashRouter>
  );
}
export function setLevel() {
  const xp = parseInt(localStorage.getItem("xp")) || 0;
  let level = 1;
  let percentage = 0;
  
  if (xp >= 30) {
    level = "MAX";
    percentage =  0;
  } else if (xp >= 24) {
    level = 4;
    percentage = ((xp - 24) / (30 - 24)) * 100;
  } else if (xp >= 14) {
    level = 3;
    percentage = ((xp -14) / (24 - 14)) * 100;
  } else if (xp >= 6) {
    level = 2;
    percentage = ((xp - 6) / (14 - 6)) * 100;
    
  } else {
    level = 1;
    percentage = (xp / 6) * 100;
  }
  localStorage.setItem("lvl", level);
  return percentage;
}

export default App;
