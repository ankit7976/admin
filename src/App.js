import React,{useEffect,Fragment} from 'react'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import PrivateRoute from './components/HOC';
import { isUserLoggedIn } from './actions/auth.action';
import { useDispatch, useSelector } from 'react-redux';


function App() {

const dispatch = useDispatch()
const auth = useSelector(state => state.auth)
  useEffect(()=>{

    if(!auth.authenticate){
      dispatch(isUserLoggedIn())
    }
   
  },[]);
  return (
    <div className="App">
 <Router> 
 <Fragment>
   <Routes>

   <Route exact path='/' element={<PrivateRoute/>}>
      <Route exact path='/' element={<Home/>}/>
   </Route>
   
     <Route path='/signup' element={<Signup />} />
     <Route path='/signin' element={<Signin />} />
   </Routes>
   </Fragment>
 </Router>
 </div>
  );
}

export default App;
