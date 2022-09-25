import Heading from "../layout/Heading";
import { useState, useEffect } from "react";
import { API } from "../constants/api";

function TransactionsList() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(API);

        if (response.ok) {
          const json = await response.json();
          setTransactions(json);
        } else {
          setError("An error occured");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div>ERROR: An error occured</div>;
  }

  return (
    <div>
      <Heading title="Home" />
      {transactions.map(function (transaction) {
        return (
          <div key={transaction} className="card">
            <h2>Representative: {transaction.representative}</h2>
            <h2>Company: {transaction.asset_description}</h2>
            <h2>Date: {transaction.disclosure_date}</h2>
            <h2>Amout: {transaction.amount}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default TransactionsList;
