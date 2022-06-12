import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
const axios = require('axios');

const Contact = () => {

    const [user, setInputs] = useState({
        ename: "",
        eemail: "",
        emessage: "",
    });

    const handleInput = (e) => {
        setInputs((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const sendRequest = async () => {
        const res = await axios
            .post("http://localhost:5100/api/message", {
                ename: user.ename,
                eemail: user.eemail,
                emessage: user.emessage,
            })
            .catch((err) => console.log(err));
        const data = await res.data;
        return data;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest();
    };

    return (
        <div>
            <section id="contact">
                <div className='container my-5 py-5'>
                    <div className='row mb-5'>
                        <div className='col-12'>
                            <h3 className='fs-5 text-center mb-0'>Contact Us</h3>
                            <h1 className='display-6 text-center mb-4'> Have Some <b> Questions? </b></h1>
                            <hr className='w-25 mx-auto' />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <img src='https://media.istockphoto.com/vectors/man-in-call-center-support-customer-support-answering-questions-vector-id1290300704?b=1&k=20&m=1290300704&s=612x612&w=0&h=t_kRmQV4nDlx5AT0nRIT6l9kO0-auH0Me4askf-upnQ=' alt="Contact" className='w-75' />
                        </div>
                        <div className='col-md-6'>
                            <form onSubmit={handleSubmit}>
                                <div class="mb-3">
                                    <label for="name" class="form-label">Your Name</label>
                                    <input name="ename" value={user.ename} onChange={handleInput} type="text" class="form-control" id="name" placeholder="Enter Your Name" />
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label">E-mail Address</label>
                                    <input name="eemail" value={user.eemail} onChange={handleInput} type="text" class="form-control" id="email" placeholder="Enter Your E-mail" />
                                </div>
                                <div class="mb-3">
                                    <label for="message" class="form-label">Your Message</label>
                                    <textarea name="emessage" value={user.emessage} onChange={handleInput} class="form-control" id="message" rows="5" placeholder="Enter Your Message"></textarea>
                                </div>
                                <button type="submit" className='btn btn-success'>
                                    Send Message <i className='fa fa-paper-plane ms-2' />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;