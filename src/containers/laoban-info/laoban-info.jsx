import React from "react"
import {connect} from 'react-redux'
import {NavBar, InputItem, Button, TextareaItem} from 'antd-mobile'

import HeaderSelector from "../../components/header-selector/header-selector";

class LaobanInfo extends React.Component{
  state = {
    header: '',  // 头像
    post: '',  // 职位
    info: '',  // 简介
    company: '',  // 公司
    salary: '',  // 月薪
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
            <NavBar>老板信息完善</NavBar>
              <HeaderSelector setHeader={this.setHeader}/>
              <InputItem placeholder='请输入招聘职位' onChange={val => {this.handleChange('post', val)}} >招聘职位</InputItem>
              <InputItem placeholder='请输入公司名称' onChange={val => {this.handleChange('company', val)}} >公司名称</InputItem>
              <InputItem placeholder='请输入期望薪资' onChange={val => {this.handleChange('salary', val)}} >期望薪资</InputItem>
              <TextareaItem title='职位要求' rows={3} onChange={val => {this.handleChange('info', val)}} />
              <Button type='primary' onClick={this.save}>保&nbsp;&nbsp;&nbsp;存</Button>
        </div>
    )
  }
}

export default connect(
    state => ({}),
    {}
)(LaobanInfo)