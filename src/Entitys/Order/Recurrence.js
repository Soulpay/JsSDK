import Order from './Order.js'
import RecurrenceModel from '../../Models/RecurrenceModel.js'
class Recurrence extends Order {
  constructor ({
    referenceNum = null,
    customer = null,
    billing = null,
    shipping = null,
    creditCard = null,
    payment = null,
    metaData = null,
    recurring = null
  } = {}) {
    super({
      referenceNum: referenceNum,
      billing: billing,
      customer: customer,
      metaData: metaData,
      payment: payment
    })
    this._shipping = shipping
    this._creditCard = creditCard
    this._recurring = recurring
  }
  toJson () {
    const order = this
    const JsonObject = {}
    Object.keys(order).map(key => {
      if (order[key]) {
        JsonObject[RecurrenceModel[key]] = order[key]
      }
    })
    return JsonObject
  }

  get shipping () {
    return this._shipping
  }

  set shipping (shipping) {
    this._shipping = shipping.toJson()
  }

  get creditCard () {
    return this._creditCard
  }

  set creditCard (creditCard) {
    this._creditCard = creditCard.toJson()
  }

  get recurring () {
    return this._recurring
  }

  set recurring (recurring) {
    this._recurring = recurring.toJson()
  }
}
export default Recurrence