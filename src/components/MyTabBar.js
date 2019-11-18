import React, { Component } from 'react'

import { TabBar ,Icon} from 'antd-mobile';

export default class MyTabBar extends Component {
    render() {
        return (
            <div>
                  <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    tabBarPosition="bottom"
                >
                    <TabBar.Item
                        title="首页"
                        key="home"
                        icon={
                            <Icon type="check-circle"/>
                        }
                        selectedIcon={<div style={{
                        width: '22px',
                        height: '22px',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                        />
                        }
                     
                        badge={1}
                        onPress={() => {
                        this.setState({
                            selectedTab: 'blueTab',
                        });
                        }}
                        data-seed="logId"
                    >
                      
                    </TabBar.Item>
                </TabBar>
            </div>
        )
    }
}
