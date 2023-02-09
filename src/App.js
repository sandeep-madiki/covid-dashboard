import {Switch, Route} from 'react-router-dom'

import './App.css'
import MainPage from './components/mainPage'
import stateWiseDetails from './components/stateWiseDetails'
import About from './components/about'

const App = () => (
  <Switch>
    <Route exact path="/" component={MainPage} />
    <Route exact path="/state/:stateCode" component={stateWiseDetails} />
    <Route exact path="/about" component={About} />
  </Switch>
)
export default App
