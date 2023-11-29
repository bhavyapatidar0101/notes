import {AppBar,Toolbar,Button} from '@mui/material';



function Home(){
    return (
        <div>
            
            <AppBar>
                <Toolbar className='bg-dark text-light'>
                    <h4 className='mx-5'>Library</h4>
                    <Button className='text-light' href='/dashboard'>Dashboard</Button>
                </Toolbar>
            </AppBar>

            <div style={{width:'75vw', marginTop:'30vh',marginLeft:'auto',marginRight:'auto'}} className='d-flex flex-column justify-content-center align-items-start'>
                <span className='display-4 my-5'>Welcome to Library</span>
                <div>Library is your dedicated platform for managing and optimizing your writing journey. Whether you're a seasoned author with an extensive bibliography or someone just starting to craft their literary masterpiece, our software is tailored to meet the unique needs of authors like you.</div>
            </div>




        </div>
    );
}

export default Home;