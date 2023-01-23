import axiosInstance from "./Api";

class AllApiService {
  paymentList(currentPage) {
    return axiosInstance.get(`/get-payment-list?page=${currentPage}`,);
  }

  userImage(data) {
    return axiosInstance.post('/update-user-image', data);
  }

  userInfoUpdate(data) {
    return axiosInstance.post('/update-user-info', data);
  }


}

export default new AllApiService();