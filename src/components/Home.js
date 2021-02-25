import React from 'react';
import { GithubOutlined, LinkedinOutlined, MediumOutlined } from '@ant-design/icons';
import { Button } from 'antd';
// import Video from './Split.MP4';
import Banff from './Banff.jpeg';

const Home = () => {
    return (
        <div>
            {/* <div>
                <video class='background-video' autoPlay loop muted>
                    <source src={Video} type='video/mp4' />
                </video>
            </div> */}
            <div class='title-container' style={{ backgroundImage: `url(${Banff})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
                <h1>I'm Mary Baker</h1>
                <h2>and I'm a Full Stack Web Developer</h2>
                <div style={{ fontSize: '1.25rem' }}>
                    <a href='https://github.com/marybees'><GithubOutlined style={{ color: 'white', padding: '1rem'}} /></a>
                    <a href='https://www.linkedin.com/in/maryebaker/'><LinkedinOutlined style={{color: 'white', padding: '1rem'}}  /></a>
                    <a href='https://maryebees.medium.com'><MediumOutlined style={{color: 'white', padding: '1rem'}}  /></a>
                </div>
                <Button primary style={{ margin: '1rem' }}><a href='#about'>More about me</a></Button>
            </div>
        </div>
    )
}

export default Home
