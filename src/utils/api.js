// utils/API.js

import axios from "axios";

export default axios.create({
  baseURL: "",
  responseType: "json"
});
