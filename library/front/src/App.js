import logo from './logo.svg';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
