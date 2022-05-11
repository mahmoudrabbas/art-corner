import React, { Component } from 'react';
import  Joi  from 'joi-browser';
import { Link } from 'react-router-dom';
import './Sign.css'
class Sign extends Component {
    state = {
        name:"",
        email:"",
        password:"",
        account_type:"",
        birth_year:"",
        isAgreed:false,
        errors:{}
    }

    changeHandle = (e) => {
        let state = {...this.state};
        state[e.currentTarget.name] = e.currentTarget.value;
        this.setState(state);
    }

    checkedHandle = (e) => {
        this.setState({
            isAgreed:e.target.checked
        });
    }

    schema = {
        name:Joi.string().required(),
        email:Joi.string().email().required(),
        password:Joi.string().required(),
        birth_year:Joi.number().integer().max(2004).required(),
        account_type:Joi.string().required(),
    }

    validate = () => {
        const errors={};
        const state = {...this.state};
        delete state.errors;
        delete state.isAgreed;


        const valid = Joi.validate(state,this.schema,{abortEarly:false});
        // console.log(valid)
        if(valid.error == null) {
            this.setState({errors:{}})
            return null;
        }    

        for(let err of valid.error.details){
            errors[err.path] = err.message;
        }
        if(!this.state.isAgreed){
            errors.isAgreed = 'agree to our policy';
        }
        if(this.state.account_type === '-1'){
            errors.account_type = 'choose the account type!';
        }
        this.setState({errors});
    }
    
    submitHandle = (e) => {
        e.preventDefault();
        const error = this.validate();
        if(error === null){
            // call backend
            this.props.history.replace('/gallary');
        }
    }


    selectHandling = (e) => {
        this.setState({account_type:e.target.value})
    }

    render() { 
        return (
            <div className='container2'>
                <form className='my-form'>
                    <h3>Sign up</h3>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input 
                            type="text" 
                            name='name' 
                            onChange={this.changeHandle} 
                            value={this.state.name} 
                            className="form-control" 
                            id="name" 
                            aria-describedby="nameHelp" />
                        {this.state.errors.name?<div id="nameHelp" className="form-text">Please enter your name correct</div>:""}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email Addres</label>
                        <input 
                            type="select" 
                            name='email' 
                            onChange={this.changeHandle} 
                            value={this.state.email} 
                            className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" />
                        {this.state.errors.email?<div id="emailHelp" className="form-text">Please enter your email correct</div>:""}
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
                        {this.state.errors.password?<div id="passwordHelp" className="form-text">Please enter your password correct</div>:""}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="birth_year" className="form-label">Year of birth</label>
                        <input 
                            type="number"
                            name='birth_year' 
                            onChange={this.changeHandle} 
                            value={this.state.birth_year} 
                            className="form-control"
                            id="birth_year" 
                            aria-describedby="ageHelp"/>
                        {this.state.errors.birth_year?<div id="ageHelp" className="form-text">make sure you are 18 or older!</div>:""}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="account_type" className="form-label">Account type</label>
                        <select name='account_type' onChange={this.selectHandling} className="form-select" aria-label="Default select example">
                            <option value='-1'>Artist or User account?</option>
                            <option value="artist">Artist</option>
                            <option value="user">User</option>
                        </select>
                        {this.state.errors.account_type?<div id="usernameHelp" className="form-text">Choose which account kind you want!</div>:""}
                    </div> 
                    <div className="mb-3 form-check">
                        <input 
                            type="checkbox" 
                            name='isAgreed' 
                            onChange={this.checkedHandle} 
                            checked={this.state.isAgreed} 
                            className="form-check-input" 
                            id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">I've agreed to the terms and privacy policy.</label>
                    </div>
                    {this.state.errors.isAgreed?<div id="usernameHelp" className="form-text">You should agree to our policy!</div>:""}
                    <br></br>
                    <button onClick={this.submitHandle} type="submit" className="btn">Submit</button>
                    <span className='btn-q m-3'><Link to='/login'>Already have an account?</Link></span>
                    </form>

            </div>
        );
    }
}

export default Sign;