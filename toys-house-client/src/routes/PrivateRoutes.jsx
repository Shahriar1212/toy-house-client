import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    console.log(user);

    if(loading){
        return <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    }

    if(user) {
        return children;
    }

    return <Navigate to='/login' relative={true}></Navigate>
};

export default PrivateRoutes;