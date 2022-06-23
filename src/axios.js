import axios from "axios";

const instance = axios.create({
  baseURL: "https://whatsappclonepro.herokuapp.com/",
});

export default instance;
