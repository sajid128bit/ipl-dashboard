// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const updatedDeatils = {
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    date: latestMatchDetails.date,
    firstInnings: latestMatchDetails.first_innings,
    id: latestMatchDetails.id,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    matchStatus: latestMatchDetails.match_status,
    result: latestMatchDetails.result,
    secondInnings: latestMatchDetails.second_innings,
    umpires: latestMatchDetails.umpires,
    venue: latestMatchDetails.venue,
  }
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = updatedDeatils
  return (
    <div className="latestMatch-container">
      <div className="latestMatch-logo-competing-team">
        <div className="latestMatch-logo-initial-details">
          <div>
            <p className="competingTeam">{competingTeam}</p>
            <p className="competingTeam">{date}</p>
            <p>{venue}</p>
            <p>{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={competingTeam}
            className="latestMatch-ct-logo-size"
          />
        </div>
        <hr />
        <div>
          <p className="written-para">First Innings</p>
          <p>{firstInnings}</p>
          <p className="written-para">Second Innings</p>
          <p>{secondInnings}</p>
          <p className="written-para">Man Of The Match</p>
          <p>{manOfTheMatch}</p>
          <p className="written-para">Umpires</p>
          <p>{umpires}</p>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch
