import React, { use } from 'react';
import AppCard from '../AppCard/AppCard';
import { Link } from 'react-router';

const appData = fetch('apps.json').then(res => res.json())
const AppContainer = () => {

    const apps = use(appData)

//    const [showAll, setShowAll]  = useState(false)

    return (
        <div>
            <h1 className='my-4 text-2xl text-center font-bold'>Trending Apps</h1>
            <p className='text-center mb-3'>Explore All Trending Apps on the Market developed by us</p>

        {/* {
            showAll ? <Link><button>Show All</button></Link> : apps.slice('0, 8')
        } */}
            <div className='grid grid-cols-1 md:grid-cols-4'>
                {
                    apps.slice(0, 8).map(app =><AppCard 
                        key={app.id} 
                        app={app}>
                        </AppCard>)
                }
            </div>
                <div className='text-center mb-4'>
                    <Link to='/apps'><button className='btn btn-secondary text-center'>Show All</button></Link>
                </div>
        </div>
    );
};

export default AppContainer;