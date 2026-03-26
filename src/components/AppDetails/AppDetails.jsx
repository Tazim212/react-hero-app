import { useParams } from 'react-router';
import { FaDownload, FaStar } from 'react-icons/fa';
import { AiFillLike } from 'react-icons/ai';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import AppError from '../../Pages/AppError/AppError';

const notify = () => toast("Installed Successfully");

const AppDetails = () => {

    const { id } = useParams();
    const [appData, setAppData] = useState([])
    const [loading, setLoading] = useState(true)
    const [installed, setInstalled] = useState(false);

    useEffect(() => {
        fetch("/apps.json")
            .then(res => res.json())
            .then(data => {
                setAppData(data);
                setLoading(false);
            })
    }, [])
    const singleAppDetails = appData.find(item => item.id === parseInt(id))
    
    const handleInstall = () => {
        notify()
        setInstalled(true)
    }
    const chartData = singleAppDetails?.ratings?.map(item => ({ name: item.name, count: item.count }))

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-spinner loading-lg">Loading...</span>
            </div>
        );
    }

    if (!singleAppDetails) {
        return <AppError></AppError>
    }

    return (
        <div className='bg-white text-black'>
            <div className="bg-gray-200 min-h-75 text-black">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-9">
                    <img
                        src={singleAppDetails?.image}
                        className="rounded-lg shadow-2xl ml-7 md:ml-16 pt-8 md:pt-12 mb-0 md:mb-7 w-72 md:w-75 h-48 md:h-72"
                    />
                    <div className='pt-0 ml-7 md:ml-0'>
                        <h1 className="text-lg md:text-5xl font-bold pb-2 md:pb-10">{singleAppDetails?.title}</h1>

                        <div className='flex justify-start items-center gap-2 md:gap-10'>

                            <div className='flex-col justify-center items-center'>
                                <span className='font-semibold'><FaDownload className='text-2xl text-green-500'></FaDownload> Downloads</span>
                                <p className='text-sm md:text-3xl font-bold'>
                                    {singleAppDetails?.downloads}
                                </p>
                            </div>
                            <div className='flex-col justify-center items-center'>
                                <span className='font-semibold'><FaStar className='text-2xl text-yellow-500'></FaStar> Ratings</span>
                                <p className='text-sm md:text-3xl font-bold'>
                                    {singleAppDetails?.ratingAvg}
                                </p>
                            </div>
                            <div className='flex-col justify-center items-center'>
                                <span className='font-semibold'><AiFillLike className='text-2xl text-blue-500'></AiFillLike> Reviews</span>
                                <p className='text-sm md:text-3xl font-bold'>
                                    {singleAppDetails?.reviews}
                                </p>
                            </div>
                        </div>
                        {
                            installed ? <button onClick={() => setInstalled(false)} disabled>Installed</button>
                                :
                                <button onClick={handleInstall} className='btn btn-success px-8 my-3'>Install Now</button>
                        }
                        <ToastContainer></ToastContainer>
                    </div>
                </div>
            </div>

            <ComposedChart
                style={{ aspectRatio: 1.618, backgroundColor: "wheat" }}
                className='w-83.5 md:w-[1100px] h-75 md:h-100 mx-3 md:mx-10 my-5'
                responsive
                data={chartData}
                margin={{
                    top: 20,
                    right: 0,
                    bottom: 0,
                    left: 0,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" barSize={40} fill="#413ea0" />
                <Line type="monotone" dataKey="count" stroke="#ff7300" />
            </ComposedChart>
            <div className='mx-4 md:mx-10 mb-5'>
                <h1 className='font-semibold text-2xl py-4'>Description</h1>
                <p>{singleAppDetails?.description}</p>
            </div>
        </div>
    );
};

export default AppDetails;
