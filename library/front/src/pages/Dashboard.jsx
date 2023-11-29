import {AppBar,Toolbar,Button,TextField} from '@mui/material';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Dashboard(){

    //Navigator
    const navigate = useNavigate();

    //Read
    const [books,setBooks] = useState();

    //Add 
    const [title,setTitle] = useState();
    const [author,setAuthor] = useState();
    const [isbn,setIsbn] = useState();
    const [genre,setGenre] = useState();
    const [publication_year,setPublication_year] = useState();
    const [publisher,setPublisher] = useState();
    const [description,setDescription] = useState();
    const [total_copies,setTotal_copies] = useState();

    //Update
    const [uid,setuId] = useState();
    const [utitle,setuTitle] = useState();
    const [uauthor,setuAuthor] = useState();
    const [uisbn,setuIsbn] = useState();
    const [ugenre,setuGenre] = useState();
    const [upublication_year,setuPublication_year] = useState();
    const [upublisher,setuPublisher] = useState();
    const [udescription,setuDescription] = useState();
    const [utotal_copies,setuTotal_copies] = useState();


    

    return (
        <div>
             <AppBar position='absolute'>
                <Toolbar className='bg-dark text-light'>
                    <h4 className='mx-5'>Library</h4>
                    <Button className='text-info' href='/dashboard'>Dashboard</Button>
                </Toolbar>
            </AppBar>
        


        <div className="add-form" style={{marginTop:'20vh'}}>
            <span className='display-6'>Add Book</span>
            <TextField type='text' size='small' variant='standard' placeholder="Title" required={true} onChange={(e)=>setTitle(e.target.value)}/>
            <TextField type='text' size='small' variant='standard' placeholder="Author" required={true} onChange={(e)=>setAuthor(e.target.value)}/>
            <TextField type='text' size='small' variant='standard' placeholder="Description" required={true} onChange={(e)=>setDescription(e.target.value)}/>
            <TextField type='text' size='small' variant='standard' placeholder="Isbn" required={true} onChange={(e)=>setIsbn(e.target.value)}/>
            <TextField type='text' size='small' variant='standard' placeholder="Genre" required={true} onChange={(e)=>setGenre(e.target.value)}/>
            <TextField type='text' size='small' variant='standard' placeholder="Publisher" required={true} onChange={(e)=>setPublisher(e.target.value)}/>
            <TextField type='date' size='small' variant='standard' placeholder="Publication Year" required={true} onChange={(e)=>setPublication_year(e.target.value)}/>
            <TextField type='number' size='small' variant='standard' placeholder="Total Copies" required={true} onChange={(e)=>setTotal_copies(e.target.value)}/>
        </div>






        </div>
    );
}   

export default Dashboard;