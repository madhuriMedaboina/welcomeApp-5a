// Write your code here

import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: true}

  changeBtn = () => {
    const {isSubscribed} = this.state

    if (isSubscribed === true) {
      this.setState({isSubscribed: false})
    } else {
      this.setState({isSubscribed: true})
    }
  }

  render() {
    const {isSubscribed} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thankyou! Happy Learning</p>
        {isSubscribed ? (
          <button type="button" onClick={this.changeBtn} className="button">
            Subscribe
          </button>
        ) : (
          <button type="button" onClick={this.changeBtn} className="button">
            Subscribed
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
