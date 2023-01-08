import {Component} from 'react'
import {GrFormClose} from 'react-icons/gr'
import './index.css'

class Notification extends Component {
  render() {
    const {children} = this.props

    return (
      <>
        <div className="notification-container">
          <div className="icon-text-container">{children}</div>
          <div>
            <GrFormClose />
          </div>
        </div>
      </>
    )
  }
}

export default Notification
