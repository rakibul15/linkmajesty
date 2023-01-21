import axiosInstance from "./Api";

class AuthService {
  register(value) {
    return axiosInstance.post('/register', value);
  }

  login(value) {
    return axiosInstance.post('/login', value);
  }

  resetPassword(value) {
    return axiosInstance.post('/reset-password', value);
  }

  Validate(value) {
    return axiosInstance.post('/verify-user-email', value);
  }


}

export default new AuthService();