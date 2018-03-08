import React, { Component } from 'react';
import { PageHeader, small, Carousel,Glyphicon } from 'react-bootstrap';
import MyCard from '../components/myCard'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ActionHome from 'material-ui/svg-icons/action/home';
require('../global/global.css')
require('./index.css')
class PagePersonalCenter extends Component {
    render() {
        const card1 = require('../static/card1.jpg');
        const card2 = require('../static/card2.jpg');
        const card3 = require('../static/card3.jpg');
        const card4 = require('../static/card4.jpg');
        const card5 = require('../static/card5.jpg');
        return (
            <div className='home'>
                <div>

                </div>
                <div className=''>
                    <div className='body'>
                        <PageHeader>
                            <small>
                                <Link className='link' to=''>
                                    热门课程 
                                </Link>
                            </small>
                        </PageHeader>
                        <div className='hot'>
                            {/* <div className='hot-wrap'> */}
                            <MyCard img={card1} title='基础德语教育' difficulty='入门' num='123' price='100' />
                            <MyCard img={card2} title='基础德语教育' difficulty='入门' num='123' price='100' />
                            <MyCard img={card3} title='基础德语教育' difficulty='入门' num='123' price='100' />
                            <MyCard img={card4} title='基础德语教育' difficulty='入门' num='123' price='100' />
                            <MyCard img={card5} title='基础德语教育' difficulty='入门' num='123' price='100' />
                            {/* </div> */}
                        </div>
                    </div>

                </div>
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

export default PagePersonalCenter;