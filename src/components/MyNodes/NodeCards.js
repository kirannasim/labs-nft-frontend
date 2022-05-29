import rect1 from "../../assets/images/rect1.png";
import rect2 from "../../assets/images/rect2.png";
import rect4 from "../../assets/images/rect4.png";
import rect31 from "../../assets/images/rect31.png";
import rect32 from "../../assets/images/rect32.png";
const NodeCards = () => {
  return (
    <section className="nodecards">
      <div className="wrapper">
        <div className="card1">
          <div className="card-title">$Looklabs balance</div>
          <div className="card-value">125.1248</div>
        </div>
        <div className="card2">
          <div className="card-title">$LOOKLABS BALANCE</div>
          <div className="card-value">125.1248</div>
        </div>
        <div className="card-group">
          <div className="card31">
            <div className="card-title">YOUR LOOK NODES LISCENSES</div>
            <div className="card-value">2</div>
          </div>
          <div className="card32">
            <div className="card-title">YOUR LOOK NODES LISCENSES</div>
            <div className="card-value">2</div>
          </div>
        </div>
        <div className="card4">
          <div className="card-title">YOUR REFERAL CODE</div>
          <div className="card-value">7H392M3</div>
        </div>
      </div>
      <div className="addItemBtn">
        <button type="button" className="addBtn">
          ADDITEM
        </button>
      </div>
    </section>
  );
};

export default NodeCards;
