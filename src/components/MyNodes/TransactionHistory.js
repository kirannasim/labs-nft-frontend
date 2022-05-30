import symbolIcon from "../../assets/images/symbol-icon.png";
const TransactionHistory = () => {
  const transactions = [
    {
      date: "4 JUNE 2022",
      time: "14.00",
      account: "459.57",
    },

    {
      date: "4 JUNE 2022",
      time: "14.00",
      account: "459.57",
    },
    {
      date: "4 JUNE 2022",
      time: "14.00",
      account: "459.57",
    },
    {
      date: "4 JUNE 2022",
      time: "14.00",
      account: "459.57",
    },
    {
      date: "4 JUNE 2022",
      time: "14.00",
      account: "459.57",
    },
    {
      date: "4 JUNE 2022",
      time: "14.00",
      account: "459.57",
    },
    {
      date: "4 JUNE 2022",
      time: "14.00",
      account: "459.57",
    },
    {
      date: "4 JUNE 2022",
      time: "14.00",
      account: "459.57",
    },
    {
      date: "4 JUNE 2022",
      time: "14.00",
      account: "459.57",
    },
    {
      date: "4 JUNE 2022",
      time: "14.00",
      account: "459.57",
    },
  ];
  return (
    <section className="history-container">
      <h3 className="history-title">TRANSACTION HISTORY</h3>
      <table className="transaction-history-table">
        {transactions.map((transaction, index) => (
          <div className="row-wrapper" key={index}>
            <tr className="table-header">
              <div className="symbolIcon">
                <div className="round-rect">
                  <img src={symbolIcon} />
                </div>
                <div className="data-title">LOCK DISTRIBUSTION</div>
              </div>
              <th>Date</th>
              <th>Time </th>
              <th>Amount </th>
              <th>
                <button type="button" className="invoice-button">
                  SEE INVOICE
                </button>
              </th>
            </tr>
            <tr className="table-body">
              <td></td>
              <td>{transaction.date}</td>
              <td>{transaction.time}</td>
              <td>{transaction.account}</td>
            </tr>
          </div>
        ))}
      </table>
      <div className="show-more">
        <button type="button" className="showBtn">
          SHOW MORE
        </button>
      </div>
    </section>
  );
};

export default TransactionHistory;
