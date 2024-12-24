import React, { useEffect, useState } from 'react';
import Job from './Job';

const Jobs = () => {

    const [value, setValues] = useState(4)
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch('https://next-level-two-ashen.vercel.app/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))

    }, [])
    return (
        <div className='max-w-6xl mx-auto mt-20'>
            this is job section
            <h2 className="text-center font-bold text-4xl border border-b-indigo-500 shadow text-blue-400 py-3 rounded-xl">Jobs</h2>
            <p className="text-center mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero molestias quam quibusdam recusandae,
                nesciunt ab debitis. Fugiat enim impedit <br />eos nobis incidunt eligendi hic cupiditate deserunt
                repudiandae reprehenderit? Doloremque, minima.</p>
            <div className='mt-10 grid grid-cols-2 gap-10'>
                {
                    //jobs.slice(0, value).map(job => <Job job={job} key={job._id}></Job>)
                    jobs.length?jobs.slice(0, value).map(job => <Job job={job} key={job._id}></Job>):<div className="grid grid-cols-3 gap-96">
                    <div className="flex w-52 flex-col gap-4">
                        <div className="skeleton h-32 w-full"></div>
                        <div className="skeleton h-4 w-28"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                    </div>
                    <div className="flex w-52 flex-col gap-4">
                        <div className="skeleton h-32 w-full"></div>
                        <div className="skeleton h-4 w-28"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                    </div>
                    <div className="flex w-52 flex-col gap-4">
                        <div className="skeleton h-32 w-full"></div>
                        <div className="skeleton h-4 w-28"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                    </div>
                </div>
                }

            </div>
            <div className='mt-5 flex justify-center'>
            

                {
                    value===4?<button className='btn btn-primary' onClick={() => setValues(jobs.length)}>View all</button>:<button className='btn btn-primary' onClick={() => setValues(4)}>Show four</button>
                }

            </div>
        </div>
    );
};

export default Jobs;