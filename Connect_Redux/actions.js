import { firebaseApp } from '../Components/Authentication/FirebaseConfig'
export const LOADING = 'LOADING'
export const SUCCESSFUL = 'SUCCESSFUL'
export const ERROR = 'ERROR'

export function Data_Loading() {
  return {
    type: LOADING
  }
}

export function Data_OK(list) {
  return {
    type: SUCCESSFUL,
    payload: { list }
  }
}

export function Data_Error(error) {
  return {
    type: ERROR,
    payload: { error }
  }
}

export function GetData() {
  return dispatch => {
    dispatch(Data_Loading());
    return fetch('http://192.168.56.1:8080')
      // địa chỉ IP của máy ảo VirtualBox trong cmd -> ipconfig (có thể tùy máy)
      .then(res => res.json())
      .then(obj => {
        dispatch(Data_OK(obj.list))
        return obj.list
      })
      .catch(error => dispatch(Data_Error(error)))
  }
}

export function FirebaseData() {
  return dispatch => {
    const phoneData = firebaseApp.database().ref('New_Product')
    dispatch(Data_Loading());
    phoneData.once('value',
      snap => {
        console.log(Object.values(snap.val()))
        dispatch(Data_OK(Object.values(snap.val())))
      }).catch(error => dispatch(Data_Error(error)))
  }
}