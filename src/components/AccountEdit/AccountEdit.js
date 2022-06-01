import '../../assets/scss/accountEdit/accountEdit.scss'
import { FiEdit2 } from 'react-icons/fi'
const AccountEdit = () => {
  return (
    <div className="account-eidt-container ">
      <section className="detail-section">
        <section className="detail-wrapper">
          <div className="title bb_34">ACCOUNT DETAILS</div>
          <div className="wrapper">
            <div className="input-group px-1 px-xxl-0">
              <div className="input-title bb_18_regular">FULL NAME</div>
              <div className="input-box">
                <input className="input-edit bb_16_thin" />
                <div className="icon">
                  <FiEdit2 />
                </div>
              </div>
            </div>
            <div className="input-group px-1 px-xxl-0">
              <div className="input-title bb_18_regular">Email Address</div>
              <div className="input-box">
                <input type="text" className="input-edit bb_16_thin" />
                <div className="icon">
                  <FiEdit2 />
                </div>
              </div>
            </div>
            <div className="input-group px-1 px-xxl-0">
              <div className="input-title bb_18_regular">Password</div>
              <div className="input-box">
                <input type="password" className="input-edit bb_16_thin" />
                <div className="icon">
                  <FiEdit2 />
                </div>
              </div>
              <div className="passwordTip bb_16_thin">
                *It’s Contain atleast 4 Character,1 Symbol and others Numeric.
              </div>
            </div>
            <button className="signup px-1 px-xxl-0">Change</button>
          </div>
          <div className="notify-offline">
            <input className="notify-check" type="checkbox" />
            <div className="notification-text">
              Notify me when my node is offline.
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

export default AccountEdit
