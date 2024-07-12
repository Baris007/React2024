import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import {BrowserRouter, Route , Link} from 'react-router-dom';
import Bookingscreen from './screens/Bookingscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';

function App() {
  return(
    <div className='App'>
      <Navbar></Navbar>
      <BrowserRouter>

      <Route path="/" exact component={Homescreen}></Route>
      <Route path="/book" exact component={Bookingscreen}></Route>
      <Route path="/register" exact component={Registerscreen}></Route>
      <Route path="/login" exact component={Loginscreen}></Route>
      
      </BrowserRouter>

    </div>
  )
  
}

export default App;