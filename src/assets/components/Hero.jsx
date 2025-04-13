const Hero = ()=>{
 document.body.classList.add('ff-poppins')


  return(
    <section className="mb-5">
      <div
        className="hero-text bg-danger d-flex align-items-center justify-content-center"
      >
        <div className="text-center hero-2nd">
          <h1
            className="fw-bolder fs-sm-1 ff-rubik"
          >
            Become a Software Developer
          </h1>
          <p className="hero-find-job">
            Find the tech job that fits your skills and needs
          </p>
        </div>
      </div>
    </section>
 
  )
};

export default Hero;
