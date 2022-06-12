import React, { Component } from 'react'

class Otp extends Component {

    constructor(props) {
        super(props)
          
        this.state = {
           pin: " ",
           mobile : " ",
           amount: " ",
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

    // handleSubmit = (event) => {
    //     alert(`Your Pin :  ${this.state.pin}`)
    //     event.preventDefault()
    // }
    postData = async (e) => {
        e.preventDefault();
        const {mobile, amount, pin} = this.state;

        const res2 = await fetch("http://localhost:3100/api/mobilepay/sendData", {
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
        if(res2.status === 404 || !data){
            window.alert("Data Not added");
            console.log("Data Not added");
        }else{
            window.alert("Data added");
            console.log("Data added");
        }
    }


    render() {    
        return (
            <div>
                <form method='POST'  className='billCard mpay-col-1' onSubmit={this.postData}>
                    <h2 className='formTitle'>Enter OTP</h2>
                    <div>
                        <label className='label'>Enter Mobile Number</label>
                        <input type='tel' id='mobile' value={this.state.mobile} name='mobile' required placeholder='enter number' onChange={this.handleMobileNo} size='30' minLength='12' maxLength='12' />
                    </div>
                    <div>
                        <label>Charging Amount</label>
                        <input type='text' id='amount' name='amount' value={this.state.amount} required placeholder='enter amount' onChange={this.handleAmount} size='30' />
                    </div>
                    <div>
                        <label>Pin Number</label>
                        <input type='text' id='pin' name='pin' value={this.state.pin} required placeholder='enter pin number' size='30' onChange={this.handlePin} minLength='6' maxLength='6' />
                    </div>
                    <div>
                        <label />
                        <button className='billbutton otp' type='submit'>Pay Bill</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Otp;
