import React from 'react';
import { Layout, Tabs } from 'antd';
import { useLocation } from 'react-router-dom';

import WebHeader from '@/component/webHeader/webHeader';
import WebFooter from '@/component/webFooter/webFooter';
import WebContent from '@/component/webContent/webContent';
import NotesList from '@/component/notesList/notesList';


const tabLists = [
    {
        key: 'app',
        label: `笔记列表`,
        children: <NotesList />,
    },
];


const Home = () => {
    // 解析URL里面的query参数
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const tab = query.get('tab');
    let activeTab = query.get('tab');

    for (let i = 0; i < tabLists.length; i++) {
        if (tabLists[i].key === tab) {
            activeTab = tabLists[i].key;
            break;
        }

        if (i === tabLists.length - 1) {
            activeTab = tabLists[0].key;
        }
    }

    const onTabChange = (key) => {
        // window.location.href = '/user?tab=' + key;
        // 获取当前的 URL
        let currentURL = new URL(window.location.href);

        //  将 "newTabValue" 替换为你想要设置的新查询参数值
        currentURL.searchParams.set("tab", key);

        // 只替换URL但是不要刷新页面
        window.history.replaceState({}, "", currentURL);
    }


    return (
        <Layout>
            <WebHeader />
            <WebContent>
                <Tabs defaultActiveKey={activeTab} items={tabLists} onChange={onTabChange} />
            </WebContent>
            <WebFooter />
        </Layout>
    );
};
export default Home;