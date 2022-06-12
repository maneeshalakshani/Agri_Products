import React, { Component } from 'react'

class Billing extends Component {

    constructor(props) {
        super(props)
          
        this.state = {
           mobile : " ",
           amount: " ",
        }
    }

    handleMobileNo = (event) => {
        this.setState({
            mobile: event.target.value
        })
    }

    handlePin = (event) => {
        this.setState({
            pin: event.target.value
        })
    }

    handleAmount = (event) => {
        this.setState({
            amount: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`Mobile No : ${this.state.mobile} & Amount : ${this.state.amount}`)
        event.preventDefault()
    }

    postData = async (e) => {
        e.preventDefault();
        const {mobile, amount} = this.state;

        const res = await fetch("http://localhost:5100/api", {
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

        const res2 = await fetch("http://localhost:5100/api/sendOTP", {
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
        if(res.status === 404 || !data){
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
                <form method='POST' className='billCard mpay-col-2' onSubmit={this.postData}>
                    <h2 className='formTitle'>Mobile Pay</h2>
                    <div>
                        <label className='label'>Enter Mobile Number</label>
                        <input type='tel' id='mobile' value={this.state.mobile} name='mobile' required placeholder='enter number' onChange={this.handleMobileNo} size='30' minLength='12' maxLength='12' />
                    </div>
                    <div>
                        <label>Charging Amount</label>
                        <input type='text' id='amount' name='amount' value={this.state.amount} required placeholder='enter amount' onChange={this.handleAmount} size='30' />
                    </div>
                    {/* <div>
                        <label>Pin Number</label>
                        <input type='text' id='pin' name='pin' value={this.state.pin} required placeholder='enter pin number' size='30' onChange={this.handlePin} minLength='6' maxLength='6' />
                    </div> */}
                    <div>
                        <label />
                        <button className='billbutton next' type='submit' >Get OTP</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Billing
