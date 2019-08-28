import React from 'react';
import { Form, Input, Button, Col, Layout, Icon, message } from 'antd';
import { Link } from "react-router-dom";
import axios from 'axios';
import baseUrl from '../router/rootUrl'
// import {Link} from 'react-router-dom'
import '../App.css'

const md5 = require('MD5')
const { Content } = Layout;

const formItemLayout = {
  labelCol: { span: 12 },
  wrapperCol: { span: 18, offset: 3 },
};
const formTailBotton = {
  labelCol: { span: 12, offset: 8 },
  wrapperCol: { span: 18, offset: 3 },
}
class DynamicRule extends React.Component {
  state = {
    status: 'login',
  };

  check = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.info('success', values);
        console.log(baseUrl, 'baseUrl')
          axios.post('https://easy-mock.com/mock/5d06f25326fd400859685f28/Demo/loginCheck', {
            name: values.username,
            password: values.password,
          })
          .then(function (response) {
            if (response.data.code === 1) {
              message.info(response.data.msg);
              console.log(response.data.msg,md5('123456'),'md5')
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    });
  };

  handleChange = (data, e) => {
    this.setState(
      {
        status: data,
      },
    );
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Layout>
        <Content className="bg-img">
          <Col span={6} offset={9} className="LoginForm">
            <Col>
              <Col span={11}>
                <h1 className="text-right" name="1" onClick={(e) => this.handleChange('login', e)}>
                  <span className="pointer" style={this.state.status === 'login' ? { borderBottom: '2px solid #ea6f5a', color: '#ea6f5a' } : {}}>登录</span>
                </h1>
              </Col>
              <Col span={2} className="text-center">
                <b style={{ fontSize: '20px' }}>·</b>
              </Col>
              <Col span={11}>
                <h1 className="text-left" name="2" onClick={(e) => this.handleChange('register', e)}>
                  <span className="pointer" style={this.state.status === 'register' ? { borderBottom: '2px solid #ea6f5a', color: '#ea6f5a' } : {}}>
                    <Link to="/register" replace >注册</Link>
                  </span>
                </h1>
              </Col>
            </Col>

            <Form.Item {...formItemLayout} style={{ marginTop: '60px' }}>
              {getFieldDecorator('username', {
                rules: [
                  {
                    required: true,
                    message: '请输入用户名',
                  },
                ],
              })(<Input size="large" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名" />)}
            </Form.Item>
            <Form.Item {...formItemLayout}>
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: '请输入密码',
                  },
                ],
              })(<Input size="large" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入密码" type="password" />)}
            </Form.Item>
            <Form.Item {...formTailBotton}>
              <Button size="large" type="primary" className="text-center" shape="round" onClick={this.check} block>确 认</Button>
            </Form.Item>
            <Form.Item {...formTailBotton} className="borderTop">
              <Col span={10} className="text-center" style={{ paddingTop: '5px' }}>
                <Icon className="pointer" style={{ fontSize: '28px', color: '#498ad5' }} type="qq" />
              </Col>
              <Col span={10} offset={4} className="text-center" style={{ paddingTop: '5px' }}>
                <Icon className="pointer" style={{ fontSize: '28px', color: '#00bb29' }} type="wechat" />
              </Col>
            </Form.Item>
          </Col>
        </Content>
      </Layout>
    );
  }
}

const login = Form.create({ name: 'dynamic_rule' })(DynamicRule);


export default login;
