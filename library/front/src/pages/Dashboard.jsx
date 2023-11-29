import {AppBar,Toolbar,Button,TextField} from '@mui/material';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BookService from '../services/BookService';

function Dashboard(){

    //Navigator
    const navigate = useNavigate();

    //error
    const[error,setError] = useState();


    //Read
    const [books,setBooks] = useState([]);

    //Add 
    const [title,setTitle] = useState("");
    const [author,setAuthor] = useState("");
    const [isbn,setIsbn] = useState("");
    const [genre,setGenre] = useState("");
    const [publication_year,setPublication_year] = useState();
    const [publisher,setPublisher] = useState("");
    const [description,setDescription] = useState("");
    const [total_copies,setTotal_copies] = useState(0);

    //Update
    const [uid,setuId] = useState(-1);
    const [utitle,setuTitle] = useState();
    const [uauthor,setuAuthor] = useState();
    const [uisbn,setuIsbn] = useState();
    const [ugenre,setuGenre] = useState();
    const [upublication_year,setuPublication_year] = useState();
    const [upublisher,setuPublisher] = useState();
    const [udescription,setuDescription] = useState();
    const [utotal_copies,setuTotal_copies] = useState();




    let handleGet = () => {
        BookService.getAll().then((r)=>{
            console.log(r.data);
            setBooks(r.data);
        }).catch((e)=>{
            console.log(e);
        });
    }


    let handleEdit = (b) => {
        setuId(b.id);
        setuTitle(b.title);
        setuAuthor(b.author);
        setuDescription(b.description);
        setuIsbn(b.isbn);
        setuGenre(b.genre);
        setuPublication_year(b.publication_year);
        setuPublisher(b.publisher);
        setuTotal_copies(b.total_copies);
    }



    let handleAdd = () => {

        if (title.length == 0 ){
            setError("Title cannot be empty");
            return;
        }
        if (author.length == 0 ){
            setError("Author cannot be empty");
            return;
        }
        if (description.length == 0 ){
            setError("Description cannot be empty");
            return;
        }
        if (isbn.length == 0){
            setError("ISBN cannot be empty");
            return;
        }
        if (genre.length == 0){
            setError("Genre cannot be empty");
            return;
        }
        if (publication_year ==  null|| publication_year == undefined){
            setError("Publication Year cannot be empty");
            return;
        }
        if (publisher.length == 0){
            setError("Publisher cannot be empty");
            return;
        }
        if (total_copies == 0){
            setError("Total copies cannot be zero");
            return;
        }
        setError("");
        let data = {
            'title':title,
            'author':author,
            'isbn':isbn,
            'genre':genre,
            'publication_year':publication_year,
            'publisher':publisher,
            'description':description,
            'total_copies':total_copies
        }
        BookService.add(data).then((r)=>{
            console.log(r.data);
            if(r.data == true){
                alert("Book Added");
                window.location.reload();
            }
            else{
                alert("Book Not Added")
            }
        }).catch((e)=>{
            console.log(e);
        });
    }


    let handleUpdate = () => {
        let data = {
            'id':uid,
            'title':utitle,
            'author':uauthor,
            'isbn':uisbn,
            'genre':ugenre,
            'publication_year':upublication_year,
            'publisher':upublisher,
            'description':udescription,
            'total_copies':utotal_copies
        }
        BookService.update(data).then((r)=>{
            console.log(r.data);
            if(r.data == true){
                alert("Book Updated");
                window.location.reload();
            }
            else{
                alert("Book Not Updated")
            }
        }).catch((e)=>{
            console.log(e);
        });
    }


    let handleDelete = (id) => {
        BookService.delete(id).then((r)=>{
            console.log(r.data);
            if(r.data == true){
                alert("Book Deleted");
                window.location.reload();
            }
            else{
                alert("Book Not Deleted")
            }
        }).catch((e)=>{
            console.log(e);
        });
    }


    useEffect(()=>{
        handleGet();
    },[]);




    return (
        <div>
             <AppBar position='absolute'>
                <Toolbar className='bg-dark text-light'>
                    <h4 className='mx-5'>Library</h4>
                    <Button className='text-info' href='/dashboard'>Dashboard</Button>
                </Toolbar>
            </AppBar>
        


        <div className="add-form px-5 pt-5" style={{marginTop:'20vh'}}>
            <span className='display-5'>Add Book</span>
            <div className=' d-flex flex-row align-items-center justify-content-between my-5'>
            <TextField type='text' size='small' variant='standard' placeholder="Title" required={true} onChange={(e)=>setTitle(e.target.value)}/>
            <TextField type='text' size='small' variant='standard' placeholder="Author" required={true} onChange={(e)=>setAuthor(e.target.value)}/>
            <TextField type='text' size='small' variant='standard' placeholder="Description" required={true} onChange={(e)=>setDescription(e.target.value)}/>
            <TextField type='text' size='small' variant='standard' placeholder="Isbn" required={true} onChange={(e)=>setIsbn(e.target.value)}/>
            <TextField type='text' size='small' variant='standard' placeholder="Genre" required={true} onChange={(e)=>setGenre(e.target.value)}/>
            <TextField type='text' size='small' variant='standard' placeholder="Publisher" required={true} onChange={(e)=>setPublisher(e.target.value)}/>
            <TextField type='date' size='small' variant='standard' placeholder="Publication Year" required={true} onChange={(e)=>setPublication_year(e.target.value)}/>
            <TextField type='number' size='small' variant='standard' placeholder="Total Copies" required={true} onChange={(e)=>setTotal_copies(e.target.value)}/>
            <Button variant='contained' onClick={()=>{handleAdd()}}>Add</Button>
            </div>
            <div className='text-danger'>{error}</div>
        </div>

        <div className='px-5 py-5'>
            <div className='display-5 my-5'>Details</div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Description</th>
                        <th>Isbn</th>
                        <th>Genre</th>
                        <th>Publisher</th>
                        <th>Year</th>
                        <th>Copies</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map((b)=>(
                            uid === b.id 
                            ?

                            <tr>
                                <td><TextField defaultValue={b.id} type='number' size='small' variant='standard' placeholder="Id" required={true} onChange={(e)=>setuId(e.target.value)} disabled={true}/></td>
                                <td><TextField defaultValue={b.title} type='text' size='small' variant='standard' placeholder="Title" required={true} onChange={(e)=>setuTitle(e.target.value)}/></td>
                                <td><TextField defaultValue={b.author} type='text' size='small' variant='standard' placeholder="Author" required={true} onChange={(e)=>setuAuthor(e.target.value)}/></td>
                                <td><TextField defaultValue={b.description} type='text' size='small' variant='standard' placeholder="Description" required={true} onChange={(e)=>setuDescription(e.target.value)}/></td>
                                <td><TextField defaultValue={b.isbn} type='text' size='small' variant='standard' placeholder="Isbn" required={true} onChange={(e)=>setuIsbn(e.target.value)}/></td>
                                <td><TextField defaultValue={b.genre} type='text' size='small' variant='standard' placeholder="Genre" required={true} onChange={(e)=>setuGenre(e.target.value)}/></td>
                                <td><TextField defaultValue={b.publisher} type='text' size='small' variant='standard' placeholder="Publisher" required={true} onChange={(e)=>setuPublisher(e.target.value)}/></td>
                                <td><TextField defaultValue={b.publication_year} type='date' size='small' variant='standard' required={true} onChange={(e)=>setPublication_year(e.target.value)}/></td>
                                <td><TextField defaultValue={b.total_copies} type='number' size='small' variant='standard' placeholder="Copies" required={true} onChange={(e)=>setuTotal_copies(e.target.value)}/></td>
                                <td>
                                    <Button onClick={()=>{handleUpdate()}}>Update</Button>
                                    <Button onClick={()=>{setuId(-1)}}>Cancel</Button>
                                </td>








                            </tr>
                            











                            :
                            <tr>
                                <td>{b.id}</td>
                                <td>{b.title}</td>
                                <td>{b.author}</td>
                                <td>{b.description}</td>
                                <td>{b.isbn}</td>
                                <td>{b.genre}</td>
                                <td>{b.publisher}</td>
                                <td>{b.publication_year}</td>
                                <td>{b.total_copies}</td>
                                <td>
                                    <Button onClick={()=>{handleEdit(b)}}>Edit</Button>
                                    <Button onClick={()=>{handleDelete(b.id)}}>Delete</Button>
                                </td>
                            </tr>


                        ))

                    }
                </tbody>
            </table>


        </div>




        </div>
    );
}   

export default Dashboard;