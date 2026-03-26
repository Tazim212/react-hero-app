import React from 'react';
import err from '../../assets/App-Error.png'
import { Link } from 'react-router';

const AppError = () => {
    return (
        <div>
            <img src={err} className='w-72 h-64 mx-auto' alt="" />
            <h1 className='text-center text-2xl py-4 font-bold'>Apps Not Found</h1>
            <p className='text-center pb-5'>The app you are looking for is not here or no longer available</p>
            <div className='text-center mb-5'>
                <Link to="/"><button className='btn btn-neutral'>Back To Home</button></Link>

            </div>
        </div>
    );
};

export default AppError;