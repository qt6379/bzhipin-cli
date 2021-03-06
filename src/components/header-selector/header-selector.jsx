// 用户头像选择UI组件
import React from "react"
import {List, Grid} from 'antd-mobile'
import {PropTypes} from 'prop-types'

export default class HeaderSelector extends React.Component {
  static propTypes = {
    setHeader: PropTypes.func.isRequired
  }

  state = {
    icon: null
  }

  constructor(props) {
    super(props);
    this.headerList = []
    for (let i = 0; i < 20; i++) {
      this.headerList.push({
        text: '头像' + (i + 1),
        icon: require(`../../assets/images/头像${i + 1}.png`)  // 不能使用import
      })
    }
  }

  handleClick = ({text, icon}) => {
    // 更新当前组件状态icon
    this.setState({icon})
    // 更新父组件状态header
    this.props.setHeader(text)
  }

  render() {
    const {icon} = this.state
    const listHeader = !icon ? '请选择头像' : (
      <div>
        已选择头像: <img src={icon} alt=''/>
      </div>
    )
    return (
        <List renderHeader={() => listHeader}>
          <Grid data={this.headerList} columnNum={5}
                onClick={this.handleClick}/>
        </List>
    )
  }
}