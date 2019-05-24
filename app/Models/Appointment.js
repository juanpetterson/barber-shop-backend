'use strict'

const Model = use('Model')

class Appointment extends Model {
  users () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Appointment
