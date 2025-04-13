import logo from '../img/logo.png';
import {Link} from 'react-router-dom'


const Navbar = ()=>{
  return(
    <section>
      <nav className="navbar navbar-expand">
        <div className="container-fluid mx-3"> 
          <div className="navbar-brand ">
           <img src={logo} className="me-3 logo" />
           <span className="text-white fw-bold d-none d-sm-inline-block">React Jobs</span>
          </div>
          
          <div className="navbar-nav">
           <Link to="/" className="nav-item text-white">Home</Link>
           <Link to="/jobs" className="nav-item text-white">Jobs</Link>
           <Link to="/add-job" className="nav-item text-white">Add Job</Link> 
          </div>
        </div>
      </nav>
    </section>
  )
}

export default Navbar;
