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
      <Routes>
      <Route path = "/" element={
        <div>
          <Navbar title="text utils" mode={mode} toggleMode={toggleMode}/>
          <Textformm showAlert={showAlert} mode={mode}/>
        </div>
         }/>
         
    
              <Route path = "/about" element=
                               {
                                <div>
                                    <Navbar title="text utils" mode={mode} toggleMode={toggleMode}/>
                      <div className='container my-4'>
                       <About heading="About Us" mode={mode}/>
                      </div> 
                      </div>}/>
        
     </Routes>
      
    
     
 </Router>
    </>
  )
}

export default App
