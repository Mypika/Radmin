import React from 'react';

import { Form, Icon, Input, Button, Row, Col} from 'antd';
import './login.css'

class NormalLoginForm extends React.Component {
    constructor(props){
        super(props)
        this.state={
            codes:[],
            codeList:['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
                'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 
                'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 
                'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 
                'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        }
    }
  handleSubmit = e => {
      e.preventDefault()
    this.props.form.validateFields((err, values) => {
        if(!err){
            if(values.vifcode.toLowerCase()!==this.state.codes.toLowerCase()){
                this.props.form.setFields({
                    vifcode: {
                      value: values.vifcode,
                      errors: [new Error('验证码不正确')],
                    },
                  });
            }else{
                this.props.LoginSkip()
            }   
        }else{
           
        }
    });
  };
  componentDidMount(){
    this.CanViCode()
  }
  CanViCode=()=>{
    const ctx = this.canvas.getContext('2d')
    ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
    let codes = []
    for(let i=0;i<4;i++){
        let num = Math.floor(Math.random()*41)
		let r = Math.floor(Math.random()*255)
		let g = Math.floor(Math.random()*255)
        let b = Math.floor(Math.random()*255)
        ctx.strokeStyle='rgba('+r+','+b+','+g+',1)'
        ctx.font = (Math.random()*20+12)+"px serif";
        ctx.strokeText(this.state.codeList[num],15*(i+1),20)
        codes.push(this.state.codeList[num])
    }
    this.setState({
        codes:codes.join('')
    })
}
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
    <div>
        <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
                <div className='title'>
                    <Icon type="user" />
                    <span>欢迎登录</span>  
                </div>
            </Form.Item>
            <Form.Item>
            {getFieldDecorator('username', {
                rules: [{ required: true, message: '用户名为空' }],
            })(<Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="username" 
                allowClear
                />,)}
            </Form.Item>
            <Form.Item>
            {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码' }],
            })(<Input.Password
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Password"  allowClear/>,)}
            </Form.Item>
            <Form.Item>
            {getFieldDecorator('vifcode', {
                rules: [{ required: true, message: '请输入验证码' }],
            })( <Row justify="space-between" type='flex' >
                    <Col span={14}><Input 
                                    maxLength={4}
                                    prefix={<Icon type="safety-certificate" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                    placeholder="验证码" id="error2" /></Col>
                    <Col ><canvas
                            onClick={this.CanViCode}
                            style={{cursor:'pointer',border:'1px solid #bbb'}}
                            ref={(ref)=>{this.canvas = ref}}
                            width="80" height="35" ></canvas></Col>
                        </Row>,)}
              
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    登入
                </Button>
            </Form.Item>
            <Form.Item className="login-form-reg">
                <Button ghost type="primary" size="small" onClick={this.props.toggle.bind(this,false)} >
                   注册
                </Button>
            </Form.Item>
        </Form>
    </div>
    );
  }
}
const LoginFrom = Form.create({ name: 'normal_login' })(NormalLoginForm);
export default LoginFrom;
