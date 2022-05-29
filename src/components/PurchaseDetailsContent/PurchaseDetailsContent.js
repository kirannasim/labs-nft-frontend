import '../../assets/scss/purchaseDetails/purchaseDetailsContent.scss'
import gameItemImage from '../../assets/images/gameItem1.png'

const PurchaseDetailsContent = () => {
  return (
    <div className="purchase--detaills__container">
      <div className="bb_34">Purchase Details</div>
      <div className="card--container">
        <div className="connect--card">
          <div className="connect--card__left--space"></div>
          <div className="connect--card__content">
            <h4>Arcx - End game</h4>
            <p className="bb_18_regular">Develpoed By Look labs</p>
            <p className="bb-20_regular">Look Labs Nodes</p>
            <h5>Transaction ID</h5>
            <p className="bb_16_medium">10234567895622</p>
            <div className="connect--card__content--bottom row">
              <div className="col-12 col-md-6 pt-3">
                <h5 className="">Nodes Purchase</h5>
                <p className="bb_16_thin">3,4000/50,000</p>
              </div>
              <div className="col-12 col-md-6 pt-3">
                <h5 className="">Developer</h5>
                <p className="bb_16_thin">Look labs</p>
              </div>
              <div className="col-12 col-md-6 pt-3">
                <h5 className="">Development Status</h5>
                <p className="bb_16_thin">Test Game in development</p>
              </div>
              <div className="col-12 col-md-6 pt-3">
                <h5 className="">Platform</h5>
                <p className="bb_16_thin">Browser</p>
              </div>
            </div>
          </div>
          <button type="button" className="btn btn-primary btn-connect-wallet">
            <div className="bb_16_medium">Connect wallet</div>
          </button>
        </div>
        <div className="purchase--card">
          <div className="cost--container">
            <p className="price-title bb_16_medium">Price</p>
            <p className="bb_16_medium">$19,000</p>
          </div>
          <div className="cost--container">
            <p className="price-title bb_16_medium">Discount</p>
            <p className="bb-20_semi_bold">(-) 2,000</p>
          </div>
          <p className="bb_18_medium">Transaction ID</p>
          <p className="bb_16_medium">10234567895622</p>
          <p className="bb_18_medium">Used Account</p>
          <p className="bb_16_semi_bold">My Bank Savings Account</p>
          <button
            type="button"
            className="purchase--container btn btn-outline-primary  "
          >
            <span className="purchase">PURCHASE</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default PurchaseDetailsContent
