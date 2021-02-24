import React from 'react';
import { Menu } from 'antd';
import { GithubOutlined, LinkedinOutlined, MediumOutlined } from '@ant-design/icons';

const Footer = () => {

    return (
        <div class='sticky-footer'>
            <Menu mode='horizontal' style={{display: 'flex', justifyContent: 'center', color: 'white', backgroundColor: 'black', padding: '2rem'}}>
                <Menu.Item>
                    <GithubOutlined />
                    <a style={{ color: 'white' }} href='https://github.com/marybees'>GitHub</a>
                </Menu.Item>
                <Menu.Item>
                    <LinkedinOutlined />
                    <a  style={{ color: 'white' }} href='https://www.linkedin.com/in/maryebaker/'>LinkedIn</a>
                </Menu.Item>
                <Menu.Item>
                    <MediumOutlined />
                    <a style={{ color: 'white' }} href='https://maryebees.medium.com'>Blog</a>
                </Menu.Item>
            </Menu>
        </div>
    );
};

export default Footer;
