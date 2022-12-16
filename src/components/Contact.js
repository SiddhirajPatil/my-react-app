import React from 'react'
import { useState } from 'react';
export default function Contact(props) {
    const [txt,setTxt]=useState("Enter the content");
    const handleSubmit =() => {
        let newTxt = " ";
               setTxt(newTxt);      
    }
    const handleOnnChange = ( event )=>{
        console.log("onChange");
        setTxt(event.target.value);
    }
  return (
    <>
   
    <div className="mb-3 mx-3">
  <label for="exampleFormControlInput1" className="form-label">Name</label>
  <input type="name" className="form-control" id="exampleFormControlInput1" onChange={handleOnnChange}  placeholder="Enter your name" />
</div>
<div className="mb-3 mx-3 ">
  <label for="exampleFormControlTextarea1" className="form-label"> Feedback</label>
  <textarea className="form-control " onChange={handleOnnChange} value={txt} id="exampleFormControlTextarea1" rows="3" placeholder='Any Message'></textarea>
</div>

<button className='btn btn-primary my-2 mx-3' onClick={handleSubmit} > Submit </button>

    </>
  )
}
