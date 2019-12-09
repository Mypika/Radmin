import React, { Component } from 'react';
import { Layout, Menu, Icon,Row,Col,Dropdown,Tooltip ,Input,Modal} from 'antd';

import {BrowserRouter as Router, Route} from 'react-router-dom'
import './home.css'

import {HomeRoute} from '../../router/router'
import index from '../homepages/index';

const { Header, Sider, Content} = Layout;

class Home extends Component {
  state = {
    collapsed: false,//左侧菜单栏是否隐藏
    HomeComent:index,//显示对应router组件
    classDrop:false,//头像样式状态
    HomeSarch:false,//搜索框显示状态
    SearchStatus:false,//搜索框点击状态
    Searchclass:'',//搜索框动画类，避免首次加载有不需要的动画

  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  //右侧菜单栏点击切换路由组件
  HomeSiderSkip=(data)=>{
    this.setState({
      HomeComent:data
    })
  }
  //用户图标点击事件
  DropClick=(e)=>{
    switch(e.key){
      case '1':
          console.log('1')
        break;
      case '2':
        break;
      case '5':
        //退出登录，删除sessionStorage
        sessionStorage.removeItem('username')
        this.props.history.go()
        break;
      default:
        break;
    }
  }
  //搜索图标点击切换
  SarchChange=()=>{
        this.setState({
          HomeSarch:!this.state.HomeSarch,
          Searchclass:this.state.HomeSarch?'noHomeSarch':'HomeSarch'
        },()=>{
          if(this.state.HomeSarch){
            this.Search.focus()
          }})
  }
  //搜索
  onSearch=(e)=>{
    Modal.confirm({ title: '你需要搜索什么？',})
  }
  //鼠标移入移出切换颜色
  userDrop=(data)=>{
    this.setState({
      classDrop:data,
    })
  }
  render() {
    return (  
      <Layout className="Root">
        <Sider theme="light " trigger={null} collapsible  collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="light " mode="inline" defaultSelectedKeys={['1']}>
            {HomeRoute.map((item,index)=>{
                return item.child
                        ?
                        <Menu.SubMenu
                        key={'sub'+item.id}
                        title={
                          <span>
                            <Icon type={item.icon} />
                            {this.state.collapsed?'':item.name}
                          </span>}>
                          {item.child.map(item_1=>{
                            return <Menu.Item key={item_1.id}>option9</Menu.Item>
                          })}
                      </Menu.SubMenu>
                      :
                      <Menu.Item key={item.id} onClick={this.HomeSiderSkip.bind(this,item.commtent)}>
                      <Icon type={item.icon} />
                        <span>{item.name}</span>
                    </Menu.Item>
            })}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', paddingLeft:'24px',paddingRight:'80px' }}>
              <Row justify='space-between' type='flex'>
                    <Col>
                      <Icon
                          className="trigger"
                          type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                          onClick={this.toggle}/>
                    </Col>
                    <Col>
                        <Row justify='space-between' type='flex'>
                          <Col style={{paddingLeft:'50px'}}>
                              <div style={{display:'flex',justifyContent:'center',alignItems:"center",height:'100%',overflow:'hidden'}}> 
                              <Icon  style={{fontSize:this.state.HomeSarch?'20px':'25px'}} type={this.state.HomeSarch?'close-circle':'search'} onClick={this.SarchChange.bind(this,true)} />
                              <Input.Search
                                  className={this.state.Searchclass}
                                  ref = {e=>this.Search=e}
                                  placeholder="input search text"
                                  onSearch={this.onSearch.bind(this)}
                                  enterButton="搜索"
                                  style={{ width:this.state.HomeSarch?300:0,marginLeft:10}}/>
                              </div>
                          </Col>
                          <Col style={{paddingLeft:'50px'}}>
                            <Tooltip mouseEnterDelay={0.001} mouseLeaveDelay={0.001} title={<span>点个星星吧(●'◡'●)</span>}>
                              <a href='https://github.com/Mypika/Radmin' style={{cursor:'pointer'}}>
                                <Icon style={{fontSize:'25px',color:'#474747'}}  type="github" /></a>
                            </Tooltip >
                          </Col>
                          <Col style={{paddingLeft:'50px',justifyContent:"center",display:'flex'}} onMouseOut={this.userDrop.bind(this,false)}>
                          <Dropdown overlay={<Menu onClick={this.DropClick} className='Menus'>
                                                <Menu.ItemGroup key="g2" title="界面设置">
                                                  <Menu.Item key="1">
                                                    <Icon type="fullscreen" />全屏显示
                                                  </Menu.Item>
                                                  <Menu.Item key="2">
                                                  <Icon type="sync" />恢复默认主题色</Menu.Item>
                                                </Menu.ItemGroup>
                                                <Menu.ItemGroup key="g1" title="用户设置">
                                                  <Menu.Item key="3">
                                                  <Icon type="edit" />修改密码</Menu.Item>
                                                  <Menu.Item key="4">
                                                  <Icon type="form" />修改个人信息</Menu.Item>
                                                  <Menu.Item key="5">
                                                  <Icon type="poweroff" />退出登录
                                                  </Menu.Item>
                                                </Menu.ItemGroup>
                                              </Menu>}  >
                                    <div className={this.state.classDrop?'userDrop':''} style={{display:'flex',flexDirection:'row',alignItems: "center"}} 
                                        onMouseOver={this.userDrop.bind(this,true)}>
                                        <img 
                                          alt={'头像'} 
                                          style={{width:'40px',height:'40px',borderRadius:'10px'}} 
                                          src='http://b.hiphotos.baidu.com/image/pic/item/908fa0ec08fa513db777cf78376d55fbb3fbd9b3.jpg' />
                                          <span style={{marginLeft:'20px'}}>
                                            123456(超级管理员)
                                          </span>
                                    </div>
                          </Dropdown>
                          </Col>
                        </Row>
                    </Col>
              </Row>
          </Header>
          <Layout style={{
                  position:'absolute',
                  left:this.state.collapsed ? '80px' :'200px',
                  right:'0',
                  top:'64px',
                  bottom:'0',
                  overflow:'hidden',
              }}>
          <Content
              style={{
                padding: 24,
                background: '#f5f5f5',
                height:'100%',
                overflowY:'scroll'}}>
            <Router>
                <Route component={this.state.HomeComent}></Route>
              </Router>
            </Content>
        </Layout>
        </Layout>
      </Layout>
    );
  }
}
 
export default Home;