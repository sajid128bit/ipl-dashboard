// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamDeatils} = props
  const {name, id, teamImageUrl} = teamDeatils

  return (
    <Link to={`/ipl/${id}`} className="teamCard-container">
      <img src={teamImageUrl} alt={id} className="teamCard-image" />
      <p className="teamCard-name">{name}</p>
    </Link>
  )
}

export default TeamCard
