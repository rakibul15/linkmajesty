import axiosInstance from "./Api";

class AllApiService {
  paymentList(currentPage) {
    return axiosInstance.get(`/get-payment-list?page=${currentPage}`,);
  }

  paymentRequest(data) {
    return axiosInstance.post('/payment-request', data);
  }


}

export default new AllApiService();