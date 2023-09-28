import About from './Components/About';
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'
import Alert from './Components/Alert'
import React,{useState} from 'react'
// import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

function App(){ 
const [Lmode,setLMode]=useState('light')
const [alert,setalert] = useState('light');
const showAlert=(message,type)=>{
  setalert({
    msg:message,
    type:type,
  })
}
const togglemode=()=>{  
  if(Lmode==='light'){
    setLMode('dark');
    document.body.style.backgroundColor='rgb(6, 29, 36)'
    document.body.style.color='white'
    document.title="React Project-dark mode"
    showAlert("Dark mode has been enabled","Success")
    setInterval(() => {
     document.title="install react app now"
   }, 2000);
    setInterval(() => {
       document.title="react is amazing"
       }, 1500);
       setTimeout(()=>{
         setalert(null)
       },1000)
  }
  else{
    setLMode('light')
    document.body.style.backgroundColor="white"
    document.body.style.color='black'
    document.title="React Project "
    showAlert("light mode has been enabled","Success")


  }
}
  return(
    <> 
    <Router>
    <Navbar mode={Lmode} togglemode={togglemode}/>   
        <div>
          <Routes>
          <Route exact path="/about" element={<About mode={Lmode} togglemode={togglemode}/>}/>
          {/* <Route path="/" element={<Navbar mode={Lmode} togglemode={togglemode}/>}/> */}
          <Route path="/textform" element={<TextForm mode={Lmode} togglemode={togglemode}/>}/>
          <Route path="/alert" element={<Alert mode={alert} alert={alert} togglemode={togglemode} />}/>  
        </Routes>
        </div>  
    </Router>





    {/* <Router>      
  <Navbar mode={Lmode} togglemode={togglemode}/>   
 <Alert alert={alert} />
 <div className="container my-3">
 <Switch>
         <Route path="/about">
 <About mode={Lmode} togglemode={togglemode}/>

         </Route>
         <Route path="/textform">

   <TextForm mode={Lmode} togglemode={togglemode}/>  
         </Route> 

       </Switch>
   </div>
</Router>
 <div className="container my-3">

<Navbar mode={Lmode} togglemode={togglemode}/>   
  <TextForm mode={Lmode} togglemode={togglemode}/>   
<About mode={Lmode} togglemode={togglemode}/>
<Alert alert={alert} />
</div>  */}
  </>
  );
}
export default App;


