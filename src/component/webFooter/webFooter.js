import React from "react";
import { Layout } from 'antd';
import "./webFooter.css";
const { Footer } = Layout;

const WebFooter = () => {
    return (
        <Footer
            className="webfooter"
        >
            <div className="webfooter_text"
            >   Copyright ©{new Date().getUTCFullYear()} <a href="https://github.com/Musicminion"> Musicminion</a>
            </div>

        </Footer>
    )
};

export default WebFooter;
