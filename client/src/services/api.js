import axios from "axios";

export const sendSOS = (data) => {
  return axios.post("http://localhost:5000/api/alerts/sos", data);
};