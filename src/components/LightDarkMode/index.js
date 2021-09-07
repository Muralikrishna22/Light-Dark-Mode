import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {lightMode: true}

  changeModeBtn = () => {
    this.setState(prevState => ({lightMode: !prevState.lightMode}))
  }

  changeBtn = () => {
    const {lightMode} = this.state

    if (lightMode === true) {
      return 'Light Mode'
    }
    return 'Dark Mode'
  }

  changeMode = () => {
    const {lightMode} = this.state

    if (lightMode === true) {
      return 'dark-mode'
    }
    return 'light-mode'
  }

  render() {
    const btnName = this.changeBtn()

    const mode = this.changeMode()

    return (
      <div className="bg-container">
        <div className={mode}>
          <h1>Click To Change Mode</h1>
          <button className="change-mode-btn" onClick={this.changeModeBtn}>
            {btnName}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
