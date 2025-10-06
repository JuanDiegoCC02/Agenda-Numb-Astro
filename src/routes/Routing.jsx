
  import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Register from '../pages/Register'
import LogIn from '../pages/LogIn';
import ContactUs from '../pages/ContactUs';
import TaskFormPag from '../pages/TaskFormPag';
import News from '../pages/News';
import Profile from '../pages/Profile';

function Routing() {
  return (
     <Router>
        <Routes>
             <Route path = '/register' element = {<Register/>}/> 
             <Route path = '/login' element = {<LogIn/>}/> 
             <Route path = '/' element = {<Home/>}/> 
             <Route path = '/contact' element = {<ContactUs/>}/>
             <Route path = '/taskForm' element = {<TaskFormPag/>}/>  
             <Route path = '/news' element = {<News/>}/> 
             <Route path = '/profile' element = {<Profile/>}/> 

     </Routes>
   </Router>
  )
}

export default Routing



