import React from 'react';
import { Button, Timeline, Divider } from 'antd';
import { BookOutlined, LaptopOutlined } from '@ant-design/icons';
// import Video from './Paros.MP4';
import Scuba from './Scuba.JPG'

const About = () => {

    return (
        <div>
            {/* <div>
                <video class='background-video' autoPlay loop muted>
                    <source src={Video} type='video/mp4' />
                </video>
            </div> */}
            <div class='title-container' style={{ backgroundImage: `url(${Scuba})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
                <h1>I offer a diverse perspective</h1>
                <h2>with a proven track record working on international and remote teams</h2>
                <a href='#target'><Button primary style={{ margin: '1rem' }}>See my experience</Button></a>
            </div>
            <div id='target'>
            <div class='timeline-container'>
                <Timeline mode='alternate'>
                    <Divider style={{ margin: '3rem 0'}}>My Journey</Divider>
                    <Timeline.Item dot={<BookOutlined style={{ fontSize: '16px' }} />}><span>Lambda School</span>, Remote</Timeline.Item>
                    <Timeline.Item><span>2020-2021</span>: Full Stack Web Development</Timeline.Item>
                    <Timeline.Item dot={<LaptopOutlined style={{ fontSize: '16px' }} />}><span>Microsoft</span>, New York, NY / Remote</Timeline.Item>
                    <Timeline.Item><span>2019-2020</span>: Sr. Business Program Manager</Timeline.Item>
                    <Timeline.Item><span>2018-2019</span>: Business Program Manager</Timeline.Item>
                    <Timeline.Item><span>2014-2018</span>: Audience Marketing Manager</Timeline.Item>
                    <Timeline.Item><span>2012-2014</span>: Business and Marketing Administrator</Timeline.Item>
                    <Timeline.Item><span>2012</span>: Business Analyst (Full-Time Graduate Internship)</Timeline.Item>
                    <Timeline.Item dot={<BookOutlined style={{ fontSize: '16px' }} />}><span>University College Dublin Graduate Business School</span>, Dublin Ireland</Timeline.Item>
                    <Timeline.Item><span>2010-2011</span>: Master of Science, Management and Organization Studies</Timeline.Item>
                    <Timeline.Item dot={<BookOutlined style={{ fontSize: '16px' }} />}><span>Marist College</span>, Poughkeepsie, NY</Timeline.Item>
                    <Timeline.Item><span>2005-2009</span>: Bachelor of Arts, Communication/Public Relations</Timeline.Item>
                </Timeline>
            </div>
            </div>
        </div>
    )
}

export default About

