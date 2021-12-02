import React from 'react'
import { Outlet } from 'react-router';

const PublicRoute = ({ children, ...rest }) => {
    const { isAuthenticated, } = useSelector(state => state.auth);
    const navigate= useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    useEffect(() => {
        if (!isAuthenticated){
            navigate("/");
            dispatch(setFromUrl(location.pathname));
            dispatch(showDialog());
        }

        
    }, [dispatch, location, isAuthenticated, navigate])
    
    return <Outlet />;
}

export default PublicRoute
