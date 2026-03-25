import React from 'react';
import appData from '../../../public/apps.json'
import { useParams } from 'react-router';
import { FaDownload, FaStar } from 'react-icons/fa';
import { AiFillLike } from 'react-icons/ai';


const AppDetails = () => {

    const { id } = useParams();

    const singleAppDetails = appData.find(item => item.id === parseInt(id))

    // console.log(finding);
    return (
        <div className="bg-gray-200 min-h-[300px] text-black">
            <div className="flex items-center gap-9">
                <img
                    src={singleAppDetails.image}
                    className="rounded-lg shadow-2xl ml-16 pt-12 mb-7"
                />
                <div>
                    <h1 className="text-5xl font-bold pb-10">{singleAppDetails.title}</h1>

                    <div className='flex justify-start items-center gap-10'>

                        <div className='flex-col justify-center items-center'>
                            <span className='font-semibold'><FaDownload className='text-2xl text-green-500'></FaDownload> Downloads</span>
                            <p className='text-3xl font-bold'>
                                {singleAppDetails.downloads}
                            </p>
                        </div>
                        <div className='flex-col justify-center items-center'>
                            <span className='font-semibold'><FaStar className='text-2xl text-yellow-500'></FaStar> Ratings</span>
                            <p className='text-3xl font-bold'>
                                {singleAppDetails.ratingAvg}
                            </p>
                        </div>
                        <div className='flex-col justify-center items-center'>
                            <span className='font-semibold'><AiFillLike className='text-2xl text-blue-500'></AiFillLike> Reviews</span>
                            <p className='text-3xl font-bold'>
                                {singleAppDetails.reviews}
                            </p>
                        </div>
                    </div>

                    <button className="btn btn-success px-5 mt-6">Install Now (250 MB)</button>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;

// Show app image on the left.
// Display app details such as title, rating, downloads, reviews.
// Include an Install button:
// When clicked, it becomes disabled and the text changes to Installed.
// Show a Success Toast after App installed