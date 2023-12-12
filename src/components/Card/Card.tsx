import './Card.css'
import { Link } from 'react-router-dom'
interface CardProps {
    cardTitle : string
}

export default function Card (props: CardProps) {
  return (
    <div className="card">
      <h2 className='card-title'>
        {props.cardTitle}
      </h2>
      <Link
        to={`/problems/category/${props.cardTitle}`}
      >
        <button>
          이동
        </button>
      </Link>
    </div>
  )
}