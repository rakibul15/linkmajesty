export const getJWTToken = () => {
  return localStorage.getItem('token');
}

export const getErrorMessage = error => {
  try {
    return error.response?.data?.apiErrors[0]?.message
  } catch (e) {
    return 'Something Went Wrong!';
  }
}