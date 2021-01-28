import React,{useState} from "react";
import "./Dashboard.css";
import bitcoin from "../../../src/img/bitcoin2.png";

const Dashboard = ({ moeda }) => {
  return (
    <div className="main">
      <div className="rigth">
        <h1>Bitcoin (BTC)</h1>
      </div>
      <div className="left">
        <div className="bitcoin-container">
          <div className="bitcoin-box">
            <img src={bitcoin} alt="Bitcoin-venda" width="30" height="30" />
            R$<span key={moeda.buy}> {moeda.buy} </span> compra
          </div>
          <div className="bitcoin-box">
            <img src={bitcoin} alt="Bitcoin-venda" width="30" height="30" />
            R$<span key={moeda.buy}> {moeda.sell} </span> venda
          </div>
          <div className="bitcoin-box">
            <img src={bitcoin} alt="Bitcoin-venda" width="30" height="30" />
            R$<span key={moeda.open}> {moeda.open} </span> compra
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
