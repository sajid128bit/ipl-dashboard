// Write your code here
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {camelTeamsData: [], isLoading: true}

  componentDidMount = () => {
    this.getIplData()
  }

  getIplData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const teamsData = data.teams
    const camelTeamsData = teamsData.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({camelTeamsData, isLoading: false})
  }

  render() {
    const {camelTeamsData, isLoading} = this.state
    return (
      <div className="home-container-bg">
        {isLoading && (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        )}
        <div className="home-logo-heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="home-logo-size"
          />
          <h1 className="home-heading">IPL DASHBOARD</h1>
        </div>
        <ul className="home-list-container">
          {camelTeamsData.map(eachItem => (
            <TeamCard key={eachItem.id} teamDeatils={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
