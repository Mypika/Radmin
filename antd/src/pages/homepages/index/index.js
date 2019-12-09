import React, { Component } from 'react';

import {Layout,Card,Row,Col,Icon} from 'antd'
import HomeEchar from '../../../comtents/echart/Homechar'
import CountUp from 'react-countup'
import './index.css'
const {Content } = Layout;

//卡片头部封装
function CardTit(icon,msg,color) {
    return (<div className={'Left_top_meau'} style={{color:color}}>
    <Icon type={icon} />
    <span>{msg}</span>
</div>)
}
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        
         }
    }
    componentDidMount(){

    }
    CardOver=(e)=>{
        console.log(123)
    }
    render() {
        return ( 
        <div className="HomeIndex">
           <Layout className='HomeIndex-left'>
               <Content>
                 <Row gutter={24}>
                    <Col span={6}>
                        <Card onClick={this.CardOver.bind(this)} className="CardOver" title={CardTit('user-add','新增用户','#38be00')}>
                            <div className='Left_top_num' style={{color:'#38be00'}}>
                            <CountUp separator={','} duration={2} end={8127} />
                            </div>
                        </Card>
                    </Col>
                    <Col span={6}  >
                        <Card onClick={this.CardOver} className="CardOver" title={CardTit('message','新增留言','#2196f3')}>
                             <div className='Left_top_num' style={{color:'#2196f3'}}>
                             <CountUp separator={','} duration={2} end={52} />
                            </div>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card onClick={this.CardOver} className="CardOver" title={CardTit('carry-out','待办事项','#ffe500')}>
                             <div className='Left_top_num' style={{color:'#ffe500'}}>
                             <CountUp separator={','} duration={2} end={160527} />
                            </div>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card onClick={this.CardOver.bind(this)} className="CardOver" title={CardTit('bug','错误日志','#ff0000')}>
                            <div className='Left_top_num' style={{color:'#ff0000'}} >
                            <CountUp separator={','} duration={2} end={16} />
                            </div>
                        </Card>
                    </Col>
                 </Row>
                </Content>
                <Content>
                    <HomeEchar/>
                </Content>
           </Layout>
           <Layout className='HomeIndex-right'>
                <Content>
                    <Card title="版本信息">
                        <Card.Grid >1.0.5</Card.Grid>
                        <Card.Grid>1.1.5</Card.Grid>
                        <Card.Grid>1.2.5</Card.Grid>
                        <Card.Grid>2.0.5</Card.Grid>
                        <Card.Grid>3.0.5</Card.Grid>
                        <Card.Grid>4.0.5</Card.Grid>
                    </Card>
                </Content>
           </Layout>
        </div>
         );
    }
}
export default Index;