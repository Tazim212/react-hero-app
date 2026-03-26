import React from 'react';
import { FaCloudDownloadAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const AppCard = ({ app }) => {

    const { title, image, ratingAvg, downloads, id } = app

    return (
        <Link to={`/appdetails/${id}`}>
            <div className="card bg-gray-300 h-[370px] w-[270px] shadow-sm my-4 mx-auto text-black 
            transition delay-150 duration-400 ease-in-out hover:-translate-x-1 hover:scale-105 hover:bg-gray-300">

                <img
                    src={image}
                    className='py-3 px-3'
                    alt="Shoes" />

                <div className="mx-3 my-1">
                    <div className='flex justify-between items-center gap-3'>
                        <h2 className="text-xl font-semibold">{title}</h2>
                        <div className="badge badge-accent text-center"><FaCloudDownloadAlt className='text-xl' /> {downloads}</div>
                    </div>
                    <p className='flex items-center gap-2 pt-2'><FaStar></FaStar> {ratingAvg}</p>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;