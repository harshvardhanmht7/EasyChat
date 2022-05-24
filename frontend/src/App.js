import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Homescreen from './screens/Homescreen';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ContactMessageScreen from './screens/ContactMessageScreen';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
      <Route path='/messages/contactmessage/:ReceiverEmail' element={<ContactMessageScreen/>} exact/>
      <Route path='/login' element={<LoginScreen/>}/>
      <Route path='/adduser' element={<RegisterScreen/>}/>
      
                 
      <Route  path='/' element={<Homescreen/>} exact />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
