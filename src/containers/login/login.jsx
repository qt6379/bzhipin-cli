import React from "react"
import {Button, InputItem, List, NavBar, WhiteSpace, WingBlank} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import {login} from '../../redux/actions'
import Logo from '../../components/logo/Logo'

class Login extends React.Component{
  state = {
    username: '',
    password: '',
  }

  login = () => {
    // console.log(this.state)
    this.props.login(this.state)
  }
  handleChange = (name, val) => {
    this.setState({
      [name]: val // js中将字符串转变成变量
    })
  }
  toRegister = () => {
    this.props.history.push('/register')
  }

  render() {
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
              <Button onClick={this.toRegister}>还没有账户?</Button>
              <WhiteSpace/>
              <Button type="primary" onClick={this.login}>登录</Button>
            </List>
          </WingBlank>
        </div>
    )
  }
}
// 包装产生一个容器组件, 完成与redux的交互
export default connect(
    state => ({user: state.user}),
    {login}
)(Login)