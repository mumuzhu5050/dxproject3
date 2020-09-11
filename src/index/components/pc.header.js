import React from 'react'

import { Row,Col } from 'antd'
import { Menu } from 'antd'
import {
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    LoadingOutlined,
    CloudSyncOutlined,
    FieldBinaryOutlined,
    WifiOutlined
  } from '@ant-design/icons'

export default class PCHeader extends React.Component{
    constructor(){
        super();
        this.state={
            current:"top"
        }
    }

    render(){
        return(
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="#" class="logo">
                            <img src='../../images/logo.png' />
                            <span>BUG</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu selectedKeys={[this.state.current]} mode="horizontal">
                            <Menu.Item key="top">
                            <HomeOutlined />头条
                            </Menu.Item>
                            <Menu.Item key="shehui">
                            <SmileOutlined />社会
                            </Menu.Item>
                            <Menu.Item key="guonei">
                            <SyncOutlined spin />国内
                            </Menu.Item>
                            <Menu.Item key="guoji">
                            <LoadingOutlined />国际
                            </Menu.Item>
                            <Menu.Item key="yule">
                            <SettingFilled />娱乐
                            </Menu.Item>
                            <Menu.Item key="tiyu">
                            <CloudSyncOutlined />体育
                            </Menu.Item>
                            <Menu.Item key="keji">
                            <FieldBinaryOutlined />科技
                            </Menu.Item>
                            <Menu.Item key="shishang">
                            <WifiOutlined />时尚
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </header>
        )
    }
}
