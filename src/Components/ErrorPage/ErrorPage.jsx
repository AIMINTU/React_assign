import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center text-2xl font-bold'>
            <h1>this page is not valid</h1>
            <Link to='/'><button>Go to home</button></Link>
        </div>
    );
};

export default ErrorPage;