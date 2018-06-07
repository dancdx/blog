import React, { Component } from 'react'
import * as actions from './actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styles from './index.css'

class Login extends Component{
  constructor () {
    super()
    this.state = {
      username: '',
      password: ''
    }
    this.setValue = this.setValue.bind(this)
    this.login = this.login.bind(this)
  }
  login () {
    const params = this.state
    this.props.actions.login(params)
  }

  setValue (e) {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  render () {
    const { username, password } = this.state
    console.log(this.props)
    return (
      <div className={styles.login_page}>
        <h1>博客后台管理系统</h1>
        <input name='username' value={username} onChange={this.setValue}/>
        <input name='password' value={password} onChange={this.setValue}/>
        <button onClick={this.login}>login</button>
      </div>
    )
  }
}

const mapStateToProps = ({ login }) => {
  return {
    login
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions,dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

