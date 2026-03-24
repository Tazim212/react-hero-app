import React from 'react';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const AppCard = ({ app }) => {

    const { title, image, ratingAvg, downloads } = app

    return (
        <Link to='/apps'>
            <div className="card bg-gray-100 h-[370px] w-[270px] shadow-sm my-4 mx-auto text-black">

                <img
                    src={image}
                    className='py-3 px-3'
                    alt="Shoes" />

                <div className="mx-3 my-1">
                    <div className='flex justify-between items-center gap-3'>
                        <h2 className="text-xl font-semibold">{title}</h2>
                        <div className="badge badge-accent"><FaCloudDownloadAlt className='text-xl' /> {downloads}</div>
                    </div>
                    <p>{ratingAvg}</p>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;