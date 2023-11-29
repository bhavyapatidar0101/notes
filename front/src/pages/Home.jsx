import {Button,AppBar,Toolbar,Box,Typography, Input} from '@mui/material';
import { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import CourseService from '../services/CourseService';


function Home(){

    const [name,setname] = useState("");
    const [description,setdescription] = useState("");
    const [duration,setduration] =useState("");
    const [price,setprice] = useState();
    const navigate = useNavigate();
    const [courses,setcourses] = useState([]);
    const [uid,setuid] = useState();
    const [uname,setuname] = useState("");
    const [udescription,setudescription] = useState("");
    const [uduration,setuduration] = useState("");
    const [uprice,setuprice] = useState();

    useEffect(()=>{
        CourseService.getAll().then((r)=>{

            console.log(r.data);
            setcourses(r.data);
        }).catch((e)=>{
            console.log(e);
        })
    },[]);

    function editHandler(course){
            setuid(course.id);
            setuname(course.name);
            setudescription(course.description);
            setuduration(course.duration);
            setuprice(course.price);
    }
    function updateHandler(){
        let data = {
            "id":uid,
            "name":uname,
            "description":udescription,
            "duration":uduration,
            "price":uprice
        }
        CourseService.update(data).then((r)=>{
            console.log(r.data);
            window.location.reload();
        }).catch((e)=>{
            console.log(e);
        });
    }

    function addHandler(){
        let data = {
            "name": name,
            "description":description,
            "duration":duration,
            "price":price
        }
        CourseService.add(data).then((r)=>{
            console.log(r.data);
            window.location.reload();
        }).catch((e)=>{
            console.log(e);
        });
    }

    function deleteHandler(id){
        CourseService.delete(id).then((r)=>{
            console.log(r.data);
            window.location.reload();
        }).catch((e)=>{
            console.log(e);
        });
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

            <form className='my-5 pt-5'>
                <Input type='text' placeholder='name' required onChange={(e)=>{setname(e.target.value)}}/>
                <Input type='text' placeholder='Description' required onChange={(e)=>{setdescription(e.target.value)}}/>
                <Input type='text' placeholder='Duration' required onChange={(e)=>{setduration(e.target.value)}}/>
                <Input type='number' placeholder='Price' required onChange={(e)=>{setprice(e.target.value)}}/>

                <Button variant='filled' onClick={()=>{addHandler()}}>Add</Button>
            </form>

            <table className='table table-dark'>

            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Duration</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {courses.map((c)=>(
                        uid===c.id ?
                    <tr>
                        <td><Input type="number" defaultValue={c.id} onChange={(e)=>{setuid(e.target.value)}}/></td>
                        <td><Input type="text" defaultValue={c.name} onChange={(e)=>{setuname(e.target.value)}}/></td>
                        <td><Input type='text' defaultValue={c.description} onChange={(e)=>{setudescription(e.target.value)}}/></td>
                        <td><Input type='text' defaultValue={c.duration} onChange={(e)=>{setuduration(e.target.value)}}/></td>
                        <td><Input type='number' defaultValue={c.price} onChange={(e)=>{setuprice(e.target.value)}}/></td>
                        <td><Button variant='filled' onClick={()=>{updateHandler()}} >Update</Button></td>
                    </tr>



                        :
                    <tr>
                        <td>{c.id}</td>
                        <td>{c.name}</td>
                        <td>{c.description}</td>
                        <td>{c.duration}</td>
                        <td>{c.price}</td>
                        <td><Button onClick={()=>{deleteHandler(c.id)}}>Delete</Button>
                        <Button onClick={()=>{editHandler(c)}}>Edit</Button></td>
                    </tr>
                ))}
            
            </tbody>

            </table>
        </div>
    );
}
export default Home;