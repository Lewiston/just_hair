import React from 'react'
import "../../Styles/Chida/Error_one.css";
import { BsExclamationTriangle } from "react-icons/bs";


const Error_one = () => {
  return (
    <div className='stop_container'>

    <div className='stop'>
        <BsExclamationTriangle className='triangle'/>
        <div>
        <strong>Oops, sorry we encountered an error while processing.</strong>
        <div>Please ensure that you have sufficient funds and/or good internet 
                                connection.</div>
        </div>
        <button className='try'>Try again</button>
    </div>
    </div>

  );
};

export default Error_one;