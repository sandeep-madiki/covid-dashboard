import {Link} from 'react-router-dom'
import './index.css'

const StateRow = props => {
  const {details} = props
  const {
    stateCode,
    stateName,
    confirmed,
    recovered,
    deceased,
    population,
  } = details
  const active = confirmed - (parseInt(recovered) + parseInt(deceased))
  return (
    <li className="state-wise-stats-li">
      <div className="state-wise-color1">
        <Link to={`/state/${stateCode}`} className="home-link">
          <p className="state-wise-color2">{stateName}</p>
        </Link>
      </div>

      <p className="state-wise-color confirmed-count">{confirmed}</p>
      <p className="state-wise-color active-count">{active}</p>
      <p className="state-wise-color recovered-count">{recovered}</p>
      <p className="state-wise-color deceased-count">{deceased}</p>
      <p className="state-wise-color population-count">{population}</p>
    </li>
  )
}

export default StateRow
