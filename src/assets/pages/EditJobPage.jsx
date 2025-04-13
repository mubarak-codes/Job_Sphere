import {useParams, useLoaderData, useNavigate} from 'react-router-dom';
import {useState} from 'react';
import {toast} from 'react-toastify';



const EditJobPage = ({updateJobSubmit})=>{
  const job = useLoaderData();
  const navigate = useNavigate();
  const {id} = useParams();


  const [title, setTitle] = useState(job.title);
  const [type, setType] = useState(job.type);
  const [location, setLocation] = useState(job.location);
  const [description, setDescription] = useState(job.description);
  const [salary, setSalary] = useState(job.salary);
  const [companyName, setCompanyName] = useState(job.company.name);
  const [companyDescription, setCompanyDescription] = useState(job.company.description);
  const [contactEmail, setContactEmail] = useState(job.company.contactEmail);
  const [contactPhone, setContactPhone] = useState(job.company.contactPhone);


  const submitForm = (e)=>{
    e.preventDefault();

    const updatedJob = {
        id,
        title,
        type,
        description,
        location,
        salary,
        company:{
          name: companyName,
          description: companyDescription,
          contactEmail,
          contactPhone,
        }
 }

    updateJobSubmit(updatedJob);
    toast.success("Job updated successfully")
    return  navigate(`/jobs/${id}`)
  }


  return(
    <>
      <section className="browse-job-container py-3">
      <div className="">
        <div
          className="bg-white px-4 py-4 mb-2 card border m-3 mt-5"
        >
          <form onSubmit={submitForm}>
            <h2 className=" text-center fw-bold mb-4">Update Job</h2>

            <div className="mb-3">
              <label htmlFor="type" className="d-block fw-bold mfs-2 mb-2"
                >Job Type</label>
              <select
                id="type"
                name="type"
                className="border rounded w-100 py-2 px-3 mfs-2 form-select"
                required
                value={type}
                onChange={(e)=>{setType(e.target.value)}}>
    
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="d-block fw-bold mb-2 mfs-2"
                >Job Listing Name</label
              >
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-100 py-2 px-3 mb-2 mfs-2 form-control"
                placeholder="eg. Beautiful Apartment In Miami"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}/>

            </div>
            <div className="mb-3">
              <label
                htmlFor="description"
                className="d-block fw-bold mb-2 mfs-2"
                >Description</label
              >
              <textarea
                id="description"
                name="description"
                className="border rounded w-100 py-2 px-3 mfs-2 form-control"
                rows="4"
                placeholder="Add any job duties, expectations, requirements, etc" 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="type" className="d-block fw-bold mb-2 mfs-2"
                >Salary</label
              >
              <select
                id="salary"
                name="salary"
                className="border rounded w-100 py-2 px-3 mfs-2 form-select"
                required
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              >
                <option value="Under $50K">Under $50K</option>
                <option value="$50K - 60K">$50K - $60K</option>
                <option value="$60K - 70K">$60K - $70K</option>
                <option value="$70K - 80K">$70K - $80K</option>
                <option value="$80K - 90K">$80K - $90K</option>
                <option value="$90K - 100K">$90K - $100K</option>
                <option value="$100K - 125K">$100K - $125K</option>
                <option value="$125K - 150K">$125K - $150K</option>
                <option value="$150K - 175K">$150K - $175K</option>
                <option value="$175K - 200K">$175K - $200K</option>
                <option value="Over $200K">Over $200K</option>
              </select>
            </div>

            <div className='mb-3'>
              <label className='d-block fw-bold mb-2 mfs-2'>
                Location
              </label>
              <input
                type='text'
                id='location'
                name='location'
                className='border rounded w-100 py-2 px-3 mb-4 mfs-2 form-control'
                placeholder='Company Location'
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className=" mb-4 mfs-5">Company Info</div>

            <div className="mb-3">
              <label htmlFor="company" className="d-block fw-bold mb-2 mfs-2"
                >Company Name</label
              >
              <input
                type="text"
                id="company"
                name="company"
                className="border rounded w-100 py-2 px-3 mfs-2 form-control"
                placeholder="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="company_description"
                className="d-block fw-bold mb-2 mfs-2"
                >Company Description</label
              >
              <textarea
                id="company_description"
                name="company_description"
                className="border rounded w-100 py-2 px-3 mfs-2 form-control"
                rows="4"
                placeholder="What does your company do?"
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-3">
              <label
                htmlFor="contact_email"
                className="d-block fw-bold mb-2 mfs-2"
                >Contact Email</label
              >
              <input
                type="email"
                id="contact_email"
                name="contact_email"
                className="border rounded w-100 py-2 px-3 mfs-2 form-control"
                placeholder="Email address for applicants"
                required
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contact_phone"
                className="d-block fw-bold mb-2 mfs-2"
                >Contact Phone</label
              >
              <input
                type="tel"
                id="contact_phone"
                name="contact_phone"
                className="border rounded w-100 py-2 px-3 mfs-2 form-control"
                placeholder="Optional phone for applicants"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
              />
            </div>

            <div>
              <button
                className="bg-primary text-white fw-bold py-2 px-4 rounded-5 w-100 mfs-2"
                type="submit"
              >
                Update Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    </>
  )
};

export default EditJobPage;
