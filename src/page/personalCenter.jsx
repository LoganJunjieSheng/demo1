import React, { Component } from 'react';
import { PageHeader, small, Carousel, Glyphicon } from 'react-bootstrap';
import MyCard from '../components/myCard'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ActionHome from 'material-ui/svg-icons/action/home';
import {
    blueGrey400, grey50, deepOrangeA700
} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';

require('../global/global.css')
require('./classList')
class PagePersonalCenter extends Component {
    render() {
        const card1 = require('../static/card1.jpg');
        const card2 = require('../static/card2.jpg');
        const card3 = require('../static/card3.jpg');
        const card4 = require('../static/card4.jpg');
        const card5 = require('../static/card5.jpg');
        return (
            <div className='body'>
                <PageHeader><small>我的订单</small></PageHeader>
                <Link to='/classInfo '>
                    <div className='my-card class-info'>
                        <div className='class-info-left'>
                            <img height={140} width={248} src={require("../static/classInfo1.png")} />
                        </div>
                        <div className='class-info-right'>
                            <div className='class-info-right-title'>
                                德国多特蒙德足球训练营
                            <FlatButton label={<span style={{ fontSize: '20px', color: deepOrangeA700 }}>体育</span>} primary={true} style={{ margin: ' 3px' }} />
                                <FlatButton label={<span style={{ fontSize: '20px', color: deepOrangeA700 }}>足球</span>} primary={true} style={{ margin: ' 3px' }} />
                            </div>
                            <div className='class-info-right-body' >行程：14-16天</div>
                            <div className='class-info-right-body' >适合年龄：12-19天</div>
                            <div className='class-info-right-body' >截止时间：2018-10-1</div>
                            <div className='class-info-right-body' ><strong style={{ color: deepOrangeA700 }}>付款成功</strong></div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}

export default PagePersonalCenter;