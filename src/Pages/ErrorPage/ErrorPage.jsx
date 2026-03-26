import React from 'react';
import errImg from "../../assets/error-404.png"
import { Link } from 'react-router';

const ErrorPage = () => {

    return (
        <div className='bg-white pt-10 pb-4'>
            <img src={errImg} className='mx-auto' alt="" />
            <h1 className='text-3xl font-bold text-center text-black'>Oops Page Not Found..</h1>
            <div className='text-center mt-7'>
                <Link to="/" className='text-center'><buttton className="btn btn-primary">Back to home</buttton></Link>
            </div>
        </div>
    );
};

export default ErrorPage;