import ServiceCard from '../components/ServiceCard'
import services from '../data/services'
import './Home.css'

function Home () {
  return (
    <>
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
        <p>
          We are a premier Toronto catering company dedicated to serve
          unforgettable culinary experiences.
        </p>
        <p>Catering services across Toronto and the GTA.</p>
        <p>Charcuterie deliveries available in Toronto.</p>
        <p>Food Truck travelling across Ontario.</p>

        <a className='explore-button' href='#services'>
          Book Now
        </a>
      </section>

      <section className='services'>
        {services.map(service => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </section>
    </>
  )
}

export default Home
