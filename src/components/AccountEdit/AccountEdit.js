import "../../assets/scss/accountEdit/accountEdit.scss";
import { FiEdit2 } from "react-icons/fi";
const AccountEdit = () => {
  return (
    <div className="account-eidt-container ">
      <section className="detail-section">
        <section className="detail-wrapper">
          <div className="title">ACCOUNT DETAILS</div>
          <div className="wrapper">
            <div className="input-group">
              <div className="input-title">FULL NAME</div>
              <div className="input-box">
                <input
                  className="input-edit"
                  placeholder="Linthang  Chang "
                ></input>
                <div className="icon">
                  <FiEdit2 />
                </div>
              </div>
            </div>
            <div className="input-group">
              <div className="input-title">Email Address</div>
              <div className="input-box">
                <input
                  type="text"
                  className="input-edit"
                  placeholder="linthangChang@gmail.com "
                ></input>
                <div className="icon">
                  <FiEdit2 />
                </div>
              </div>
            </div>
            <div className="input-group">
              <div className="input-title">Password</div>
              <div className="input-box">
                <input type="password" className="input-edit"></input>
                <div className="icon">
                  <FiEdit2 />
                </div>
              </div>
              <div className="passwordTip">
                *It’s Contain atleast 4 Character,1 Symbol and others Numeric.
              </div>
            </div>
            <button className="signup">SIGN UP</button>
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
  );
};

export default AccountEdit;
