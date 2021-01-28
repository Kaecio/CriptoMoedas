import axios from "axios";

const api = axios.get({
  baseURL:`https://brasilbitcoin.com.br/API/prices/BTC`
});

export default api;