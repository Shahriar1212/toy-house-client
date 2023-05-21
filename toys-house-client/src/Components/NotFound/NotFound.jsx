import React from 'react';
import './NotFound.css'
import useTitle from '../../hooks/useTitle';
const NotFound = () => {
    useTitle('404')
    return (
        <div>
            <div className='bg-image text-center'>
            </div>
        </div>
    );
};

export default NotFound;