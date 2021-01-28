import React, { useEffect, useState } from "react";
import axios from "axios";
import Dashboard from "./dashboard/Dashboard";
import Header from "./header/Header";

const Index = () => {
  const [moeda, setMoeda] = useState({});
  //const [load, setLoad] = useState(false)
  useEffect(() => {
    setInterval(() => {
      axios
        .get(`https://brasilbitcoin.com.br/API/prices/BTC`)
        .then((response) => {
          setMoeda(response.data);
        });
      // setLoad(true)
    }, 6000);
  }, []);

  return (
    <>
      {/*{!load ? (<span>Loading....</span>):(<span>foi</span>) }*/}
      <Header />
      <Dashboard moeda={moeda} />
    </>
  );
};

export default Index;
