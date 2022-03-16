import React,{useEffect,Fragment} from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes  } from 'react-router-dom';
import './App.css';
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import Product from './containers/Product'
import Orders from './containers/Orders'
import PrivateRoute from './components/HOC';
import { isUserLoggedIn } from './actions/auth.action';
import { useDispatch, useSelector } from 'react-redux';
import Category from './containers/category';
import Create from './containers/Product/create';
import { getAllCategory } from './actions';
import { getinitialData } from './actions/initaldata.action';


function App() {

const dispatch = useDispatch()
const auth = useSelector(state => state.auth)
  useEffect(()=>{

    if(!auth.authenticate){
      dispatch(isUserLoggedIn())
    }

    dispatch(getinitialData())
   
  },[]);

  return (
    <div className="App">
 <Router> 
 <Fragment>
   <Routes>

   <Route exact path='/' element={<PrivateRoute/>}>
      <Route exact path='/' element={<Home/>}/>
   </Route>

   <Route exact path='/product' element={<PrivateRoute/>}>
      <Route exact path='/product' element={<Product />}/>
   </Route>
   <Route exact path='/product/create' element={<PrivateRoute/>}>
      <Route exact path='/product/create' element={<Create />}/>
   </Route>

   <Route exact path='/order' element={<PrivateRoute/>}>
      <Route exact path='/order' element={<Orders />}/>
   </Route>

   <Route exact path='/category' element={<PrivateRoute/>}>
      <Route exact path='/category' element={<Category />}/>
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
