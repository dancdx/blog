import React, { Component } from 'react'
import * as actions from './actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Form, Icon, Input, Button, Checkbox  } from 'antd'
import styles from './index.css'

const FormItem = Form.Item

class NormalLoginForm  extends Component{
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

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render () {
    const { getFieldDecorator } = this.props.form
    const { username, password } = this.state
    console.log(this.props)
    return (
      <div className={styles.login_page}>
        <h1>博客后台管理系统</h1>
        <input name='username' value={username} onChange={this.setValue}/>
        <input name='password' value={password} onChange={this.setValue}/>
        <button onClick={this.login}>login</button>
        <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
      </div>
    )
  }
}
const Login = Form.create()(NormalLoginForm)

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

