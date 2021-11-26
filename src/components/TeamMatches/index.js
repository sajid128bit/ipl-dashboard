// Write your code here
import {Component} from 'react'
import LatestMatch from '../LatestMatch/index'
import MatchCard from '../MatchCard/index'
import './index.css'

class TeamMatches extends Component {
  state = {teamMatchesData: {}}

  componentDidMount = () => {
    this.getMatchData()
  }

  getMatchData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    this.setState({teamMatchesData: updatedData})
  }

  render() {
    const {teamMatchesData} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatchesData
    const {match} = this.props
    const {params} = match
    const {id} = params
    return (
      <div className={`${id} teamMatches-container`}>
        <img
          src={teamBannerUrl}
          alt="team banner"
          className="teamMatches-banner"
        />
        <p className="teamMatches-para-latest">Latest Matches</p>
        {latestMatchDetails === undefined ? (
          ''
        ) : (
          <LatestMatch latestMatchDetails={latestMatchDetails} />
        )}
        {recentMatches === undefined ? (
          ''
        ) : (
          <MatchCard recentMatches={recentMatches} />
        )}
      </div>
    )
  }
}
export default TeamMatches
