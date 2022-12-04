import axiosInstance from "./Api";

class EarningService {
  earningList() {
    return axiosInstance.get('/get-earning-list',);
  }
}

export default new EarningService();