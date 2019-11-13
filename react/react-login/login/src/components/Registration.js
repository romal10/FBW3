import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {saveRegistration} from '../actions'

 class Registration extends Component {

        constructor(props) {
            super(props)
        
            this.state ={
                userinfo:{
    
                username: '',
                age: '',
                password: ''
            },
            Redirect:false,
        }
   
    }

    handleUsername = (e)=>{
        this.setState ({
            userinfo: {
            ...this.state.userinfo,
            username: e.target.value
        }
    })
}

handleAge = (e)=>{
    this.setState ({
        userinfo: {
        ...this.state.userinfo,
        age: e.target.value
    }
})
}

handlePassword = (e)=>{
    this.setState ({
        userinfo: {
        ...this.state.userinfo,
        password: e.target.value
    }
})
}

handleForm =(e) => {
    e.preventDefault();

}
        

    render() {
        return (
            <div>
                <h1> Fill the form and register</h1>
                <form>
                    <label htmlFor='username'> Username</label>
                    <input username='username' type='text' placeholder='Write your Username' value={this.state.userinfo.username} onChange={this.handleUsername}/>

                    <label htmlFor='age'>Age:</label>
                    <input name='age' type='text' placeholder='Write your age' value={this.state.userinfo.age} onChange={this.handleAge}/>

                    <label htmlFor='password'>Password:</label>
                    <input name='password' type='password' placeholder='Write your password' value={this.state.userinfo.password} onChange={this.handlePassword}/>

                    <input type='submit' value='submit' />
                </form>
            </div>
        )
    }
}

const mapStateToProps = ( state) => { 
    console.log(state)
    return ({
        usersArray:state.userArray
    })
}

const mapDispatchToProps = (dispatch) => ({
    RegisterUser: (userinfo) => dispatch(saveRegistration(userinfo))
})

export default connect (mapStateToProps, mapDispatchToProps)(Registration)