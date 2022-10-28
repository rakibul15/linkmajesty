import {notification} from "antd";

export const getErrorMessage = error => {
  try {
    return error.response?.data?.apiErrors[0]?.message
  } catch (e) {
    return 'Something Went Wrong!';
  }
}


export function notifySuccess(message) {
  notification['success']({message})
}

export function notifyError(message) {
  notification['error']({message})
}

export function notifyResponseError(error) {
  notifyError(getErrorMessage(error))
}

export function notifyWarning(message) {
  notification['warning']({message})
}

export function notifyInfo(message) {
  notification['info']({message})
}