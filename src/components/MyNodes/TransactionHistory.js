import symbolIcon from "../../assets/images/symbol-icon.png";
const TransactionHistory = () => {
  return (
    <section className="history-container">
      <h3 className="history-title">TRANSACTION HISTORY</h3>
      <table className="transaction-history-table">
        <tr className="table-header">
          <th>
            <div className="round-rect">
              <img src={symbolIcon} />
            </div>
          </th>
          <th>LOCK DISTRIBUSTION</th>
          <th>Datesdafdfffasdfasdf</th>
          <th>Time sdafsdfasdf</th>
          <th>Amount sdafasfdasfasdf</th>
          <th>
            <button type="button" className="invoice-button">
              SEE INVOICE
            </button>
          </th>
        </tr>
        <tr className="table-body">
          <td>1</td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
        </tr>
      </table>
    </section>
  );
};

export default TransactionHistory;
