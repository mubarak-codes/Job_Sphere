import {useParams, useLoaderData, useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {toast} from 'react-toastify'


const JobPages = ({deleteJob})=>{
  const navigate = useNavigate();
  const { id } = useParams();
  const job = useLoaderData()

  const onDeleteClick = (jobId)=>{
    const confirm = window.confirm('Are you sure you want to delete this listing');
    if (!confirm) return;

    deleteJob(jobId);
    toast.success('Job deleted successfully')
    navigate('/jobs')
  }


  if(!job){
    return (<>
      <div className="mb-5"></div>
      <div className="text-center mt-5 pt-5 text-primary">Loading...</div>
    </>)
  }


  return(
    <>
    {/*<!-- Go Back -->*/}
    <section>
      <div className="container m-auto py-3">
        <Link
          to="/jobs"
          className="flex items-center mfs-1 "
        >
          <i className="fas fa-arrow-left mr-2"></i> Back to Job Listings
        </Link> 
      </div>
    </section>

    <section className="browse-job-container py-5">
      <div className="container px-4 px-sm-1">
        <div className="row row-cols-1 row-cols-sm-2 pb-5">
          <main className="flex-1-sm">
            <div
              className="bg-white pb-1 card  text-center text-sm-start mfs-1 p-3 mb-4"
            >
              <div className="text-secondary mb-3">{job.type}</div>
              <h1 className="mfs-9 mfs-6-sm fw-bolder mb-3">
                {job.title}
              </h1>
              <div
                className="mb-4 d-flex justify-content-center justify-content-sm-start"
              >
                <i
                  className="fa-solid fa-location-dot text-gold"
                ></i>
                <p className="text-gold ms-1">{job.location}</p>
              </div>
            </div>

            <div className="bg-white p-4 card mb-4">
              <h3 className="text-indigo mfs-3 fw-bold mb-3">
                Job Description
              </h3>

              <p className="mb-4 mfs-2">
                {job.description}
              </p>

              <h3 className="text-indigo mfs-3 fw-bold mb-3">Salary</h3>

              <p className="mb-3 mfs-2">{job.salary} / Year</p>
            </div>
          </main>

    {/*<!-- Sidebar -->*/}
          <aside className="w-50-sm">
          {/*<!-- Company Info -->*/}
            <div className="bg-white p-4 card mb-4">
              <h3 className="mfs-3 fw-bold mb-4">Company Info</h3>

              <div className="mfs-5">{job.company.name}</div>

              <p className="my-2 mfs-2">
                {job.company.description}
              </p>

              <hr className="my-3" />

              <div className="mfs-3">Contact Email:</div>

              <p className="my-2 p-2 fw-bold bg-primary-subtle">
                {job.company.contactEmail}
              </p>

              <div className="mfs-3">Contact Phone:</div>

              <p className="my-2 bg-primary-subtle p-2 fw-bold">{job.company.contactPhone}</p>
            </div>

            {/*<!-- Manage -->*/}
            <div className="bg-white p-4 card  ">
              <h3 className="mfs-3 fw-bold">Manage Job</h3>
              <Link
                to={`/edit-job/${job.id}`}
                className="bg-primary text-white text-center fw-bold py-2 px-4 rounded-5 mt-4  d-block"
                >Edit Job</Link
              >
              <button
                className="bg-danger text-white fw-bold py-2 px-4 rounded-5 mt-4 d-block" onClick={()=>onDeleteClick(job.id)}
              >
                Delete Job
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
    </>
  )
};

function jobLoader({params}){
  try{
    return fetch(`http://localhost:8000/jobs/${params.id}`)
    .then(res=>res.json())
    .then(data=>data)
  }
  catch(error){
    console.log('error fetching',error);
  } 
  finally{
    console.log('finished')
  }
}

export {JobPages as default, jobLoader};
