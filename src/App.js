import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: false,
  }

  renderButton = () => {
    const {isLoggedIn} = this.state
    let button
    if (isLoggedIn === true) {
      button = <button type="button">Logout</button>
    } else {
      button = <button type="button">Login</button>
    }
    return button
  }

  clickButton = () => {
    this.setState(prevState => ({
      isLoggedIn: !prevState.isLoggedIn,
    }))
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="container">
        <Welcome greeting="Hi" />
        {isLoggedIn && (
          <button onClick={this.clickButton} type="button">
            Logout
          </button>
        )}
        {!isLoggedIn && (
          <button onClick={this.clickButton} type="button">
            Login
          </button>
        )}
      </div>
    )
  }
}

export default App
