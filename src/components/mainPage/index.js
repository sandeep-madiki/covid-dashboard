import {Component} from 'react'

import {BsSearch} from 'react-icons/bs'

import './index.css'

class MainPage extends Component {
  componentDidMount() {
    this.getFetchData()
  }

  getFetchData = async () => {
    const url = 'https://apis.ccbp.in/covid19-timelines-data'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)

    // NOT UNDERSTANDING NEXT STEP
  }

  render() {
    return (
      <div className="main-con">
        <div className="search-con">
          <BsSearch className="search-icon" />
          <input
            type="search"
            className="search-el"
            placeholder="Enter the State"
          />
        </div>
      </div>
    )
  }
}

export default MainPage
