import React from 'react';
import { Button, Card } from 'antd';
import Colosseum from './Colosseum.JPEG';

const Projects = () => {
    const { Meta } = Card;

    let projectData = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1595315342809-fa10945ed07c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fGxpYnJhcnl8ZW58MHwxfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
            title: 'Village Book Builders',
            description: 'React web app for Village Book Builders users: React | JSX | Ant Design',
            url: 'https://github.com/Lambda-School-Labs/village-book-builders-fe-a'
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1584824486539-53bb4646bdbc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZXJyb3IlMjBwYWdlfGVufDB8MXwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
            title: 'Tailwind Error Pages',
            description: '404 and 500 error pages for Tailwind: Javascript | HTML | CSS Grid | Sass',
            url: 'https://www.tailwindapp.com/404'
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1610839563044-8996a168a961?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHN1cmZpbmd8ZW58MHwxfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
            title: 'Surf Break Costa Rica',
            description: 'Costa Rican surf school website: Project Management | Wordpress | CSS',
            url: 'https://surfbreakcostarica.com/'
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1539500541744-338f1eea4e59?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fHN1cmZpbmd8ZW58MHwxfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
            title: 'Surf Break Costa Rica',
            description: 'Costa Rican surf school client and staff app: React | JSX | Tailwind CSS',
            url: 'https://github.com/marybees/surfbreakcostarica'
        },
        {
            id: 5,
            image: 'https://images.unsplash.com/photo-1604164448130-d1df213c64eb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8dGVzbGF8ZW58MHwxfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
            title: 'The Way Ohm',
            description: 'A chronicle of our electric road trip across North America: HTML | CSS | Flexbox',
            url: 'https://thewayohm.com/'
        },
        {
            id: 6,
            image: 'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9nfGVufDB8MXwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
            title: 'Doggonit',
            description: 'A fun, informative app all about dogs: React | JSX | Reactstrap',
            url: 'https://doggonit.vercel.app/'
        },
    ]


    return (
        <div>
            <div class='title-container' style={{ backgroundImage: `url(${Colosseum})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', backgroundAttachment: 'fixed', marginBottom: '3rem' }}>
                <h1>I build cool things</h1>
                <h2>using Javascript, React, HTML & CSS</h2>
                <a href='#target'><Button primary style={{margin: '1rem'}}>See my work</Button></a>
            </div>
            <div id='target' class='card-container'>
                {projectData.map((project) => {
                    return <a href={project.url}>
                        <Card
                        hoverable
                        style={{ width: 300, margin: '3rem' }}
                        cover={<img alt="project" src={project.image} />}
                    >
                        <Meta title={project.title} description={project.description} />
                    </Card></a>
                })}
            </div>
        </div>
    )
}

export default Projects
