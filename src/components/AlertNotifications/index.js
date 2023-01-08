import {Component} from 'react'

import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'
import './index.css'

class AlertNotification extends Component {
  render() {
    return (
      <div className="total-container">
        <h1>Alert Notifications</h1>
        <Notification>
          <div>
            <AiFillCheckCircle />
          </div>
          <div className="text-container">
            <h1>Success</h1>
            <p>You can access all the files in the folder</p>
          </div>
        </Notification>

        <Notification>
          <div>
            <RiErrorWarningFill />
          </div>
          <div className="text-container">
            <h1>Error</h1>
            <p>
              Sorry, you are not authorized to have access to delete the file
            </p>
          </div>
        </Notification>

        <Notification>
          <div>
            <MdWarning />
          </div>
          <div className="text-container">
            <h1>Warning</h1>
            <p>Viewers of this file can see comments and suggestions</p>
          </div>
        </Notification>

        <Notification>
          <div>
            <MdInfo />
          </div>
          <div className="text-container">
            <h1>Info</h1>
            <p>Anyone on the internet can view these files</p>
          </div>
        </Notification>
      </div>
    )
  }
}

export default AlertNotification
