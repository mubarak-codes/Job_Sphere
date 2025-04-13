import {Link} from 'react-router-dom';


const Cards = ()=>{
  return(
    <section className="container-fluid d-sm-flex d-block flex-sm-row gap-3">
      {/*for Developers*/}
      <div className="for-developers card d-flex flex-col align-items-start gap-2 mb-3 mb-sm-0">
       <div className="fw-bolder fs-5">
        For Developers
       </div>
       <div className="for-developers-text fw-normal mb-1">
        Browse our software developer jobs and start your career today
       </div>
       <Link className="for-developers-button px-3 card" to="/jobs">
        Browse Jobs
       </Link>
      </div>

      {/*for Employers*/}
      <div className="for-employers bg-danger bg-opacity-10 card d-flex flex-col align-items-start gap-2">
       <div className="fw-bolder fs-5">
        For Employers
       </div>
       <div className="for-employers-text fw-normal mb-1">
        List your job to find the perfect developer for the role
       </div>
       <Link to="/add-job" className="for-employers-button px-3 card bg-danger">
        Add Job
       </Link>
      </div>
    </section>

  )
}

export default Cards; 
