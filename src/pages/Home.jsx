import ServiceCard from '../components/ServiceCard'
import services from '../data/services'
import './Home.css'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function Home () {
  return (
    <>
      <div className='home-page'>
        <section className='hero'>
          <img
            src='/Home/HomeHeroCharcuterie.jpg'
            alt='Charcuterie board with various meats, cheeses, jams and fruits'
            className='hero-image'
            fetchPriority='high'
          />
        </section>

        <section className='intro'>
          <h1>Catering for every occasion</h1>
          <p className='intro-text1'>
            We are a premier Toronto catering company dedicated to serving
            unforgettable culinary experiences.
          </p>
          {/* <p className='intro-text'>We cater across Toronto and the GTA.</p>
          <p className='intro-text'>
            We deliver Charcuterie all across Toronto.
          </p>
          <p className='intro-text'>Our Food Truck travels across Ontario.</p> */}
          <Link to='/contactus' className='explore-button'>
            Enquire Now
          </Link>
        </section>

        <section className='services'>
          {services.map(service => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </section>
        <Footer />
      </div>
    </>
  )
}

export default Home
