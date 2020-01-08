import Request from './Request.js'

let url
class UserRequest extends Request {
  constructor(environment){
    super(null)
    if(environment){
      url = 'https://api.portalsoulpay.com.br/api/v1/'
    }else{
      url = 'https://dev-api.portalsoulpay.com.br/api/v1/'
    }
  }
  async userLogin (user) {
    return super.post(
      url+'auth/login',
      user.toJson()
    )
  }

  async refreshToken(refreshToken) {
    return super.post(
      url+'auth/refresh-token',
      refreshToken.toJson()
    )
  }

  async newRefreshToken (refreshToken) {
    return super.post(
      url+'auth/new-refresh-token',
      refreshToken.toJson()
    )
  }
}
export default UserRequest
