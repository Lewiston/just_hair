import React from 'react'
import "../../Styles/Chida/Success.css"

const Success = () => {
  return (
    <div className='contain'>
        <div className='title'>
        <h2>Success Appointment  </h2>
        </div>
        <div className='everything'>
            <strong className='booked'>Your appointment was booked successfully! 🎉</strong>
            <button className='history'>Go to appointment history  🕮</button>
        </div>

    </div>
  );
};

export default Success;