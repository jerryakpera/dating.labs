const axios = require("axios")
const config = require("../config/config")

const axiosInstance = axios.create({
  baseURL: config.mainEndpoint,
  headers: {
    "Content-Type": "application/json"
  }
})

module.exports = axiosInstance
