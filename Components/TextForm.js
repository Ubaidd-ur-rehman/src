import React,{useState} from "react";
export default function TextForm(props){
  const [text,setText]=useState('Enter your text')
 const ChangeToUpperCase=()=>{
    setText(text.toUpperCase()); 
  }
  const ChangeToLowerCase=()=>{
    setText(text.toLowerCase())
  }
  const ChangeClearText=()=>{
    let newText=""
    setText(newText)
  }
  const Handlecopy=()=>{
    let inputElement=document.getElementById('my-box')
    var text=document.getElementById("mybox");
    text.addEventListener('click',()=>{
      inputElement.select();
      document.execCommand("copy");
      inputElement.blur();
      alert('Your text has been copied')
    })


  }
  // const [text,setText]=useState('Enter your text')
  const EmailExtract=()=>{
    const emailRegex = /[\w.-]+@[\w.-]+\.[a-zA-Z]{2,4}/g;
    const emailAddresses =text.match(emailRegex);
    if (emailAddresses) {
      emailAddresses.forEach(email=> {
      alert('your email has been extract as : '+email)
        
      })  
    }
    else{
      alert("No email found in this paragraph")
    }
    
  }
  const Handlechange=(event)=>{
    setText(event.target.value)
  }


  return (
    <>
    <div className="container">
    <h1>Professional text Changer</h1>
      <div className="mb-3">
        <textarea className="form-control"  style={{backgroundColor:props.mode==='dark'?'white':'black',color:props.mode==='dark'?'black':'white'}} value={text} id="my-box" onChange={Handlechange} cols="30" rows="10"></textarea>
      </div>
      <button className="btn btn-primary"  onClick={ChangeToUpperCase}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-3"  onClick={ChangeToLowerCase}>Convert to LowerCase</button>
      <button className="btn btn-primary "  onClick={ChangeClearText}>Clear Text</button>
      <button className="btn btn-primary mx-3"  onClick={EmailExtract}>Email Extract</button>
      <button className="btn btn-primary" id="mybox"  onClick={Handlecopy}>Handle Copy</button>
  </div>
  <div className={`container my-5 ${props.mode==='light'?'dark':'light'}`} >
    <h1>Your Text Summery</h1>
    <p>{text.split(" ").length} Words {text.length} characters</p>
    <p>{0.008*text.split('').length} Minutes read</p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"Enter some text above to preview here"}</p>
  </div>
  </>
)
}

