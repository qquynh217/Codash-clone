import React from "react";
import Icon, {
    ExpandOutlined,
    SearchOutlined,
    TranslationOutlined,
    MailOutlined,
    BellOutlined,
} from '@ant-design/icons';
import { Avatar, Badge, Dropdown, Button } from 'antd';
import { AvaMenu } from './navbar-menu/MenuNavBar'

function NavIcon({ icon }) {
    return (
        <Icon component={icon}
            style={{
                fontSize: '18px',
                color: '#B1B0B0',
            }}
        />
    )
}
export const NavBar = () => {
    return (
        <nav className="nav-bar">
            <div className="nav-left">
                <NavIcon icon={ExpandOutlined} />
                <div className="search">
                    <label htmlFor="search-input">
                        <NavIcon icon={SearchOutlined} />
                    </label>
                    <input
                        id="search-input"
                        type="text"
                        placeholder="Search here..."
                    />
                </div>
            </div>
            <div className="nav-right">
                <NavIcon icon={TranslationOutlined} />
                <div className="noti">
                    <NavIcon icon={BellOutlined} />
                    <Badge color='red' status="processing" />
                </div>
                <NavIcon icon={MailOutlined} />
                <Dropdown overlay={AvaMenu} placement="bottomRight" arrow trigger={['click']}>
                    <Button type="text" style={{
                        width: 'fit-content',
                        padding: 0,
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Avatar size={40} src="https://joeschmoe.io/api/v1/random" />
                    </Button>
                </Dropdown>
            </div>
        </nav>
    )
}