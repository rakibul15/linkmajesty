import axiosInstance from "./Api";

class EarningService {
  earningList(currentPage) {
    return axiosInstance.get(`/get-earning-list?page=${currentPage}`);
  }

  numberOfSignup() {
    return axiosInstance.get('/get-number-of-signups',);
  }

  numberOfClicks() {
    return axiosInstance.get('/get-number-of-clicks',);
  }

  numberOfSignupData() {
    return axiosInstance.get('/filter-signup-data',);
  }

  numberOfFilterClick() {
    return axiosInstance.get('/filter-click-log-data?range=last_month',);
  }

  getEarnig() {
    return axiosInstance.get('/get-earning-info',);
  }


}

export default new EarningService();