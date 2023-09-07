import React from "react";
import { Layout, theme } from "antd";
import { Input, Space, Select } from 'antd';
import "./webContent.css";

const { Content } = Layout;
const { Search } = Input;

const options = [
    {
        value: 'baidu',
        label: '百度',
    },
    {
        value: 'google',
        label: '谷歌',
    },
];


const WebContent = (props) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const opacity = props.opacity ? props.opacity : 1;
    const bgColor = props.bgColor ? props.bgColor : colorBgContainer;

    return (
        <Content className="webcontent">
            {/* <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Space.Compact style={{ width: "400px", height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Select defaultValue="百度" options={options} size="large" />
                    <Search
                        placeholder="input search text"
                        enterButton="Search"
                        size="large"
                    />
                </Space.Compact>
            </div> */}

            <div
                className="site-content"
                style={{
                    background: bgColor,
                    opacity: opacity,
                }}
            >
                {props.children}
            </div>

        </Content>
    )
};

export default WebContent;

