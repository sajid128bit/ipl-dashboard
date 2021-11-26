import './App.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home/index'
import TeamMatches from './components/TeamMatches/index'
import NotFound from './components/NotFound'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/ipl/:id" component={TeamMatches} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
