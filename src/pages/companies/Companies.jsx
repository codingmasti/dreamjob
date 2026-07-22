import { useData } from "../../context/DataContext";

function Companies() {
  const { jobsData } = useData();

  const companies = [
    ...new Map(
      jobsData.map((job) => [job.company.id, job.company])
    ).values(),
  ];

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-4 gap-6 my-10">
      {companies.map((company) => {
        return(<div
          key={company.id}
          className="border border-gray-300 rounded-lg p-4 hover:shadow-lg transition-all duration-300"
        >
          <div className="w-25 h-16">
            <img
              src={company.logo}
              alt={company.name}
              className='w-full h-full object-contain'
              
            />
          </div>

          <h2 className="text-xl font-bold mt-3">
            {company.name}
          </h2>

          <p>{company.description}</p>
        </div>)
})}
    </div>
  );
}

export default Companies;