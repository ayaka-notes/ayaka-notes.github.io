import React from "react";
import { Button, Typography,Avatar } from "antd";
import { Card, List } from 'antd';
import './linkCard.css';

const { Paragraph } = Typography;
const { Meta } = Card;

const LinkCard = (props) => {
    const openTargetLink = () => {
        console.log('跳转到' + props.CardLink);
        // 新打开一个窗口
        window.open(props.CardLink);
    }

    return (
        <Card title={props.CardTitle} extra={<Button type="dashed" onClick={openTargetLink}>跳转</Button>} hoverable={true} className="link-card">
            <Meta
                avatar={<Avatar src={props.CardAvatar} />}
                title={props.MetaTitle}
                description={props.MetaDescription}
            />
        </Card>
    )
}

export default LinkCard;
