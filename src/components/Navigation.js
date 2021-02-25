import React from 'react';
import { Menu } from 'antd';

const Navigation = () => {

    return (
        <div class='sticky'>
            <Menu mode="horizontal" style={{ display: 'flex', justifyContent: 'center', padding: '2rem'}}>
                <Menu.Item>
                    <a href="/">Home</a>
                </Menu.Item>
                <Menu.Item>
                    <a href="#about">About</a>
                </Menu.Item>
                <Menu.Item>
                    <a href="#projects">Projects</a>
                </Menu.Item>
                <Menu.Item>
                    <a href="#blog">Blog</a>
                </Menu.Item>
            </Menu>
        </div>
    );
};

export default Navigation;
