import { Link } from 'react-router-dom'
import './ServiceCard.css'

function ServiceCard ({ title, image, alt, items, to }) {
  return (
    <article className='service-card'>
      <img src={image} alt={alt} className='service-card-image' />
      <div className='service-card-content'>
        <h2>{title}</h2>
        <ul>
          {items.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Link to={to}>Explore {title}</Link>
      </div>
    </article>
  )
}

export default ServiceCard
