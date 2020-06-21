/*
包含n个接口请求函数的模块
函数的返回值： promise对象
 */
import ajax from './ajax'
// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
// eslint-disable-next-line no-undef,no-template-curly-in-string
export const reqAddress = (geohash) => ajax('/position/${geohash}')
// [2、获取食品分类列表](#2获取食品分类列表)<br/>
export const reqFoodTypes = () => ajax('/index_category')
// [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>
export const reqShops = (longitude, lattitude) => ajax('/shops', {longitude, lattitude})
/**
 * 账号密码登录
 */
export const reqPwdLogin = (name, pwd, captcha) => ajax('/api/login_pwd', {
  name,
  pwd,
  captcha
}, 'POST')
/**
 * 获取短信验证码
 */
export const reqSendCode = phone => ajax('/api/sendcode', {phone})
/**
 * 手机号验证码登录
 */
export const reqSmsLogin = (phone, code) => ajax('/api/login_sms', {phone, code}, 'POST')
/**
 * 获取用户信息 ( 根据会话 )
 */
export const reqUser = () => ajax('/api/userinfo')
/**
 * 请求登出
 */
export const reqLogout = () => ajax('/api/logout')
