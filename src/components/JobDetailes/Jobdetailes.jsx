import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { savedJobApplication } from "../../utility/localStorage";


const Jobdetailes = () => {
    const jobs = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)
    // console.log(id, job)
    const { job_description } = job

    const handleApplyBtn =() =>{
        savedJobApplication(idInt)
        toast('You have Apply for job')
    }

    return (
        <div className="container mx-auto my-10">
            <h1 className="text-5xl text-center h-[100px]">Job detailed of: {id}</h1>
            <div className="grid grid-cols-3 gap-5">
                <div className="col-span-2">
                    <h4 ><span className="font-bold">Job Description:</span> {job_description}</h4>
                </div>
                <div className="col-span-1">
                    <Link>
                        <button onClick={handleApplyBtn} className="btn w-full mt-6 py-3 px-5 text-white font-extrabold rounded-lg bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:bg-gradient-to-r hover:from-[#9873FF] hover:to-[#7E90FE]">Apply Now</button>
                    </Link>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Jobdetailes;