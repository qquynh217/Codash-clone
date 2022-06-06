import React from 'react';
import { Menu } from 'antd';

export const AvaMenu = (
    <Menu
        items={[
            {
                key: '1',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                        Profile
                    </a>
                ),
            },
            {
                key: '2',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                        Inbox
                    </a>
                ),
            },
            {
                key: '3',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                        Settings
                    </a>
                ),
            },
            {
                key: '4',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                        Log Out
                    </a>
                ),
            },
        ]}
    />
);