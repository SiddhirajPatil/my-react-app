
import React,{ useState} from 'react'


export default function Textform(props) {
    const [text,setText]=useState("Enter the content");
 
    const handleUpClick =() => {
        console.log("Upper Case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert(" Connverted to uppercase","success")
    }
    const handleDownClick =() => {
        console.log("Upper Case was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
       props.showAlert(" Connverted to Lowercase","success")
    }
    const handleClearClick = (  )=>{
        let newText=" ";
        setText(newText);
        props.showAlert(" Cleared ","success")
    }
    const handleOnChange = ( event )=>{
        console.log("onChange");
        setText(event.target.value);
    }
  

  

  return ( 
      
      <div className='container'>
        
  <h1> {props.heading}</h1>
  <hr />
  <div className="mb-3">
    <textarea  className="form-control" value={text} onChange={handleOnChange}  style={{ backgroundColor: props.mode === 'light' ? 'grey':'white '}} style2={{ backgroundColor: props.mode === 'light' ? 'grey':'white '}} id="myBox" rows={8}></textarea>
  </div>
  <button className='btn btn-info mx-2' onClick={handleUpClick} >CONVERT TO UPPERCASE</button>
  <button className='btn btn-info ' onClick={handleDownClick} >CONVERT TO LOWERCASE</button>
  <button className='btn btn-info mx-2 ' onClick={handleClearClick}>CLEAR</button>
  <hr/>
  <div className='container my-3'>
          <h1> Summary </h1>
          <p> {text.split (" ").length} words &{text.length} characters</p>
          <hr/>
          <h2> HAPPY COUNTING !!!!</h2>
         </div>

         
      </div>



  )
}

