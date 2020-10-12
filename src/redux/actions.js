// 包含n个action creator 同步action 异步action

import {
  reqLogin,
  reqRegister
} from '../api/index'
import {AUTH_SUCCESS, ERROR_MSG} from './action-types'

// 异步转同步, 授权成功的同步action
const authSuccess = (user) => ({type: AUTH_SUCCESS, data: user})
// 错误信息提示的同步action
const errorMsg = (msg) => ({type: ERROR_MSG, data: msg})

// 注册异步action
export const register = (user) => {
  const {username, password, re_password, type} = user
  //return dispatch => {
    // 发送注册异步ajax请求, 用await代替
    // const promise = reqRegister(user)
    // promise.then(response => {
    //   const result = response.data  // {code: 0/1, data: {}, msg: ''}
    // })
  // 做前端表单验证, 不通过返回一个同步action
  if(!username){
    return errorMsg('用户名不能为空')
  }else if(password!==re_password){
    return errorMsg('俩次密码不一致')
  }
  // 合法, 返回一个发ajax的异步action函数
  return async dispatch => {
    const response = await reqRegister({username, password, type})
    const result = response.data
    if(result.code===0){
      // 分发成功的action
      dispatch(authSuccess(result.data))
    }else {
      // 分发失败的action
      dispatch(errorMsg(result.msg))
    }
  }
}
// 登陆异步action
export const login = (user) => {
  //return dispatch => {
  // 发送注册异步ajax请求, 用await代替
  // const promise = reqRegister(user)
  // promise.then(response => {
  //   const result = response.data  // {code: 0/1, data: {}, msg: ''}
  // })
  // 做前端表单验证, 不通过返回一个同步action
  const {username, password} = user
  if(!username){
    return errorMsg('用户名不能为空')
  }else if(!password){
    return errorMsg('密码不能为空')
  }
  return async dispatch => {
    const response = await reqLogin(user)
    const result = response.data
    if(result.code===0){
      // 分发成功的action
      dispatch(authSuccess(result.data))
    }else {
      // 分发失败的action
      dispatch(errorMsg(result.msg))
    }
  }
}
