import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <section className='text-center grid  justify-center align-items-center mt-5'>
      <h1 className='display-1  fw-bolder mb-4'>404 Not Found</h1>
      <p className='fs-6 mb-5'>This page does not exist</p>
      <Link
        to='/'
        className='text-white bg-primary rounded-2 px-3 py-2 mt-4'
      >
        Go Back
      </Link>
    </section>
  );
};
export default NotFoundPage;
