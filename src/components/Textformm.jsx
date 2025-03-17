import React, { useState } from 'react'
import PropTypes from 'prop-types';
export default function 
(props) {

    const [text,setText] = useState("");

    const convertUpper =()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase","success");
    }

    const convertLower =()=>{
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("converted to lowercase","success");
  }
  const removeExtraSpace = ()=>{
    
      let newText= text.trim().replace(/\s+/g, ' ');
      setText(newText);
    
  }
    const clear =()=>{
      setText('');
  }

  const handleOnChange = (event)=>{
        console.log(event);
       let newText = event.target.value;
       setText(newText);
  }
   const copyText = ()=>{
      let text =document.getElementById("mybox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }
    

  return (
    <div>
        <div className="container ">
            <h3 className='fst-italic' style={{color: props.mode ==='dark' ? 'white':'dark'}}>Enter The Text</h3>

  <textarea className="form-control my-3 " style={{backgroundColor: props.mode ==='dark' ? 'grey':'white',color: props.mode ==='dark' ? 'white':'dark'}} value={text} id="mybox" rows="8" onChange={handleOnChange}></textarea>
  <button className="btn btn-primary mx-1" onClick={convertUpper}>Uppercase</button>
  <button className="btn btn-primary mx-1" onClick={convertLower}>lowercase</button>

  <button className="btn btn-primary mx-1" onClick={copyText}>copy</button>
  <button className="btn btn-primary mx-1" onClick={removeExtraSpace}>Remove extra spaces</button>
  <button className="btn btn-primary mx-1" onClick={clear}>clear</button>
</div>
<div className='container fst-italic' style={{color: props.mode ==='dark' ? 'white':'black'}}>
    <h3 className='fw-bold my-1'>Your text summary is</h3>
    <div className='my-2'>
    <p>number of words are {text.split(' ').length} and number of characters are {text.length}</p> 
    <p>{0.008*text.split("").length} minutes read</p>
    <h4 className='fw-bold'>Preview</h4>
    <p>{text.length>0?text:"please enter the text to preview"}</p>
    </div>
   
</div>


</div>
  )
}