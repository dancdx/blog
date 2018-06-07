import { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'

import './index.css'

class BaseComponent extends PureComponent {
  render () {
    return this.props.children
  }
}

export default withRouter(BaseComponent)
