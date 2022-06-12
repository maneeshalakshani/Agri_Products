import React, { Component } from 'react'
import '../../styles/PhoneBill.css';

class Otp extends Component{
    
    constructor(props) {
        super(props)
         
        this.state = {
           pin: " ",
           mobile : " ",
           amount: '990',
           result: "",
        }
    }
    handleMobileNo = (event) => {
        this.setState({
            mobile: event.target.value
        })
    }

    handleAmount = (event) => {
        this.setState({
            amount: event.target.value
        })
    }

    handlePin = (event) => {
        this.setState({
            pin: event.target.value
        })
    }

    postData2 = async (e) => {
        e.preventDefault();
        const {mobile, amount, pin} = this.state;

        console.log("Form Pin : "+ pin);
        console.log("CORRECT OTP:" + this.state.result["OTP"]);

        if(pin == parseInt(this.state.result["OTP"])){
            const res2 = await fetch("http://localhost:5100/api/mobilepay/sendData", {
            // const res2 = await fetch("/sendData", {
                method: "post",
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    phone : mobile,
                    amount : amount,
                    pin : pin,
                })
            })

            const data = await res2.json();
            console.log("Message : "+data["Message"]);
            if(res2.status === 404 || !data){
                window.alert("Data Not added");
                console.log("Data Not added");
            }else{
                window.alert("Data added");
                console.log("Data added");
                window.alert(data["Message"]);
            }
        }else{
            window.alert("Wrong OTP");
        }    
    }

    postData = async (e) => {
        e.preventDefault();
        const {mobile, amount} = this.state;

        const res = await fetch("http://localhost:5100/api/mobilepay/", {
            method: "post",
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                phone : mobile,
                amount : amount,
                pin : amount,
            })
        })

        const res2 = await fetch("http://localhost:5100/api/mobilepay/sendOTP", {
            method: "post",
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                phone : mobile,
                amount : amount,
                pin : amount,
            })
        })

        const data = await res.json();
        this.state.result = await res2.json();
        if(res.status === 404 || !data){
            window.alert("Data Not added");
            console.log("Data Not added");
        }else{
            window.alert("Data added");
            console.log("Data added");
            console.log(this.state.result["OTP"]);
        }
    }


    render() {    
        return (
            <div className='mpay-row'>
                <div>
                    <form method='POST' className='billCard mpay-col-2' onSubmit={this.postData}>
                        <h2 className='formTitle'>Mobile Pay</h2>
                        <div>
                            <label className='label'>Enter Mobile Number</label>
                            <input type='tel' id='mobile' value={this.state.mobile} name='mobile' required placeholder='enter number' onChange={this.handleMobileNo} size='30' minLength='11' maxLength='11' />
                        </div>
                        <div>
                            <label />
                            <button className='billbutton next' type='submit' >Get OTP</button>
                        </div>
                    </form>
                </div>
                <div>
                    <form method='POST'  className='billCard' onSubmit={this.postData2}>
                        <h2 className='formTitle'>Enter OTP</h2>
                        <div>
                            <label className='label'>Enter Mobile Number</label>
                            <input type='tel' id='mobile' value={this.state.mobile} name='mobile' required placeholder='enter number' size='30' minLength='12' maxLength='12' readOnly />
                        </div>
                        <div>
                            <label>Charging Amount</label>
                            <input type='text' id='amount' name='amount' value={this.state.amount} required placeholder='enter amount' onChange={this.handleAmount} size='30' readOnly />
                        </div>
                        <div>
                            <label>Pin Number</label>
                            <input type='text' id='pin' name='pin' value={this.state.pin} required placeholder='enter pin number' size='30' onChange={this.handlePin} minLength='6' maxLength='7' />
                        </div>
                        <div>
                            <label />
                            <button className='billbutton otp' type='submit'>Pay Bill</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Otp;
