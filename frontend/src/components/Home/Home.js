
import React from 'react'
import About from '../Home/About';
import Contact from './Contact';


const Home = () => {
  return (
    <div>
      <section id="home">
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-8 mt-5'>
              <h1 className='display-4 fw-bolder mb-4 text-center'>Feels the Smart Business</h1>
              <p className='lead text-center fs-4 mb-5'>
                Agriculture is the art and science of cultivating the soil,
                growing crops and raising livestock. It includes the preparation
                of plant and animal products for people to use and their
                distribution to markets. Agriculture provides most of the
                world's food and fabrics. people to use and their
                distribution to markets. Agriculture provides most of the
                world's food and fabrics.</p>
                
                
            </div>
          </div>
        </div>
        
      </section>
      <About/>
      <Contact/>
      
    </div>
  )
}

export default Home;