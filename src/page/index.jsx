import React, { Component } from 'react';
import { PageHeader, small, Carousel } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MyCard from '../components/myCard'
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import FlatButton from 'material-ui/FlatButton';
import {
    teal500,
    red500,
    blueGrey400,
} from 'material-ui/styles/colors';

require('../global/global.css')
require('./index.css')
class PageIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuHover: {
                hover: false,
                show: '',
                // city: false,
                // age: false,
            }
        };
    }
    menuOver = (e) => {
        let menuHover = Object.assign({}, this.state.menuHover);
        menuHover.hover = true;
        if (!(e == 'hover')) {
            menuHover.show = e;
        }
        menuHover[e] = true;
        this.setState({ menuHover });
    }

    menuOut = () => {
        let menuHover = Object.assign({}, this.state.menuHover);
        menuHover.hover = false;
        // menuHover.city = false;
        // menuHover.age = false;
        this.setState({ menuHover });
    }
    renderMenuHover = () => {
        let city = (<div >
            <PageHeader><small><FlatButton label={<span style={{ fontSize: '30px', color: blueGrey400 }}>游学城市</span>} primary={true} style={{ height: ' 44px' }} /></small></PageHeader>
            <Link to='classList'><FlatButton label={<span style={{ fontSize: '20px', color: blueGrey400 }}>柏林</span>} primary={true} style={{ margin: ' 3px' }} /></Link>
            <FlatButton label={<span style={{ fontSize: '20px', color: blueGrey400 }}>汉堡</span>} primary={true} style={{ margin: ' 3px' }} />
            <FlatButton label={<span style={{ fontSize: '20px', color: blueGrey400 }}>科隆</span>} primary={true} style={{ margin: ' 3px' }} />
            <FlatButton label={<span style={{ fontSize: '20px', color: blueGrey400 }}>德累斯顿</span>} primary={true} style={{ margin: ' 3px' }} />
            <FlatButton label={<span style={{ fontSize: '20px', color: blueGrey400 }}>布莱梅</span>} primary={true} style={{ margin: ' 3px' }} />
            <FlatButton label={<span style={{ fontSize: '20px', color: blueGrey400 }}>慕尼黑</span>} primary={true} style={{ margin: ' 3px' }} />
            <FlatButton label={<span style={{ fontSize: '20px', color: blueGrey400 }}>多特蒙德</span>} primary={true} style={{ margin: ' 3px' }} />
            <FlatButton label={<span style={{ fontSize: '20px', color: blueGrey400 }}>法兰克福</span>} primary={true} style={{ margin: ' 3px' }} />
            <FlatButton label={<span style={{ fontSize: '20px', color: blueGrey400 }}>杜伊斯堡</span>} primary={true} style={{ margin: ' 3px' }} />
            <FlatButton label={<span style={{ fontSize: '20px', color: blueGrey400 }}>杜塞尔多夫</span>} primary={true} style={{ margin: ' 3px' }} />
        </div>)
        let age = (<div >
            <PageHeader><small><FlatButton label={<span style={{ fontSize: '30px', color: blueGrey400 }}>游学年龄</span>} primary={true} style={{ height: ' 44px' }} /></small></PageHeader>
            <FlatButton label={<span style={{ fontSize: '20px', color: blueGrey400 }}>小学生游学</span>} primary={true} style={{ margin: ' 3px' }} />
            <FlatButton label={<span style={{ fontSize: '20px', color: blueGrey400 }}>初中生游学</span>} primary={true} style={{ margin: ' 3px' }} />
            <FlatButton label={<span style={{ fontSize: '20px', color: blueGrey400 }}>高中生游学</span>} primary={true} style={{ margin: ' 3px' }} />
            <FlatButton label={<span style={{ fontSize: '20px', color: blueGrey400 }}>大学生游学</span>} primary={true} style={{ margin: ' 3px' }} />
            <FlatButton label={<span style={{ fontSize: '20px', color: blueGrey400 }}>亲子游学</span>} primary={true} style={{ margin: ' 3px' }} />
        </div>)
        let theme = (<div>
            <PageHeader><small><FlatButton label={<span style={{ fontSize: '30px', color: blueGrey400 }}>游学主题</span>} primary={true} style={{ height: ' 44px' }} /></small></PageHeader>
            <FlatButton label={<span style={{ fontSize: '20px', color: blueGrey400 }}>k12基础教育</span>} primary={true} style={{ margin: ' 3px' }} />
            <FlatButton label={<span style={{ fontSize: '20px', color: blueGrey400 }}>精英教育</span>} primary={true} style={{ margin: ' 3px' }} />
            <FlatButton label={<span style={{ fontSize: '20px', color: blueGrey400 }}>优质语言学校</span>} primary={true} style={{ margin: ' 3px' }} />
            <FlatButton label={<span style={{ fontSize: '20px', color: blueGrey400 }}>主题营地</span>} primary={true} style={{ margin: ' 3px' }} />
            <FlatButton label={<span style={{ fontSize: '20px', color: blueGrey400 }}>体育教育</span>} primary={true} style={{ margin: ' 3px' }} />
        </div>)
        switch (this.state.menuHover.show) {
            case 'city':
                return city;
            case 'age':
                return age;
            case 'theme':
                return theme;
        }
    }
    render() {
        const card1 = require('../static/card1.jpg');
        const card2 = require('../static/card2.jpg');
        const card3 = require('../static/card3.jpg');
        const card4 = require('../static/card4.jpg');
        const card5 = require('../static/card5.jpg');

        return (
            <div className='body'>
                <div className='slogan'>
                    <div className='slo-left'>
                        <div
                            className='menuitem'
                            onMouseOver={() => this.menuOver('city')}
                            onMouseOut={this.menuOut}>
                            <div className='menuitem-left'>游学城市</div>
                            <div className='meunitem-right'>></div>
                        </div>
                        <div className='menuitem'
                            onMouseOver={() => this.menuOver('age')}
                            onMouseOut={this.menuOut}
                        >
                            <div className='menuitem-left'>游学年龄</div>
                            <div className='meunitem-right'>></div>
                        </div>
                        <div className='menuitem'
                            onMouseOver={() => this.menuOver('theme')}
                            onMouseOut={this.menuOut}
                        >
                            <div className='menuitem-left'>游学主题</div>
                            <div className='meunitem-right'>></div>
                        </div>
                        <div className='line'></div>
                        <div className='menuitem' >
                            <div className='menuitem-left'>游学一键规划</div>
                        </div>
                        <div className='menuitem' >
                            <div className='menuitem-left'>游学大数据</div>
                        </div>
                        <div className='menuitem' >
                            <div className='menuitem-left'>游学定制</div>
                        </div>
                    </div>
                    <div className='slo-right'>
                        <div>
                            <Carousel bsClass='carousel'>
                                <Carousel.Item >
                                    <div style={{ height: '100%', width: '984px' }}>
                                        <img height="444px" width="984px" alt="900x500" src={require("../static/slogan1.jpg")} />
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div style={{ height: '444px', width: '984px' }}>
                                        <img height="444px" width="984px" alt="900x500" src={require("../static/slogan2.jpg")} />
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div style={{ height: '444px', width: '984px' }}>
                                        <img height="444px" width="984px" alt="900x500" src={require("../static/slogan3.jpg")} />
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div
                        className='menuhover'
                        style={!this.state.menuHover.hover
                            ? { display: 'none' }
                            : {}
                        }
                        onMouseOver={() => this.menuOver('hover')}
                        onMouseOut={this.menuOut}
                    >
                        <div className='menuhover-wrap'>
                            {this.renderMenuHover()}
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

export default PageIndex;