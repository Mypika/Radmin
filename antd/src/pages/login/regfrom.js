import React from 'react';

import { Form, Icon, Input, Button,} from 'antd';
import './login.css'

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  componentWillMount(){
      
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
    <div>
        <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
            {getFieldDecorator('username', {
                rules: [{ required: true, message: '用户名为空' }],
            })(<Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="username" allowClear
                />,)}
            </Form.Item>
            <Form.Item>
            {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码' }],
            })(<Input.Password 
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="password" allowClear /> ,)}
            </Form.Item>
            <Form.Item>
            {getFieldDecorator('Secpassword', {
                rules: [{ required: true, message: '两次密码不一致' }],
            })(<Input.Password
                prefix={<Icon type="block" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="重复你的密码" allowClear />,)}
            </Form.Item>
            
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    注册
                </Button>
            </Form.Item>
             <Form.Item className="login-form-reg">
                <Button ghost type="primary" size="small"  onClick={this.props.toggle.bind(this,true)} >
                   返回登录
                </Button>
            </Form.Item>
        </Form>
    </div>
    );
  }
}
const LoginFrom = Form.create({ name: 'normal_login' })(NormalLoginForm);
export default LoginFrom;
