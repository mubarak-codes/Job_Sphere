import Hero from '../components/Hero.jsx';
import Cards from '../components/Homecards.jsx';
import Jobs from '../components/Joblists.jsx';




const Homepage = ()=>{
  return(
    <>
      <Hero/>
      <Cards/>
      <Jobs isHome={true} />
    </>
  )
}


export default Homepage;
