import React from "react"
import {Button, InputItem, List, NavBar, Radio, WhiteSpace, WingBlank} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import Logo from '../../components/logo/Logo'
import {register} from '../../redux/actions'

const ListItem = List.Item
class Register extends React.Component{
  state = {
    username: '',
    password: '',
    re_password: '',
    type: 'boss'
  }

  register = () => {
    // console.log(this.state)
    this.props.register(this.state)
  }
  handleChange = (name, val) => {
    this.setState({
      [name]: val // js中将字符串转变成变量
    })
  }
  toLogin = () => {
    this.props.history.push('/login')
  }

  render() {
    const {type} = this.state
    const {msg, redirectTo} = this.props.user
    if(redirectTo){
      return <Redirect to={redirectTo}/>
    }

    return(
        <div>
          <NavBar>硅&nbsp;谷&nbsp;直&nbsp;聘</NavBar>
          <Logo/>
          <WingBlank>
            <List>
              {msg ? <div className='error-msg'>{msg}</div>: null}
              <WhiteSpace/>
              <InputItem placeholder='请输入用户名' onChange={val => {this.handleChange('username', val)}}>用户名:</InputItem>
              <WhiteSpace/>
              <InputItem placeholder='请输入密码' type="password" onChange={val => {this.handleChange('password', val)}}>密&nbsp;&nbsp;&nbsp;码:</InputItem>
              <WhiteSpace/>
              <InputItem placeholder='请输入确认密码' type="password" onChange={val => {this.handleChange('re_password', val)}}>确认密码:</InputItem>
              <WhiteSpace/>
              <ListItem>
                <span>用户类型:</span>
                &nbsp;&nbsp;&nbsp;
                <Radio checked={type === 'dashen'} onChange={() => {this.handleChange('type', 'dashen')}}>求职</Radio>
                &nbsp;&nbsp;&nbsp;
                <Radio checked={type === 'boss'} onChange={() => {this.handleChange('type', 'boss')}}>老板</Radio>
              </ListItem>
              <WhiteSpace/>
              <Button type="primary" onClick={this.register}>注册</Button>
              <WhiteSpace/>
              <Button onClick={this.toLogin}>登录</Button>
            </List>
          </WingBlank>
        </div>
    )
  }
}

// 包装产生一个容器组件, 完成与redux的交互
export default connect(
    state => ({user: state.user}),
    {register}
)(Register)