import OrderModel from '../../Models/OrderModel.js'
class Order {
  constructor ({
    referenceNum = null,
    billing = null,
    customer = null,
    payment = null,
    metaData = null
  } = {}) {
    ;(this._referenceNum = referenceNum),
    (this._billing = billing),
    (this._payment = payment),
    (this._metaData = metaData),
    (this._customer = customer)
  }

  toJson () {
    const order = this
    const JsonObject = {}
    Object.keys(order).map(key => {
      if(order[key]){
        JsonObject[OrderModel[key]] = order[key]
      }
    })
    return JsonObject
  }

  get referenceNum () {
    return this._referenceNum
  }

  set referenceNum (referenceNum) {
    this._referenceNum = referenceNum
  }

  get billing () {
    return this._billing
  }

  set billing (billing) {
    this._billing = billing
  }

  get customer () {
    return this._customer
  }

  set customer (customer) {
    this._customer = customer
  }

  get payment () {
    return this._payment
  }

  set payment (payment) {
    this._payment = payment
  }

  get metaData () {
    return this._metaData
  }

  set metaData (metaData) {
    this._metaData = metaData
  }
}
export default Order
