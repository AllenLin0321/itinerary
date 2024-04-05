import axios from "axios";

const axiosConfig = {
  baseURL: "https://tdx.transportdata.tw/api/basic",
};

export default axios.create(axiosConfig);
