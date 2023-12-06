import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import NavbarComp from '../Header/NavbarComp';
// import ResponsiveAppBar from '../ResponsiveAppBar';
// import Products from '../Products';
// import Navbar from '../Navbar';

const ProtectedRoute = () => {
    const auth = localStorage.getItem('token');
  return (
    <div>
        {
            auth ?
            <>
                <NavbarComp/>
                <Outlet/>
            </>
             :<Navigate to="/login"/>
        }
    </div>
  )
}

export default ProtectedRoute