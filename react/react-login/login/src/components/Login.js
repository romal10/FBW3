import React, { Component } from 'react'
import  {Redirect} from 'react-router-dom'
import {connect } from 'react-redux'

export default class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             logininfo: {
                 username: '',
                 password: ''
             }
        }
    }

    handleUsername=(e)=>{
        this.setState({
            logininfo: { 
            ...this.state.logininfo,
            username:e.target.value
            }
        })
    }

    handlePassword=(e)=>{
        this.setState({
            logininfo: { 
            ...this.state.logininfo,
            password:e.target.value
            }
        })
    }

    handleForm =(e)=> {
        e.preventDefault ()
    }
    
    render() {
        return (
            <div>
                <h1>Fill the Data and login!!</h1>
                <form onSubmit={this.handleForm}>
                   
                    <label htmlFor='username'>Username:</label>
                    <input name='username' type='text'
                    placeholder='Write Your username'
                    value={this.state.logininfo.username}
                    onChange={this.handleUsername}/>

                    <label htmlFor='password'>Password:</label>
                    <input name='password' type='password'
                    placeholder='Type Your Password'
                    value={this.state.logininfo.password}
                    onChange={this.handlePassword}/>

                    <input type='submit' value='submit'/>

                </form>
            </div>
        )
    }
}
