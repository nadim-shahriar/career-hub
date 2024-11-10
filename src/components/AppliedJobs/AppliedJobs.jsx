import { useEffect, useState } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";



const AppliedJobs = () => {
    const jobs = useLoaderData();
    // const location = useLocation();
    // console.log(location)

    const [appliedJobs, setAppliedJobs] = useState([])
    // console.log(jobs)
    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length) {
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))

            // const jobsApplied =[];
            // for (const id of storedJobIds){
            //     const job = jobs.find(job=> job.id === id)
            //     if(job){
            //         jobsApplied.push(job)
            //     }
            // }
            console.log(jobsApplied)
            setAppliedJobs(jobsApplied)

        }

    }, [])

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl">Jobs I applied: {appliedJobs.length}</h1>
            <ul>
                {
                    appliedJobs.map(job => <li key={job.id}>
                        <h4><span className="font-bold">{job.job_title} </span> {job.company_name}: {job.remote_or_onsite
                        }</h4>

                    </li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;