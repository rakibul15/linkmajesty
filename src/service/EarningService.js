import axiosInstance from "./Api";

class EarningService {
  earningList() {
    return axiosInstance.get('/get-earning-list',);
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


}

export default new EarningService();