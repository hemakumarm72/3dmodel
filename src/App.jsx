import React, { Suspense } from 'react';
// import { BrowserRouter as Routes, Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ModelDemo from './ModelDemo';
import Model1 from './Model1';
// import Navbar from './components/utils/Navbar';
import ModelDemo3 from './ModelDemo3';

function Routers() {
  // const auth = JSON.parse(localStorage.getItem('token'));
  // console.log(auth);
  return (
    <Router>
      {/* <Navbar /> */}
      <Suspense fallback={<h1>Loading1....</h1>}>
        {/* <Header /> */}
        <Routes>
          <Route path='/3dModel' element={<ModelDemo />} />
          <Route exact path='/' element={<Model1 />} />
          <Route exact path='/3dModel1' element={<ModelDemo3 />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default Routers;
