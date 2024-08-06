import React from "react";
// import jobs from "../../public/jobs.json";
import JobCard from "./JobCard";
import Link from "next/link";
import Job from "../interfaces/Job";

const JobListings = async () => {
  const response = await fetch(
    "https://akil-backend.onrender.com/opportunities/search"
  );
  const responseJson = await response.json();
  const jobs = responseJson.data as Job[];

  return (
    <div className="flex flex-col gap-8 py-[72px] px-10">
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <p className="font-black text-3xl">Opportunities</p>
          <p className="text-[#7C8493]">Showing 73 results</p>
        </div>
        <div className="flex gap-2 items-center">
          <label htmlFor="categories">Sort by:</label>

          <select name="categories" id="categories">
            <option value="mostRelevant">Most relevant</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>
      {jobs.map((job, index) => {
        return (
          <Link href={`/JobListing/${job.id}`} key={index}>
            <JobCard job={job} />
          </Link>
        );
      })}
    </div>
  );
};

export default JobListings;
