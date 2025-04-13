import { useState } from 'react';
import { Link } from 'react-router-dom';

const JobList = ({ job }) => {
  let [show, setShow] = useState(false)
  let more = document.querySelector('more-button');
  let less = document.querySelector('less-button');


  let description = job.description;


  return (
    <div className='bg-white card mb-4 relative'>
      <div className='p-4'>
        <div className='mb-6'>
          <div className='text-secondary my-2 mfs-1'>{job.type}</div>
          <h3 className='mfs-4 fw-bold mb-3'>{job.title}</h3>
        </div>

        <div className='mb-3 mfs-2 opacity-75 mfs-2'>{description}</div>


        <div className='text-danger mb-3 mfs-2'>{job.salary} / Year</div>

        <div className='border border-gray-100 mb-3'></div>

        <div className='row mb-4'>
          <div className='text-success mb-3 mfs-2'>
            <i className="bi bi-geo-alt me-1"></i>
            {job.location}
          </div>
          <Link
            to={`/jobs/${job.id}`}
            className='bg-danger text-white px-4 py-2 rounded text-center mfs-1'
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};
export default JobList;
