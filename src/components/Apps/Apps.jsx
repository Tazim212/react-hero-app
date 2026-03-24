import React, { useEffect, useState } from 'react';

const Apps = () => {
    const [appData, setAppData] = useState([])

    useEffect(() => {
        fetch('apps.json')
            .then(res => res.json())
            .then(data => setAppData(data))
    }, [])

    return (
        <div>
            <h1 className='my-4 text-2xl text-center font-bold'>Our All Applications</h1>
            <p className='text-center mb-3'>Explore All Apps on the Market developed by us. We code for Millions</p>

            <div className='flex justify-between mx-8 my-4'>
                <h3>({appData.length}) apps found</h3>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search" />
                </label>
            </div>
        </div>
    );
};

export default Apps;