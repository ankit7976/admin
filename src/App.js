import React from 'react'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import PrivateRoutes from './components/HOC';

function App() {
  return (
    <div className="App">
 <Router>
  <Layout>
   <Routes>
     <PrivateRoutes path='/' exact element={<Home />} />
     <Route path='/signup' element={<Signup />} />
     <Route path='/signin' element={<Signin />} />
   </Routes>
   </Layout>
 </Router>
 </div>
  );
}

export default App;
