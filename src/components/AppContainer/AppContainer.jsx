import React, { useEffect, useState } from 'react';
import AppCard from '../AppCard/AppCard';
import { Link } from 'react-router';

const AppContainer = () => {

    const [apps, setApps] = useState([]);

    useEffect(() => {
        fetch("apps.json")
            .then(res => res.json())
            .then(data => setApps(data))
    }, [])
 
    const handleSorting = e => {
        const sortInput = e.target.value;
        const sortValue = [...apps]

        if (sortInput === "highToLow") {
            sortValue.sort((a, b) => b.downloads - a.downloads)
        }
        else if (sortInput === "lowToHigh") {
            sortValue.sort((a, b) => a.downloads - b.downloads)
        }
        setApps(sortValue)
    }

    return (
        <div>
            <h1 className='my-4 text-2xl text-center font-bold'>Trending Apps</h1>
            <p className='text-center mb-3'>Explore All Trending Apps on the Market developed by us</p>

            <div className='text-center my-4'>
                <select defaultValue="Sort By" onChange={handleSorting} className="select bg-gray-400 text-white">
                    <option disabled={true}>Sort By</option>
                    <option value="highToLow">High To Low</option>
                    <option value="lowToHigh">Low To High</option>
                </select>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-4'>
                {
                    apps.slice(0, 8).map(app => <AppCard
                        key={app.id}
                        app={app}>
                    </AppCard>)
                }
            </div>
            <div className='text-center mb-4'>
                <Link to='/apps'><button className='btn btn-secondary text-center px-8'>Show All</button></Link>
            </div>
        </div>
    );
};

export default AppContainer;