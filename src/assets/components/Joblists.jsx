import Joblist from './Joblist.jsx'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import jobs from '../data/jobs.json'



const Jobs = ({isHome = false})=>{

  const [job, setJob] = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect(()=>{
    function fetchJobs(){
      const apiUrl = isHome? 'http://localhost:8000/jobs?_limit=4': 'http://localhost:8000/jobs';
      try{
        fetch(apiUrl)
        .then(res=>res.json())
        .then(data=>{
         setJob(data)
        })
      }
      catch(error){
        console.log('failed fetching',error)
      }
      finally{
        setLoading(false);
      }
    }

    fetchJobs()
  }, [])
  

  return(
    <>
    <section className=" mt-4 py-3 browse-job-container bg-danger bg-opacity-10">
      <div className="container-fluid">
        <h2 className=" text-center text-danger fw-bolder browse-job-heading my-4 ff-rubik">
          {isHome? 'Recent Jobs': 'Browse Jobs'}
        </h2>
        <div className="joblists gap-4 d-block d-sm-grid">
          {job.map((job)=>(
            <Joblist job={job} key={job.id} readMore={isHome? `jobs/${job.id}`: `${job.id}`}/>

          ))}
        </div>
      </div>
    </section>

    {isHome? <section className="mx-auto d-flex justify-content-center my-5">
     <div className="px-5">
      <Link
        to="/jobs"
        className="bg-black text-white text-center p-2 px-5 rounded-3 view-all"
        >View All Jobs</Link></div>
    </section>: ''}
    </>
    )
}




export default Jobs;
