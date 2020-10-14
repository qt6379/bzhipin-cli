import React from "react"
import {connect} from 'react-redux'
import {Button, InputItem, NavBar, TextareaItem} from "antd-mobile";

import HeaderSelector from "../../components/header-selector/header-selector";

class DashenInfo extends React.Component{
  state = {
    header: '',  // 头像
    post: '',  // 职位
    info: '',  // 简介
  }

  handleChange = (name, val) => {
    this.setState({
      [name]: val
    })
  }
  save = () => {
    console.log(this.state)
  }

  setHeader = (header) => {
    this.setState({
      header: header
    })
  }

  render() {
    return(
        <div>
          <NavBar>大神信息完善</NavBar>
          <HeaderSelector setHeader={this.setHeader}/>
          <InputItem placeholder='请输入求职岗位' onChange={val => {this.handleChange('post', val)}}>求职岗位</InputItem>
          <TextareaItem title='个人介绍' rows={3} placeholder='请输入个人介绍' onChange={val => {this.handleChange('info', val)}}/>
          <Button type='primary' onClick={this.save}>保&nbsp;&nbsp;&nbsp;存</Button>
        </div>
    )
  }
}

export default connect(
    state => ({}),
    {}
)(DashenInfo)