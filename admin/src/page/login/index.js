import React, { Component } from 'react'
import * as actions from './actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Form, Icon, Input, Button, Checkbox  } from 'antd'
import Box from '@/components/layout'
import { Layout, Menu, Breadcrumb } from 'antd'
import styles from './index.css'

const FormItem = Form.Item
const { SubMenu } = Menu
const { Header, Content, Footer, Sider } = Layout

class NormalLoginForm  extends Component{
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.actions.login(values)
      }
    });
  }

  render () {
    const { getFieldDecorator } = this.props.form
    return (
      <Box>
      <div className={styles.login_page}>
        <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>记住密码</Checkbox>
          )}
          <a className="login-form-forgot" href="">忘记密码</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登陆
          </Button>
          Or <a href="/register">注册</a>
        </FormItem>
      </Form>
      </div>
      </Box>
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

