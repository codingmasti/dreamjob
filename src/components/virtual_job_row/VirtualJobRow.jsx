import JobCard from "../job_card/JobCard";

const VirtualJobRow = ({ jobs, index, style }) => {
  const job = jobs[index];
  if (!job) return null;

  return (
    <div style={style}>
      <JobCard job={job} />
    </div>
  );
};

export default VirtualJobRow;