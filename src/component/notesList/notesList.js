import React from "react";
import { List } from 'antd';
import LinkCard from '@/component/linkCard/linkCard';

const data = [
    {
        CardTitle: '应用系统体系架构',
        CardLink: 'https://web-arch.ayaka.space',
        CardAvatar: 'https://web-arch.ayaka.space/img/favicon.ico',
        MetaTitle: '(2021-2022-2)-SE3353',
        MetaDescription: '[开源] 陈昊鹏',
    },
    {
        CardTitle: '软件测试',
        CardLink: 'https://ayaka-notes.github.io/softwaretest-notes/',
        CardAvatar: 'https://web-arch.ayaka.space/img/favicon.ico',
        MetaTitle: '本-(2022-2023-2)-SE3336',
        MetaDescription: '[开源] 姚建国',
    },
    {
        CardTitle: '软件工程原理与实践',
        CardLink: '',
        CardAvatar: 'https://web-arch.ayaka.space/img/favicon.ico',
        MetaTitle: '(2021-2022-2)-SE3330',
        MetaDescription: '[尚未开源] 沈备军',
    },
    {
        CardTitle: '计算机系统基础(ICS)',
        CardLink: '',
        CardAvatar: 'https://web-arch.ayaka.space/img/favicon.ico',
        MetaTitle: 'SE2307、SE2316、SE2317',
        MetaDescription: '[尚未开源] 臧斌宇、陈榕、古金宇',
    },
    {
        CardTitle: '考研数学公式汇集',
        CardLink: '',
        CardAvatar: 'https://www.overleaf.com/favicon.ico',
        MetaTitle: '线代、高数、概统',
        MetaDescription: '[尚未公开] 可能会提供PDF下载',
    },
];

const NotesList = () => {
    return (
        <div>
            <h3>个人笔记</h3>

            <List
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 2,
                    lg: 3,
                    xl: 3,
                    xxl: 4,
                }}
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <LinkCard CardTitle={item.CardTitle} CardLink={item.CardLink} MetaTitle={item.MetaTitle} MetaDescription={item.MetaDescription} CardAvatar={item.CardAvatar} />
                    </List.Item>
                )}
            />
        </div>
    )
}

export default NotesList;