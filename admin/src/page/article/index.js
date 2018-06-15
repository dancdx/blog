import React, { Component } from 'react'
// import * as actions from './actions'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import styles from './index.css'

import { Layout, Menu, Breadcrumb, Icon } from 'antd'
const { SubMenu } = Menu
const { Header, Content, Footer, Sider } = Layout

class Article extends Component {
  render () {
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
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Layout style={{ padding: '24px 0', background: '#fff' }}>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <SubMenu key="sub1" title={<span><Icon type="user" />文章管理</span>}>
              <Menu.Item key="1">添加文章</Menu.Item>
              <Menu.Item key="2">文章列表</Menu.Item>
            </SubMenu>            
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          Content
        </Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
    © 2018 dancdx with help from Jekyll Bootstrap and Twitter Bootstrap
    </Footer>
  </Layout>
  )}
}

export default Article