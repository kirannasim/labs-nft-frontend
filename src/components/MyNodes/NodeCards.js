const NodeCards = ({ userStats }) => {
  return (
    <section className="nodecards">
      <div className="wrapper">
        <div className="card1">
          <div className="card-title">$Looklabs balance</div>
          <div className="card-value">{userStats?.goalProgressPercent}</div>
          {/* <div className="card-value">125.1248</div> */}
        </div>
        <div className="card2">
          <div className="card-title">$LOOKLABS BALANCE</div>
          <div className="card-value">{userStats?.networkNodeCount}</div>
          {/* <div className="card-value">125.1248</div> */}
        </div>
        <div className="card-group">
          <div className="card31">
            <div className="card-title">YOUR LOOK NODES LISCENSES</div>
            <div className="card-value">{userStats?.licenseCount}</div>
            {/* <div className="card-value">2</div> */}
          </div>
          <div className="card32">
            <div className="card-title">YOUR LOOK NODES LISCENSES</div>
            <div className="card-value">{userStats?.licenseCount}</div>
            {/* <div className="card-value">2</div> */}
          </div>
        </div>
        <div className="card4">
          <div className="card-title">YOUR REFERAL CODE</div>
          <div className="card-value">{userStats?.referralCode}</div>
          {/* <div className="card-value">7H392M3</div> */}
        </div>
      </div>
      <div className="addItemBtn">
        <button type="button" className="addBtn bb_16_medium">
          ADDITEM
        </button>
      </div>
    </section>
  )
}

export default NodeCards
