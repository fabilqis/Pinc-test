import React from 'react'
import './index.css'
import axios from 'axios'
import swal from 'sweetalert'


class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:'',
            status : ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.submitHandle = this.submitHandle.bind(this)
    }

    handleChange(e){
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    submitHandle(e){
        e.preventDefault()
        axios
            .post('https://reqres.in/api/login', this.state)
            .then(res => { 
                swal('Good job!', 'Your login is success', 'success')
                return res

            })
            .catch (error => {
                console.log('Error :',error)     
            })
    }

    render() {
        return (
            <div className="center">
                <div className="card">
                    <h1> Login </h1>
                    {this.state.error && <p>{this.state.error}</p>}
                    <form onSubmit={this.submitHandle}>
                        <input
                            className="form-item"
                            placeholder="Email goes here..."
                            name="email"
                            type="email"
                            onChange={this.handleChange}
                        />
                        <input
                            className="form-item"
                            placeholder="Password goes here..."
                            name="password"
                            type="password"
                            onChange={this.handleChange}
                        />
                        <input
                            className="form-submit"
                            value="SUBMIT"
                            type="submit" 
                        />
                    </form>
                </div>
            </div>    
        )
    }
}

export default Login