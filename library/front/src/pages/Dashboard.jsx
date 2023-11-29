import {AppBar,Toolbar,Button,TextField} from '@mui/material';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BookService from '../services/BookService';

function Dashboard(){

    //Navigator
    const navigate = useNavigate();

    //error
    const[error,setError] = useState();
    const[error2,setError2] = useState();

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

    //details
    const [did,setdId] = useState(-1);
    const [dtitle,setdTitle] = useState();
    const [dauthor,setdAuthor] = useState();
    const [disbn,setdIsbn] = useState();
    const [dgenre,setdGenre] = useState();
    const [dpublication_year,setdPublication_year] = useState();
    const [dpublisher,setdPublisher] = useState();
    const [ddescription,setdDescription] = useState();
    const [dtotal_copies,setdTotal_copies] = useState();
    const [detailid,setdetailid] = useState();

    //details
    let handleDetails = () => {
        BookService.get(detailid).then((r)=>{
            console.log(r);
            if(r.data.id!=0){
                setdId(r.data.id);
                setdTitle(r.data.title);
                setdAuthor(r.data.author);
                setdIsbn(r.data.isbn);
                setdGenre(r.data.dgenre);
                setdPublication_year(r.data.publication_year);
                setdPublisher(r.data.publisher);
                setdDescription(r.data.description);
                setdTotal_copies(r.data.total_copies);
            }
            else{
                console.log("empty");
            }
        }).catch((e)=>{
            console.log(e);
        });
    }

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
        if (utitle.length == 0 ){
            setError2("Title cannot be empty");
            return;
        }
        if (uauthor.length == 0 ){
            setError2("Author cannot be empty");
            return;
        }
        if (udescription.length == 0 ){
            setError2("Description cannot be empty");
            return;
        }
        if (uisbn.length == 0){
            setError2("ISBN cannot be empty");
            return;
        }
        if (ugenre.length == 0){
            setError2("Genre cannot be empty");
            return;
        }
        if (upublication_year ==  null|| upublication_year == undefined){
            setError2("Publication Year cannot be empty");
            return;
        }
        if (upublisher.length == 0){
            setError2("Publisher cannot be empty");
            return;
        }
        if (utotal_copies == 0){
            setError2("Total copies cannot be zero");
            return;
        }
        setError2("");
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
        

        <div className='mt-5 py-5 mx-5'>
            <div className='d-flex flex-row justify-content-start align-items-center'>            
            <TextField type='number' variant='standard' label="id" onChange={(e)=>{setdetailid(e.target.value)}} />
            <Button onClick={()=>{handleDetails()}}>Get</Button>
            </div>

           
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
                {(did == detailid ? 
                    <tr>
                        <td>{did}</td>
                        <td>{dtitle}</td>
                        <td>{dauthor}</td>
                        <td>{ddescription}</td>
                        <td>{disbn}</td>
                        <td>{dgenre}</td>
                        <td>{dpublisher}</td>
                        <td>{dpublication_year}</td>
                        <td>{dtotal_copies}</td>
                    </tr>

: <div></div>  )}
                </tbody>

                </table>
                
        
        </div>
       

        <div className='px-5 py-5'>
            <div className='display-5 my-5'>Details</div>
            <div className='text-danger mb-5'>{error2}</div>
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



        <div className="add-form px-5 pt-5" style={{marginTop:'20vh'}}>
            <span className='display-5'>Add Book</span>
            <div className=' d-flex flex-row align-items-center justify-content-between mt-5'>
            <TextField type='text' size='small' variant='standard' placeholder="Title" required={true} onChange={(e)=>setTitle(e.target.value)}/>
            <TextField type='text' size='small' variant='standard' placeholder="Author" required={true} onChange={(e)=>setAuthor(e.target.value)}/>
            <TextField type='text' size='small' variant='standard' placeholder="Description" required={true} onChange={(e)=>setDescription(e.target.value)}/>
            <TextField type='text' size='small' variant='standard' placeholder="Isbn" required={true} onChange={(e)=>setIsbn(e.target.value)}/>
            <TextField type='text' size='small' variant='standard' placeholder="Genre" required={true} onChange={(e)=>setGenre(e.target.value)}/>
            <TextField type='text' size='small' variant='standard' placeholder="Publisher" required={true} onChange={(e)=>setPublisher(e.target.value)}/>
            <TextField type='date' size='small' variant='standard' placeholder="Publication Year" required={true} onChange={(e)=>setPublication_year(e.target.value)}/>
            <TextField type='number' size='small' variant='standard' placeholder="Total Copies" required={true} onChange={(e)=>setTotal_copies(e.target.value)}/>
            <Button variant='standard' onClick={()=>{handleAdd()}}>Add</Button>
            </div>
            <div className='text-danger mb-5'>{error}</div>
        </div>



        </div>
    );
}   

export default Dashboard;