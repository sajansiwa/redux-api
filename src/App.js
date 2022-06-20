import React, { useState, Suspense, lazy  } from 'react';
import HeaderComponent from './components/Header';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const AboutPage = lazy(() => import('./components/AboutUs'));
const LoginPage = lazy(() => import('./components/LoginPage'));
const ContactPage = lazy(() => import('./components/Contact'));
const Home = lazy(() => import('./components/Homepage'));

function App() {
  const [user, setUser] = useState(null);

  return ( 
    <BrowserRouter>
      <Suspense fallback={<div>loading....</div>}>
      <HeaderComponent/>
        <Routes>
          {!user && (
            <Route path ="/" element={<LoginPage authenticate={() => setUser(true)}/>}/>
            
            )}

          {user &&(
            <>
          <Route path ="/components/Homepage" element={<Home logoutStatus={() => setUser(false)}/>}/>
          <Route path ="/components/AboutUs" element={<AboutPage/>}/>
          <Route path ="/components/Contact" element={<ContactPage/>}/>
          </>
          )}

      <Route path ="*" element={<Navigate to={user ? "/components/Homepage" : "/"}/>}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
