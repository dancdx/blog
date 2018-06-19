import { Layout, Menu, Breadcrumb, Icon } from 'antd'
import React, { Component } from 'react'
import styles from './index.css'

const { SubMenu } = Menu
const { Header, Content, Footer, Sider } = Layout

class Box extends Component {
  render () {
    const { children } = this.props
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <h1 className={styles.title_header}>博客后台管理系统</h1>
          <div className={styles.user_info}>
            <a className={styles.username} href='javascript:void(0)'>1</a>
            <a className={styles.user_exit} href='javascript:void(0)'>退出</a>
          </div>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          { children }
        </Content>
        <Footer style={{ textAlign: 'center' }}>
        © 2018 dancdx with help from Jekyll Bootstrap and Twitter Bootstrap
        </Footer>
      </Layout>
    )
  }
}

export default Box
