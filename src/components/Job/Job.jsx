import { CiLocationOn } from "react-icons/ci";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job
    return (
        <div className="p-10 shadow-xl rounded-lg border border-[#E8E8E8]">
            <div>
                <img className="w-[117px] h-[40px]" src={logo} alt="" />
                <h1 className="font-extrabold mt-8">{job_title}</h1>
                <p className="mt-2 font-semibold text-[#757575]">{company_name}</p>
                <div className="mt-4 flex gap-3">
                    <button className="border border-[#7E90FE] hover:bg-gray-200 py-2 px-4 rounded-md font-extrabold    text-[#7E90FE]">{remote_or_onsite}</button>
                    <button className="border border-[#7E90FE] hover:bg-gray-200 py-2 px-4 rounded-md font-extrabold text-[#7E90FE]">{job_type}</button>
                </div>
                <div className="mt-4 flex gap-6">
                    <p className="flex gap-2 items-center font-semibold text-[#757575]">
                        <CiLocationOn className="text-2xl" />
                        {location}
                    </p>
                    <p className="flex gap-2 items-center font-semibold text-[#757575]">
                        <HiOutlineCurrencyDollar className="text-2xl" />
                        {salary}
                    </p>
                </div>
            </div>
            <Link to={`/job/${id}`}>
                <button className="btn mt-6 py-3 px-5 text-white font-extrabold rounded-lg bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:bg-gradient-to-r hover:from-[#9873FF] hover:to-[#7E90FE]">View Details</button>
            </Link>
        </div>
    );
};

export default Job;