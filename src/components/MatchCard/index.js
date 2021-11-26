// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatches} = props
  const updateddetails = recentMatches.map(eachItem => ({
    competingTeamLogo: eachItem.competing_team_logo,
    competingTeam: eachItem.competing_team,
    result: eachItem.result,
    matchStatus: eachItem.match_status,
    id: eachItem.id,
  }))
  const createCard = eachItem => {
    const {competingTeam, competingTeamLogo, result, matchStatus, id} = eachItem
    const statusClass = matchStatus.includes('Lost') ? 'red' : 'green'
    return (
      <div className="matchCard-container-unique" key={id}>
        <img
          src={competingTeamLogo}
          alt="Team logo"
          className="matchCard-logo-size"
        />
        <p className="matchCard-teamName">{competingTeam}</p>
        <p className="matchCard-result">{result}</p>
        <p className={`matchCard-status ${statusClass}`}>{matchStatus}</p>
      </div>
    )
  }

  return (
    <div className="matchCard-container-list">
      {updateddetails.map(eachItem => createCard(eachItem))}
    </div>
  )
}
export default MatchCard
