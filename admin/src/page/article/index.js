import React, { Component } from 'react'
// import * as actions from './actions'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import Box from '@/components/layout'
import { Layout, Menu, Breadcrumb, Icon, Select  } from 'antd'

import styles from './index.css'

const { SubMenu } = Menu
const { Content, Sider } = Layout
const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}
const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
function handleBlur() {
  console.log('blur');
}

function handleFocus() {
  console.log('focus');
}

class Article extends Component {
  render () {
    return (
    <Box page='article'>
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
          <div className = {styles.choose_sort}>
            <label for="sort">选择分类</label>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select a person"
              optionFilterProp="children"
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
            </Select>
          </div>
          <div className = {styles.choose_sort}>
            <label for="sort">选择标签</label>
            <Select
              mode="multiple"
              style={{ width: '100%' }}
              placeholder="Please select"
              defaultValue={['a10', 'c12']}
              onChange={handleChange}
            >
              {children}
            </Select>
          </div>
        </Content>
      </Layout>
    </Box>
  )}
}

export default Article