import {Button,AppBar,Toolbar,Box,Typography, Input} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import UserService from '../services/UserService';

function Register(){

    const [first_name,setfirst_name] = useState("");
    const [last_name,setlast_name] = useState("");
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const [phone,setphone] = useState();
    const [error,seterror] = useState();
    const navigate = useNavigate();

    function validateFirstname(){
        if (first_name.length > 0){
            return true;
        }
        seterror("First name should not be empty");
        return false;
        
    }

    function validateLastname(){
        if(last_name.length>0){
            return true;
        }
        seterror("Last name should not be empty");
        return false;
    }
    function validateEmail(){
        var re = /\S+@\S+\.\S+/;
        let validornot =  re.test(email);
        if(validornot){
            return true;
        }
        seterror("Invalid E-mail");
        return false;
    }

    function validatePhone(){
        let re = /^\d{10}$/;
        let v =  re.test(phone);
        if (v){
            return true;
        }
        
        else{
            seterror("Invalid Phone");
            return false;
        }
    }

    function validatePassword(){
        let re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        let v =  re.test(password);
        if(v){
            return true;
        }
        else{
            seterror("Invalid Passoword");
            return false;
        }
    }
    function registerHandler(){

        if (validateFirstname() && validateLastname() && validateEmail() && validatePhone() && validatePassword()){
        let data = {
            "first_name": first_name,
            "last_name":last_name,
            "email":email,
            "password":password,
            "phone":phone
        }
        UserService.register(data).then((r)=>{
            console.log(r.data);
            alert("user added");
            navigate("/login");
        }).catch((e)=>{
            console.log(e);
        });
    }
    else{
        return;
    }
    }


    return(
        <div>
            <AppBar>
                <Toolbar className='d-flex flex-row justify-content-start align-items-center bg-dark text-light'>
                        <h3 className='mx-5'>SPORTSCLUB</h3>
                        <Button href="/home">Home</Button>
                        <Button href="/login">Login</Button>
                        <Button href="/register">Register</Button>
                </Toolbar>
            </AppBar>

            <form className='d-flex flex-column align-items-center justify-content-start mt-5 py-5'>
                <span className='display-4 my-3'>Registration</span>
                <Input type='text' placeholder='First Name' required onChange={(e)=>{setfirst_name(e.target.value)}}/>
                <Input type='text' placeholder='Last Name' required onChange={(e)=>{setlast_name(e.target.value)}}/>
                <Input type='email' placeholder='Email' required onChange={(e)=>{setemail(e.target.value)}}/>
                <Input type='password' placeholder='Password' required onChange={(e)=>{setpassword(e.target.value)}}/>
                <Input type='number' placeholder='Phone' required onChange={(e)=>{setphone(e.target.value)}}/>
                <div className='text-danger'>{error}</div>
                <Button onClick={()=>{registerHandler()}}>Register</Button>
            </form>
        </div>
    );
}
export default Register;