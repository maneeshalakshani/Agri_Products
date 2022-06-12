import React from 'react';
import Billing from './Billing';
import Otp from './Otp';


function MobilePayMain() {
  return (
    <div className='mpay-row'>
        <Billing className='mpay-col-2'/>
        <Otp className='mpay-col-1'/>
    </div>
  );
}

export default MobilePayMain;

