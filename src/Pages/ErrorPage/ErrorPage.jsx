import React from 'react';
import errImg from "../../assets/error-404.png"

const ErrorPage = () => {
    return (
        <div className='bg-white'>
            <img src={errImg} alt="" />
        </div>
    );
};

export default ErrorPage;