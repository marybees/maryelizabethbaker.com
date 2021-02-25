import React from 'react';
import { Button, List, Avatar } from 'antd';
import Tree from './Tree.JPEG';

const Blog = () => {

    let listData = [
        {
            href: 'https://maryebees.medium.com/oh-snap-three-easy-steps-to-include-a-google-map-in-your-react-app-96d253abf0e5?sk=53203f2c34a9ba13d4b7170f5efbfabe',
            title:'Oh, Snap! Three Easy Steps to Include a Google Map in Your React App',
            avatar: 'https://miro.medium.com/max/1050/1*8fbwCbNGnwtrMvI9icsGRA.png',
            description: 'React functional component with hooks documentation for the Google Maps Javascript API, using the google-maps-react npm package.',
        },
        {
            href: 'https://maryebees.medium.com/create-react-app-in-5-easy-steps-a-step-by-step-guide-4e3a6db37f31?sk=01bcdc431000fe77e3a110a042d39298',
            title:'Create a React App in 5 Easy Steps: A Step-by-Step Guide',
            avatar: 'https://miro.medium.com/max/1050/1*zBBmXpHHhRfjhx4syyr6Dw.png',
            description: 'Learn how to build a React app from scratch using create-react-app and GitHub.',
        },
        {
            href: 'https://maryebees.medium.com/dependency-arrays-for-days-the-react-useeffect-hook-explained-by-a-beginner-for-beginners-9ea69afc0d21?sk=ff02e5c08eb45abb87a71208e560136b',
            title:'Dependency Arrays for Days: The React UseEffect Hook Explained by a Beginner for Beginners',
            avatar: 'https://miro.medium.com/max/1050/1*1LEyVMjUdrojwngEqPrfEQ.png',
            description: 'Learn about the React useEffect hook, side effects, and dependency arrays from a software developer beginner for beginner coders.',
        },
        {
            href: 'https://maryebees.medium.com/it-takes-a-village-f65bc5c554c?source=friends_link&sk=4ddfda56d8a62c21a874f950a2c1dd50',
            title:'It Takes a Village: My Journey From (HTML) Tags to Software Glitches',
            avatar: 'https://miro.medium.com/max/1050/0*8chA8qCJrKquvqHS',
            description: 'Why I decided to change careers, study Full Stack Web Development at Lambda School, and coding the Village Book Builders React app using Ant Design.',
        },
        {
            href: 'https://maryebees.medium.com/my-leap-into-a-career-in-software-development-d73a667580eb?sk=99d862482634eb7d17f2d4526bccf8b7',
            title:'My Leap Into a Career in Software Development',
            avatar: 'https://miro.medium.com/max/1050/1*Mrymy_h_8NdLvSx2rzxN7A.jpeg',
            description: 'Read about how I overcame my misconceptions about software development and my decision to change careers and become a Full Stack Web Developer.',
        },
        {
            href: 'https://maryebees.medium.com/how-to-excel-as-a-developer-56f0cd40a297?sk=b4d5d5bfff065b994cc9546e61800545',
            title:'How to Excel as a Developer: Advice from a Business Program Manager',
            avatar: 'https://miro.medium.com/max/900/1*PL-i83GDuHQYumXsD91v4Q.jpeg',
            description: 'My tips on how to become a better programmer, teammate,  and overall employee. Improve your soft skills to excel as a software developer.',
        }
    ]

    // const listData = [];
    // for (let i = 0; i < 23; i++) {
    //     listData.push({
    //         href: 'https://ant.design',
    //         title: `ant design part ${i}`,
    //         avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    //         description:
    //         'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    //         content:
    //         'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    //     });
    // }

    return (
        <div>
            <div class='title-container' style={{ backgroundImage: `url(${Tree})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
                <h1>I'm a lifelong learner</h1>
                <h2>and thrive in environments where I can help others</h2>
                <a href='#posts'><Button primary style={{margin: '1rem'}}>Check out my blog</Button></a>
            </div>
            <div style={{ padding: '2rem' }} id='posts'></div>
            <div class='blog-container'>
                <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 3,
                    }}
                    dataSource={listData}
                    footer={
                    <div>
                        <b>maryebees.medium.com</b> blog
                    </div>
                    }
                    renderItem={item => (
                    <List.Item
                        key={item.title}
                        extra={
                        <img
                            width={272}
                            alt="logo"
                            src={item.avatar}
                        />
                        }
                    >
                        <List.Item.Meta
                        avatar={<Avatar src='https://miro.medium.com/fit/c/262/262/1*qeSBLYVWwalTSmlaV5mUsw.png' />}
                        title={<a href={item.href}>{item.title}</a>}
                        description={item.description}
                        />
                        {item.content}
                    </List.Item>
                    )}
                />,
            </div>
        </div>
    )
}

export default Blog



