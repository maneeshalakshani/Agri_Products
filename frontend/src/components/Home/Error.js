import React from 'react'
import img1 from '../../img/Error.png'

const Error = () => {
  return (
    <div>
      <div className='container my-5 py-5'>
        <div className='row'>
          <div className='col-md-6 mx-auto'>
            <h1><center>Error Not Found</center></h1>
            <img src={img1}
              alt="Error"
              className='img1' />
          </div>
        </div>
      </div>


    </div>
  )
}

export default Error