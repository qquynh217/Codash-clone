import React, { useState } from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const categorys = [
    {
        name: 'Main',
        items: [
            getItem('Dash board', 'sub1', <MailOutlined />, [
                getItem(<Link to="/dashboard">Dashboard</Link>, '1',),
                getItem(<Link to="/crypto-currency">Crypto currency</Link>, '2'),
                getItem('Support Center', '3'),
            ]),
            getItem('Menu Styles', 'sub2', <AppstoreOutlined />, [
                getItem('Side Menu Light', '4'),
                getItem('Side Menu Transparent', '5'),
            ]),
        ]
    },
    {
        name: 'UI',
        items: [
            getItem('UI Elements', 'sub3', <MailOutlined />, [
                getItem('Buttons', '6'),
                getItem('Typography', '7'),
                getItem('Notifications', '8'),
            ]),
            getItem('Forms', 'sub4', <AppstoreOutlined />, [
                getItem('Inputs', '9'),
                getItem('Editor', '10'),
            ]),
            getItem('Charts', 'sub5', <AppstoreOutlined />, [
                getItem('Inputs', '11'),
                getItem('Editor', '12'),
            ]),
            getItem('Utilities', 'sub6', <AppstoreOutlined />, [
                getItem('Inputs', '13'),
                getItem('Editor', '14'),
            ]),
        ]
    },
    {
        name: 'Pages',
        items: [
            getItem('Widgets', 'sub7', <MailOutlined />, [
                getItem('Statistic', '1'),
                getItem('Charts', '2'),
                getItem('List', '3'),
            ]),
            getItem('Apps', 'sub8', <AppstoreOutlined />, [
                getItem('Inbox', '5'),
                getItem('To-Do', '6'),
            ]),
        ]
    }
]
const rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4', 'sub5', 'sub6', 'sub7', 'sub8'];
export const MenuAdmin = () => {
    const [openKeys, setOpenKeys] = useState(['sub1']);

    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);

        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    return (
        <div className='codash-menu' style={{ marginTop: '70px' }}>
            {categorys.map((category, index) => {
                return (
                    <div className='codash-sub-menu' key={index}>
                        <div className='sub-menu-title'>{category.name}</div>
                        <Menu
                            mode="inline"
                            theme='dark'
                            openKeys={openKeys}
                            onOpenChange={onOpenChange}
                            style={{
                                width: 256,
                            }}
                            items={category.items}
                        />
                    </div>
                )
            })}
        </div>
    );
};
