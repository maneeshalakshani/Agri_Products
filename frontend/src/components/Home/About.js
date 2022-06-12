import React from 'react'
import about1 from '../../img/about1.png';

const About = () => {
    return (
        <div>
            <section id="about">
                <div className='container my-5 py-5'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <img src={about1}
                                alt="About"
                                className='w-75 mt-5' />
                        </div>
                        <div className='col-md-6'>
                            <h3 className='fs-5 mb-0'>About Us</h3>
                            <h1 className='display-6 mb-2'>Who <b>We</b> Are</h1>
                            <hr className='w-50'/>
                            <p className='lead mb-4'>An About Us page ge helps your company make a good first impression, and is critical for building customer trust and loyalty. Which is why we've created this free, easy-to-use tool that lets you instantly generate a custom About Us page for your store.Once your content is generated, you’ll be able to tweak and customize it until it's just right. Create yours now! helps your company make a good first impression, and is critical for building customer trust and loyalty. Which is why we've created this free, easy-to-use tool that lets you instantly generate a custom About Us page for your store.Once your content is generated, you’ll be able to tweak and customize it until it's just right. Create yours now!</p>
                        <button className='btn btn-success rounded-pill px-4 py-2'>Get Started</button>
                        <button className='btn btn-outline-success rounded-pill px-4 py-2 ms-2'>Contact Us</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About