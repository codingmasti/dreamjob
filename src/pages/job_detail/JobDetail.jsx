import React from "react";
import { useParams } from "react-router-dom";
import Data from "../../data/jobs_data.json";

import {
  MapPin,
  Building2,
  IndianRupee,
  Briefcase,
  GraduationCap,
  Users,
  Calendar,
  Globe,
  CheckCircle,
} from "lucide-react";

function JobDetail() {
  const { id } = useParams();
  window.scrollTo(0, 0);
  const job = Data.jobs.find((item) => item.id === Number(id));

  if (!job) {
    return (
      <div className="text-center py-20 text-2xl font-semibold">
        Job Not Found
      </div>
    );
  }
  return (
    <section className="bg-slate-100 py-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6">
        {/* LEFT */}
        <div className="lg:col-span-2 space-y-6">
          {/* Header */}
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex gap-5">
              <img
                src={job.company.logo}
                alt=""
                className="w-24 h-24 object-contain rounded-xl p-2"
              />
              <div>
                <h1 className="text-3xl font-bold">
                  {job.title}
                </h1>
                <p className="text-xl text-blue-600 font-medium">
                  {job.company.name}
                </p>
                <div className="flex flex-wrap gap-4 mt-4 text-gray-600">
                  <span className="flex items-center gap-2">
                    <MapPin size={18} className="text-blue-600" />
                    {job.location.city}, {job.location.state}
                  </span>
                  <span className="flex items-center gap-2">
                    <IndianRupee size={18} className="text-blue-600" />
                    {job.salary.display}
                  </span>
                  <span className="flex items-center gap-2">
                    <Briefcase size={18} className="text-blue-600" />
                    {job.experience.display}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Description */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-bold mb-4">
              Company Description
            </h2>
            <p className="text-gray-600 leading-8">
              {job.company.description}
            </p>
          </div>
          {/* Responsibilities */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-bold mb-5">
              Responsibilities
            </h2>
            <ul className="space-y-3">
              {job.responsibilities.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3"
                >
                  <CheckCircle
                    className="text-green-600 mt-1"
                    size={18}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* Requirements */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-bold mb-5">
              Requirements
            </h2>
            <ul className="space-y-3">
              {job.requirements.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3"
                >
                  <CheckCircle
                    className="text-blue-600 mt-1"
                    size={18}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* Skills */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-bold mb-5">
              Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {job.skills_required.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          {/* Benefits */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-bold mb-5">
              Benefits
            </h2>
            <ul className="grid md:grid-cols-2 gap-3">
              {job.benefits.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-2"
                >
                  <CheckCircle
                    size={18}
                    className="text-green-600"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-5">
          {/* Apply */}
          <div className="bg-white rounded-xl shadow p-6">
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
            >
              <a href={job.application_url}>Apply Now</a>
            </button>
            <div className="space-y-4 mt-6">
              <div className="flex justify-between">
                <span>Work Mode</span>
                <strong>{job.work_mode}</strong>
              </div>
              <div className="flex justify-between">
                <span>Job Type</span>
                <strong>{job.job_type}</strong>
              </div>
              <div className="flex justify-between">
                <span>Vacancies</span>
                <strong>{job.vacancies}</strong>
              </div>
              <div className="flex justify-between">
                <span>Education</span>
                <strong className="text-right">
                  {job.education}
                </strong>
              </div>
            </div>
          </div>
          {/* Recruiter */}
          {/* Company */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="font-bold text-xl mb-4">
              Company Info
            </h2>
            <div className="space-y-3">
              <p className="flex gap-2">
                <Building2 size={18} />
                {job.company.industry}
              </p>
              <p className="flex gap-2">
                <Users size={18} />
                {job.company.employees}
              </p>
              <p className="flex gap-2">
                <Calendar size={18} />
                Founded {job.company.founded}
              </p>
              <p className="flex gap-2 cursor-pointer text-blue-500">
                <Globe size={18} />
                {job.company.website}
              </p>
            </div>
          </div>
          {/* Stats */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="font-bold text-xl mb-4">
              Job Statistics
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Views</span>
                <strong>{job.meta.views}</strong>
              </div>
              <div className="flex justify-between">
                <span>Applicants</span>
                <strong>{job.meta.applicants}</strong>
              </div>
              <div className="flex justify-between">
                <span>Posted</span>
                <strong>{job.dates.posted}</strong>
              </div>
              <div className="flex justify-between">
                <span>Last Date</span>
                <strong>{job.dates.last_date}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JobDetail;