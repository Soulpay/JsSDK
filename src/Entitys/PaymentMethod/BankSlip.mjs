import BankSlipModel from '../../Models/BankSlipPayment.mjs'
class BankSlip {
  constructor ({ expirationDate = null, instructions = null } = {}) {
    this._expirationDate = expirationDate
    this._instructions = instructions
  }

  toJson () {
    const bankSlip = this
    const JsonObject = {}
    Object.keys(this).map(key => {
      if (bankSlip[key]) {
        JsonObject[BankSlipModel[key]] = bankSlip [key]
      }
    })
    return JsonObject
  }

  get expirationDate () {
    return this._expirationDate
  }

  set expirationDate (expirationDate) {
    this._expirationDate = expirationDate
  }

  get instructions () {
    return this._instructions
  }

  set instructions (instructions) {
    this._instructions = instructions
  }
}
export default BankSlip
