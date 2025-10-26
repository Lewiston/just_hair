import React from 'react';
import { RiArrowLeftSLine } from "react-icons/ri";
import { IoCalendarNumberOutline } from "react-icons/io5";
import "../../Styles/Chida/Book.css"

const Book = () => {
  return (

    <div className='container'>

        <div style={{display:"flex", gap:"2em", alignItems:"center", color:"grey"}}>
            <RiArrowLeftSLine id='arrow'/><h2>Book an appointment</h2>
    </div>

        <form className='all'>


    <div className='first'>
    <div className='up'>
        <label htmlFor='date'>Date</label>
        <input className='holder' type="text" placeholder={"🗓️ Select date"}/>
    </div>
    <div className='up'>
        <label htmlFor='time'>Time</label>
        <input className='holder' type='text' placeholder='🕙 Select Time'/>
    </div>
    </div>


    <div className='second'>
    <div className='up'>
        <label htmlFor='amount'>Enter Amount</label>
        <input className='holder' type='text' placeholder='💸 Pay half :  750XAF'/>
    </div>
    <div className='up'>
        <label htmlFor='payment'>Payment Method</label>
        <input className='holder' type='text' placeholder='🖂 MOMO or  OM'/>
    </div>
    </div>


    <div className='up'>
        <label htmlFor='number'>Enter Mobile Number</label>
        <input className='holder' type='text' placeholder='📞 MTN or ORANGE'/>
    </div>

    
    <button className='button'>Confirm my appointment</button>
    

    </form>

    </div>
  );
};

export default Book;