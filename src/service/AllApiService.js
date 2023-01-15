import axiosInstance from "./Api";

class AllApiService {
  paymentList() {
    return axiosInstance.get('/get-payment-list',);
  }
  paymentRequest(data) {
    return axiosInstance.post('/payment-request',data);
  }




}

export default new AllApiService();