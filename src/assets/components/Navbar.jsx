import logo from '../img/logo.png';
import {Link} from 'react-router-dom'


const Navbar = ()=>{
  return(
    <section>
      <nav className="navbar navbar-expand bg-danger py-sm-5 ">
        <div className="container-fluid mx-3"> 
          <div className="navbar-brand ">
           <img src="img/Logo.png" className="me-3 logo w-60 w-10-sm " />
           <span className="text-white fw-bold d-none d-sm-inline-block ff-rubik mfs-7-sm">JOB SPHERE</span>
          </div>
          
          <div className="navbar-nav">
           <Link to="/" className="nav-item text-white mfs-4-sm">Home</Link>
           <Link to="/jobs" className="nav-item text-white mfs-4-sm">Jobs</Link>
           <Link to="/add-job" className="nav-item text-white mfs-4-sm">Add Job</Link> 
          </div>
        </div>
      </nav>
    </section>
  )
}

export default Navbar;
