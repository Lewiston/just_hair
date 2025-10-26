import React from 'react'
import "../../Styles/Chida/Error_two.css"

const Error_two = () => {
  return (
    <div className='glass'>
        <div className='exit'>
            <strong>Are you sure you want to exit ?</strong>
            <div className='buttons'>
                <button className='button_one'>Try again</button>
                <button className='button_two'>Confirm</button>
            </div>
        </div>
    </div>
  );
};

export default Error_two;