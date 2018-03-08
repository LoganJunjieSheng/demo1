import React, { Component } from 'react';
import { PageHeader, small, Carousel } from 'react-bootstrap';
import MyCard from '../components/myCard'
require('../global/global.css')
require('./index.css')
class PageIndex extends Component {
    render() {
        const card1 = require('../static/card1.jpg');
        const card2 = require('../static/card2.jpg');
        const card3 = require('../static/card3.jpg');
        const card4 = require('../static/card4.jpg');
        const card5 = require('../static/card5.jpg');
        return (
            <div className='home'>
                <div>
                    <Carousel >
                        <Carousel.Item >
                            <img height={500} alt="900x500" src={require("../static/index1.jpg")} />
                            <Carousel.Caption>
                                {/* <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img height={500} alt="900x500" src={require("../static/index2.jpg")} />
                            <Carousel.Caption>
                                {/* <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img height={500} alt="900x500" src={require("../static/index3.jpg")} />
                            <Carousel.Caption>
                                {/* <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                {/* <div className=''>
                    <div className='body'>
                        <PageHeader><small>热门课程</small></PageHeader>
                        <div className='hot'>
                            <MyCard img={card1} title='基础德语教育' difficulty='入门' num='123' price='100' />
                            <MyCard img={card2} title='基础德语教育' difficulty='入门' num='123' price='100' />
                            <MyCard img={card3} title='基础德语教育' difficulty='入门' num='123' price='100' />
                            <MyCard img={card4} title='基础德语教育' difficulty='入门' num='123' price='100' />
                            <MyCard img={card5} title='基础德语教育' difficulty='入门' num='123' price='100' />
                        </div>
                    </div>
                </div> */}
                <div className='dark' >
                    <div className='body'>
                        <PageHeader><small>教学模式</small></PageHeader>
                        <div>
                            12344
                        </div>
                    </div>
                </div>
                <div className='' >
                    <div className='body'>
                        <PageHeader><small>德国师资</small></PageHeader>
                        <div>
                            12344
                        </div>
                    </div>
                </div>
                <div className='dark' >
                    <div className='body'>
                        <PageHeader><small>课程体系</small></PageHeader>
                        <div>
                            12344
                        </div>
                    </div>
                </div>
                <div className='' >
                    <div className='body'>
                        <PageHeader><small>公开课</small></PageHeader>
                        <div>
                            12344
                        </div>
                    </div>
                </div>
                <div className='dark' >
                    <div className='body'>
                        <PageHeader><small>上课流程</small></PageHeader>
                        <div>
                            12344
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageIndex;