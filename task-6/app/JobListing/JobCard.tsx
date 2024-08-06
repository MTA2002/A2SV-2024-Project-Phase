import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

interface IdealCandidate {
  age: string;
  gender: string;
  traits: string[];
}

interface About {
  posted_on: string;
  deadline: string;
  location: string;
  start_date: string;
  end_date: string;
  categories: string[];
  required_skills: string[];
}

export interface Job {
  title: string;
  description: string;
  responsibilities: string[];
  ideal_candidate: IdealCandidate;
  when_where: string;
  about: About;
  company: string;
  image: string;
}

const JobCard = ({ job }: { job: Job }) => {
  return (
    <div className="flex border border-cardBorder py-6 px-9 rounded-2xl gap-6	">
      <div>
        <Image src={job.image} alt="" width={67} height={69} />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold leading-6 text-[#25324B]">
          {job.title}
        </h2>
        <div className="text-[#7C8493] font-normal text-base	flex items-center gap-2">
          {job.company}{" "}
          <div className="bg-[#7C8493] rounded-full w-1 h-1"></div>
          {job.title}
        </div>
        <p className="text-[#25324B] pb-4">{job.description}</p>
        <div className="flex gap-2">
          <button className="bg-[#56CDAD1A] px-[10px] py-[6px] rounded-full text-[#56CDAD]">
            In Person
          </button>
          <div className="w-[1px] h-[100%] bg-[#D6DDEB]"></div>
          <button className="border border-[#FFB836] px-[10px] py-[6px] rounded-full text-[#FFB836]">
            Education
          </button>
          <button className="border border-[#4640DE] px-[20px] py-[6px] rounded-full text-[#4640DE]">
            IT
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
