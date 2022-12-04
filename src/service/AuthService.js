import axiosInstance from "./Api";

class AuthService {
  register(value) {
    return axiosInstance.post('/register', value);
  }

  login(value) {
    return axiosInstance.post('/login', value);
  }

  resetPassword(value) {
    return axiosInstance.get('/reset-password', value);
  }

  // singleRack(id) {
  //   return axiosInstance.get('/store-management/racks/' + id);
  // }
  //
  // updateRack(id, value) {
  //   return axiosInstance.put('/store-management/racks/' + id, value);
  // }
  //
  // toggleStatus(id, status) {
  //   return axiosInstance.patch(`/store-management/racks/${id}?active=${status}`);
  // }
  //
  // searchRack(size, data) {
  //   return axiosInstance.post(`/store-management/racks/search/?size=${size}`, data);
  // }
  //
  // getRackByRoom(id) {
  //   return axiosInstance.get('/store-management/racks/rack-list/' + id);
  // }


}

export default new AuthService();