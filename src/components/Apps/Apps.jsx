import React, { useEffect, useState } from 'react';
import AllApps from '../AllApps/AllApps';
import { FaCloudDownloadAlt, FaStar } from 'react-icons/fa';

const Apps = () => {
    const [appData, setAppData] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch('apps.json')
            .then(res => res.json())
            .then(data => setAppData(data))
    }, [])

    const filteredData = appData.filter(app => app.title.toLowerCase().includes(search.toLowerCase()))
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
                    <input onChange={(e) => setSearch(e.target.value)} type="search" required placeholder="Search" />
                </label>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-4'>
                {
                    filteredData.length > 0 ? filteredData.map(app =><AllApps key={app.id} app={app}></AllApps> )
                        :
                        <p>No Apps Found</p>
                }
            </div>
            {/* <div className='grid grid-cols-1 md:grid-cols-4'>
                {
                    appData.map(app => <AllApps key={app.id} app={app}></AllApps>)
                }
            </div> */}
        </div >
    );
};

export default Apps;