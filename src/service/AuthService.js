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

  VerifyResetPassword(value) {
    return axiosInstance.post('/verify-reset-password', value);
  }

  updateUserPassword(value) {
    return axiosInstance.post('/update-user-password', value);
  }


}

export default new AuthService();