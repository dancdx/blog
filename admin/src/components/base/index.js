import { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'

import 'antd/dist/antd.css'
import './index.css'

class BaseComponent extends PureComponent {
  render () {
    return this.props.children
  }
}

export default withRouter(BaseComponent)
