import React, { Component } from 'react';
import { PageHeader, small, Carousel, Media } from 'react-bootstrap';
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
import PageBigData from './bigData'
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
        const card1 = require('../static/class1.jpg');
        const card2 = require('../static/class2.jpg');
        const card3 = require('../static/class3.jpg');
        const card4 = require('../static/class4.jpg');
        const card5 = require('../static/class5.jpg');

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
                        <Link to='/plan' className='link'>
                            <div className='menuitem' >
                                <div className='menuitem-left' >游学一键规划</div>
                            </div>
                        </Link>
                        <Link to='/bigData' className='link'>
                            <div className='menuitem' >
                                <div className='menuitem-left'>游学大数据</div>
                            </div>
                        </Link>
                        <div className='menuitem' >
                            <div className='menuitem-left'>游学直播</div>
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
                        <PageHeader><small>热门课程推荐</small></PageHeader>
                        <div>
                            <MyCard img={card1} title='国际对外德语语言中心' difficulty='高中生' num='303' price='3000' />
                            <MyCard img={card2} title='专属生态拓展项目' difficulty='亲子' num='183' price='6000' />
                            <MyCard img={card3} title='小音乐家的探索营' difficulty='小学生' num='56' price='5000' />
                            <MyCard img={card4} title='百年贵族私校微留学' difficulty='初中生' num='91' price='9000' />
                            <MyCard img={card5} title='人工智能探索' difficulty='大学生' num='123' price='5000' />
                        </div>
                    </div>
                </div>

                <PageBigData />

                <div className='dark' >
                    <div className='body'>
                        <PageHeader><small>教育理念</small></PageHeader>
                        <Media style={{margin:'0 0 50px 0'}}>
                            <Media.Left>
                                <img width={395} height={284} src={require('../static/index4.jpg')} alt="Image" />
                            </Media.Left>
                            <Media.Body>
                                <p style={{ fontSize: '25px' }}>
                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    12年来，希舸德国游学坚持打造高品质游学项目，坚持希舸“诚信负责，真情关爱，好学精进，至高行远”的核心价值观，并将“安全、快乐、成长”作为游学项目运营的核心要素，让学生们在行走中的世界课堂开阔视野，体验精彩人生，启迪游学收获，帮助学生成就更好的自己。
                                </p>
                            </Media.Body>
                        </Media>
                        <Media style={{margin:'0 0 50px 0'}}>
                            <Media.Body>
                                <p style={{ fontSize: '25px' }}>
                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    在12 年的游学征途中，希舸德国游学在中国大陆本土建立起了51 个服务网络，同时将服务范围延伸至海外，在美国洛杉矶及英国伦敦设立了海外独立自主营地，为更多的学生提供优质的游学教育服务。
                                </p>
                                <p style={{ fontSize: '25px' }}>
                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    新东方国际游学与诸多全球高端优质教育资源建立了战略合作关系，包括世界权威英语联盟English UK 认证、美国RusticPathways 公益服务战略合作、联合国青年大会代表团授权招募、哈佛大学领导力夏训营官方合作、康奈尔大学国际辩论赛战略伙伴等，携手世界顶尖教育资源为学生打造行走中的世界课堂。
                                </p>
                            </Media.Body>
                            <Media.Right>
                                <img width={542} height={284} src={require('../static/index5.jpg')} alt="Image" />
                            </Media.Right>
                        </Media>
                    </div>
                </div>
                {/* <div className='' >
                    <div className='body'>
                        <PageHeader><small>产品业务</small></PageHeader>
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
                </div> */}
            </div>
        );
    }
}

export default PageIndex;