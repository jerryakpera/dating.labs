var base64 = require("base-64")
var utf8 = require("utf8")
var moment = require("moment")
var uniqid = require("uniqid")

module.exports = {
  encode: string => {
    const bytes = utf8.encode(string)
    var encoded = base64.encode(bytes)
    return encoded
  },
  encodeJSON: string => {
    const stringified = JSON.stringify(string)
    const bytes = utf8.encode(stringified)
    var encoded = base64.encode(bytes)
    return encoded
  },
  decodeJSON: string => {
    const decoded = base64.decode(string)
    return JSON.parse(decoded)
  },
  storage: {
    save: (title, item) => {
      localStorage.setItem(title, item)
    },
    get: (name) => {
      return localStorage.getItem(name)
    },
    remove: (name) => {
      localStorage.removeItem(name)
    }
  },
  dateFromString: string => {
    const parts = string.split("/")
    const year = parts[2]
    const month = parseInt(parts[1]) - 1
    const day = parseInt(parts[0]) + 1
    
    return new Date(year, month, day)
  },
  yearDifference: date => {
    const now = moment(new Date())
    var end = moment(date)

    var duration = moment.duration(now.diff(end))
    return duration.asYears()
  },
  getDOB: date => {
    const dateParts = date.split("/")

    return `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`
  },
  getID: () => uniqid()
}