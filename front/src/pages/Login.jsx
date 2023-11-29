import {Button,AppBar,Toolbar,Box,Typography,Input} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../services/UserService';

function Login(){

    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const navigate = useNavigate();
    const [error,seterror] = useState();

    function validateEmail(){
        var re = /\S+@\S+\.\S+/;
        let validornot =  re.test(email);
        if(validornot){
            return true;
        }
        seterror("Invalid E-mail");
        return false;
    }
    
    
    function loginHandler(){
        if(validateEmail()){
        

        
        let data = {
            "email":email,
            "password":password
        }
        UserService.login(data).then((r)=>{
            console.log(r.data);
            if (r.data == true){
            navigate('/home');}
            else{
                alert("invalid credentials");

            }
        }).catch((e)=>{
            console.log(e);
            alert("invalid credentials");
        });
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

            <form style={{'marginTop':'30vh'}} className='d-flex flex-row align-items-center justify-content-center'>
                <span className='display-4 mx-5'>Login</span>

                <Input className='mx-5' type='email' placeholder='Email' required onChange={(e)=>{setemail(e.target.value)}}/>
                <Input className='mx-5' type='password' placeholder='password' required onChange={(e)=>{setpassword(e.target.value)}}/>
                <div className='text-danger'>{error}</div>
                <Button className='mx-5' variant='outlined' onClick={()=>{loginHandler()}}>Login</Button>

            </form>
        </div>
    );
}
export default Login;