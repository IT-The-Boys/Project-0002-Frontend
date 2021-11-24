import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  Navigate, useNavigate, useLocation, Outlet } from 'react-router-dom'
import { recordFromUrl, showDialog } from 'store/auth/authSlice';

const PrivateRoute = () => {
    const { isAuthenticated, } = useSelector(state => state.auth);
    const navigate= useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    useEffect(() => {
        if (!isAuthenticated){
            navigate("/");
            dispatch(recordFromUrl(location.pathname));
            dispatch(showDialog());
        }

        
    }, [dispatch, location, isAuthenticated, navigate])
    
    return <Outlet />;
}

export default PrivateRoute
