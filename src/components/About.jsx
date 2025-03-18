import React, { useState } from 'react'

export default function About(props) {
    
    const [myStyle,setStyle] = useState({
        color : 'black',
        backgroundColor:'white'
    })
    const [btnTxt,setBtnTxt] = useState("enable dark mode");

  // if(props.mode === "dark"){
  //   setStyle({
  //     color : 'white',
  //     backgroundColor:'black'
  // });
 
  // setBtnTxt("enable light mode");

  // }



    const toggleColor =  ()=>{
     
        if(myStyle.color == "white"){
        
            setStyle({
                color : 'black',
                backgroundColor:'white'
            }
            
        )
        setBtnTxt("enable dark mode")
    
    
        }
        else{
        
            setStyle({
                color : 'white',
                backgroundColor:'black'
            })
           
            setBtnTxt("enable light mode")
        }
    } 
      
    
  return (
    <>
    <div className="container" style={myStyle}>
      <h2>{props.heading}</h2>
      <div className="accordion" id="accordionExample" style={myStyle}>
        
        {/* Accordion Item 1: About the Website */}
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              About Text Utilities Website
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>Text Utilities</strong> is a simple yet powerful online tool that allows you to manipulate and modify text quickly and efficiently. Whether you want to convert text to uppercase, lowercase, remove unwanted spaces, or even count the number of characters and words in your content, Text Utilities is here to help. Our website is designed to provide you with fast, reliable, and easy-to-use text-processing features to improve your writing and workflow.
            </div>
          </div>
        </div>
        
        {/* Accordion Item 2: Features */}
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Features of Text Utilities
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>Text Utilities</strong> offers several essential features to make working with text more convenient and efficient. These include:
              <ul>
                <li><strong>Uppercase & Lowercase Converter:</strong> Easily convert any text to uppercase or lowercase with a single click.</li>
                <li><strong>Remove Extra Spaces:</strong> Clean up your text by removing unnecessary spaces between words or lines.</li>
                <li><strong>Character and Word Count:</strong> Quickly count the number of characters or words in any text you input.</li>
              </ul>
              These features are ideal for writers, developers, students, and anyone who regularly works with text and needs quick modifications.
            </div>
          </div>
        </div>
  
        {/* Accordion Item 3: Developed By */}
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Developed By
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>Text Utilities</strong> was developed by <strong>Pawan Kumar Pogaku</strong>, a passionate developer who created this tool to help people with everyday text-processing tasks. The aim is to provide a user-friendly, fast, and reliable platform for anyone looking to work more efficiently with text.
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </>
  
  )
}
