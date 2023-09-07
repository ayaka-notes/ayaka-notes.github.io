import React from "react";
import { Layout } from 'antd';
import MyAvatar from "@/component/myAvatar/myAvatar";
import './webHeader.css';

const { Header } = Layout;

const WebHeader = () => {

    return (
        <div>
            <Header className="webheader">
                <div className="webheader_logo"> 
                    <MyAvatar />
                    <span className="webheader_logo_name">&nbsp; Ayaka Notes</span>
                </div>
                <div className="webheader_right">
                </div>
            </Header>
        </div>
    )
};

export default WebHeader;

