'use strict'

const schedule = require('./schedule.js')
const moment   = require('moment')


const start_time  = moment().hour(schedule.start).minute(0)
const end_time    = moment().hour(schedule.end).minute(0)
const setLength   = 30
const breakLength = 15

const f = (time) => {
  return time.format('h:mmA')
}

module.exports = schedule.bands.map( (band, i, arr) => {
  let setStart = moment(start_time).add(i*(setLength + breakLength), 'minutes')
  return {start: f(setStart), end: f(setStart.add(setLength, 'minutes'))}
})
