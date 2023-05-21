import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="spinner-border" role="status">
            <div className='text-center h-40'>
                <progress className="progress w-56"></progress>
            </div>

        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} relative={true}></Navigate>
};

export default PrivateRoutes;