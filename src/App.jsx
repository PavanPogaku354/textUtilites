import React, { useState } from 'react';

import Navbar from "./components/Navbar"
import Textformm from "./components/Textformm"
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";

function App() {
const [mode,setMode] = useState('light');
const[alert,setAlert]=useState(null);
const showAlert = (msg,type)=>{
setAlert({
  message : msg,
  type : type
})
setTimeout(()=>{
  setAlert(null);
},1500)
}
const toggleMode = ()=>{
  if(mode==='light'){
    setMode("dark");
    document.body.style.backgroundColor = "#10113e";
    showAlert("enabled dark mode","DarkMode!!!")
  }
  else{
    setMode("light");
    document.body.style.backgroundColor = "white";
    showAlert("enabled light mode","LightMode!!!")
  }
}

  return (
    <>
    <Router>
    <Navbar title="text utils" mode={mode} toggleMode={toggleMode}/>
      <Routes>
      <Route path = "/" element={
      <Textformm showAlert={showAlert} mode={mode}/>
      
         }/>
       <Route path = "/about" element=
                               { <About heading="About Us" mode={mode}/> }/>
        
     </Routes>
      
    
     
 </Router>
    </>
  )
}

export default App
