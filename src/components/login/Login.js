import React, { Component } from 'react';
import './Login.css'
import  Joi  from 'joi-browser';
import { Link } from 'react-router-dom';


class Login extends Component {
    state = {
        email:"",
        password:"",
        errors:{},
        isRemembered:false
    }

    changeHandle = (e) => {
        let state = {...this.state};
        state[e.currentTarget.name] = e.currentTarget.value;
        this.setState(state);
    }

    checkedHandle = (e) => {
        this.setState({
            isRemembered:e.target.checked
        });
    }

    schema = {
        email:Joi.string().email().required(),
        password:Joi.string().required(),
    }

    validate = () => {
        const errors={};
        const state = {...this.state};
        delete state.errors;
        delete state.isRemembered;


        const valid = Joi.validate(state,this.schema,{abortEarly:false});
        console.log(valid)
        if(valid.error == null) {
            this.setState({errors:{}})
            return null;
        }    

        for(let err of valid.error.details){
            errors[err.path] = err.message;
        }

        this.setState({errors});
    }
    
    submitHandle = (e) => {
        e.preventDefault();
        const error = this.validate();
        if(error === null){
            this.props.history.replace("/gallary");
        }
    }

    render() { 
        return (
            <div className='container2'>
                <form className='my-form'>
                    <h3>Login</h3>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input 
                            type="email" 
                            name='email' 
                            onChange={this.changeHandle} 
                            value={this.state.email} 
                            className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" />
                        {this.state.errors.email?<div id="emailHelp" className="form-text">Please type your email.</div>:""}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input 
                            type="password" 
                            name='password' 
                            onChange={this.changeHandle} 
                            value={this.state.password} 
                            className="form-control" 
                            id="exampleInputPassword1" 
                            aria-describedby="passwordHelp"/>
                        {this.state.errors.password?<div id="passwordHelp" className="form-text">Please type your password.</div>:""}
                    </div>
                    <div className="mb-3 form-check">
                        <input 
                            type="checkbox" 
                            name='isRembered' 
                            onChange={this.checkedHandle} 
                            checked={this.state.isRemembered} 
                            className="form-check-input" 
                            id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                    </div>
                    <button onClick={this.submitHandle} type="submit" className="btn">Login</button>
                    <span className='btn'><Link to='/sign'>Create new account?</Link></span>
                    </form>
            </div>
        );
    }
}

export default Login;