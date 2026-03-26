import { useParams } from 'react-router';
import { FaDownload, FaStar } from 'react-icons/fa';
import { AiFillLike } from 'react-icons/ai';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const notify = () => toast("Installed Successfully");

const AppDetails = () => {

    const { id } = useParams();
    const [appData, setAppData] = useState([])
    const [installed, setInstalled] = useState(false);

    useEffect(() => {
        fetch('/apps.json')
            .then(res => res.json())
            .then(data => setAppData(data))
    }, [])


    const singleAppDetails = appData.find(item => item.id === parseInt(id))
    
    const handleInstall = () => {
        notify()
        setInstalled(true)
    }
    const chartData = singleAppDetails?.ratings?.map(item => ({ name: item.name, reviews: singleAppDetails.reviews }))

    return (
        <div className='bg-white text-black'>
            <div className="bg-gray-200 min-h-75 text-black">
                <div className="flex items-center gap-5 md:gap-9">
                    <img
                        src={singleAppDetails?.image}
                        className="rounded-lg shadow-2xl ml-3 md:ml-16 pt-6 md:pt-12 mb-7 w-48 md:w-0 h-48 md:h-0"
                    />
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold pb-2 md:pb-10">{singleAppDetails?.title}</h1>

                        <div className='flex justify-start items-center gap-3 md:gap-10'>

                            <div className='flex-col justify-center items-center'>
                                <span className='font-semibold'><FaDownload className='text-2xl text-green-500'></FaDownload> Downloads</span>
                                <p className='text-2xl md:text-3xl font-bold'>
                                    {singleAppDetails?.downloads}
                                </p>
                            </div>
                            <div className='flex-col justify-center items-center'>
                                <span className='font-semibold'><FaStar className='text-2xl text-yellow-500'></FaStar> Ratings</span>
                                <p className='text-2xl md:text-3xl font-bold'>
                                    {singleAppDetails?.ratingAvg}
                                </p>
                            </div>
                            <div className='flex-col justify-center items-center'>
                                <span className='font-semibold'><AiFillLike className='text-2xl text-blue-500'></AiFillLike> Reviews</span>
                                <p className='text-2xl md:text-3xl font-bold'>
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
                style={{ aspectRatio: 1.618, backgroundColor: "wheat", margin: "16px 40px" }}
                className='w-100 md:w-150 h-75 md:h-100'
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
                <Bar dataKey="reviews" barSize={40} fill="#413ea0" />
                <Line type="monotone" dataKey="reviews" stroke="#ff7300" />
            </ComposedChart>
            <div className='mx-10 mb-5'>
                <h1 className='font-semibold text-2xl py-4'>Description</h1>

                <p className='pb-6'>This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles.
                    Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time.
                    The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand.
                    Notifications gently let you know when to pause and when to resume,
                    helping you maintain a healthy rhythm between work and rest.</p>

                <p className='pb-6'>A unique feature of this app is the integration of task lists with timers.
                    You can assign each task to a specific Pomodoro session, making your schedule more structured.
                    The built-in analytics show not only how much time you’ve worked but also which tasks consumed the most energy.
                    This allows you to reflect on your efficiency and adjust your workflow accordingly.
                    The app also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere.</p>

                <p>  For people who struggle with procrastination, the app provides motivational streaks and achievements.
                    Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment.
                    This gamified approach makes focusing more engaging and less like a chore.
                    Whether you’re studying for exams, coding, writing, or handling office work, the app adapts to your routine.
                    By combining focus tracking, task management, and motivational tools,
                    this Pomodoro app ensures that you not only work harder but also smarter.
                    It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.</p>
            </div>
        </div>
    );
};

export default AppDetails;
