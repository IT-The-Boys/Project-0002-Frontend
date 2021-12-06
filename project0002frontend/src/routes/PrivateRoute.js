import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate, useLocation, Outlet } from 'react-router-dom'
import { showPopup } from 'store/app/appSlice';
import { setToUrl } from 'store/auth/authSlice';

const PrivateRoute = () => {
    const { isAuthenticated, } = useSelector(state => state.auth);
    const navigate= useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    useEffect(() => {
        if (!isAuthenticated){
            navigate(-1);
            dispatch(setToUrl(location.pathname));
            dispatch(showPopup("authPopup"));
        }

        
    }, [dispatch, location, isAuthenticated, navigate])
    
    return <Outlet />;
}

export default PrivateRoute
