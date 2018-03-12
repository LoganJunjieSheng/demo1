import React, { Component } from 'react';
import { PageHeader, small, Carousel, Glyphicon, Col } from 'react-bootstrap';
import MyCard from '../components/myCard'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ActionHome from 'material-ui/svg-icons/action/home';
import Chip from 'material-ui/Chip';
import {
    blueGrey400, grey50, deepOrangeA700
} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
require('../global/global.css')
require('./classList.css')
class PageClassList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSelectChip: [
                { key: 'city1', label: '柏林' },
            ],
            unSelectChip: {
                city: [
                    { key: 'city1', label: '柏林' },
                    { key: 'city2', label: '汉堡' },
                    { key: 'city3', label: '科隆' },
                    { key: 'city4', label: '德累斯顿' },
                    { key: 'city5', label: '布莱梅' },
                    { key: 'city6', label: '慕尼黑' },
                ],
                theme: [
                    { key: 'theme1', label: 'k12基础教育' },
                    { key: 'theme2', label: '精英教育' },
                    { key: 'theme3', label: '优质语言学校' },
                    { key: 'theme4', label: '主题营地' },
                    { key: 'theme5', label: '体育教育' },
                ],
                age: [
                    { key: 'age1', label: '小学生游学' },
                    { key: 'age2', label: '初中生游学' },
                    { key: 'age3', label: '高中生游学' },
                    { key: 'age4', label: '大学生游学' },
                    { key: 'age5', label: '亲子游学' },
                ]
            }
        };
    }
    deleteChip = (key) => {
        this.isSelectChip = this.state.isSelectChip;
        const chipToDelete = this.isSelectChip.map((chip) => chip.key).indexOf(key);
        this.isSelectChip.splice(chipToDelete, 1);
        this.setState({ isSelectChip: this.isSelectChip });
    }
    addChip = (data) => {
        this.isSelectChip = this.state.isSelectChip;
        // this.unSelectChip = this.state.unSelectChip;
        const chipToAdd = this.isSelectChip.map((chip) => chip.key).indexOf(data.key);
        if (chipToAdd === -1) {
            this.isSelectChip.push(data);
            this.setState({ isSelectChip: this.isSelectChip });
        }

    }
    renderChipIsSelect = (data) => {
        return (
            <Chip
                key={data.key}
                style={{ margin: ' 5px', float: 'left' }}
                onRequestDelete={() => this.deleteChip(data.key)}
                backgroundColor={blueGrey400}
                labelColor={grey50}
            // onClick={handleClick}
            // style={styles.chip}
            >
                {data.label}
            </Chip>
        )
    }

    renderChipUnSelect = (data) => {
        return (
            <Chip
                key={data.key}
                style={{ margin: ' 5px', float: 'left' }}
                // onRequestDelete={this.deleteChip}
                // backgroundColor={blueGrey400}
                labelColor={blueGrey400}
                onClick={() => this.addChip(data)}
            // style={styles.chip}
            >
                {data.label}
            </Chip>
        )
    }
    render() {
        const avatar1 = require('../static/people1.jpg');
        const avatar2 = require('../static/people2.jpg');
        const card3 = require('../static/card3.jpg');
        const card4 = require('../static/card4.jpg');
        const card5 = require('../static/card5.jpg');

        return (
            <div className='body'>
                <PageHeader><small>德国游学课程项目</small></PageHeader>
                <div className='main'>
                    <div className='left'>
                        <div className='my-card filter'>
                            <div className='filter-line clearfix'>
                                <div style={{ float: 'left' }}>已选条件:</div>
                                {this.state.isSelectChip.map(this.renderChipIsSelect, this)}
                            </div>
                            <div className='filter-line clearfix'>
                                <div style={{ float: 'left' }}>选择城市:</div>
                                {this.state.unSelectChip.city.map(this.renderChipUnSelect, this)}
                            </div>
                            <div className='filter-line clearfix'>
                                <div style={{ float: 'left' }}>产品主题:</div>
                                {this.state.unSelectChip.theme.map(this.renderChipUnSelect, this)}
                            </div>
                            <div className='filter-line clearfix'>
                                <div style={{ float: 'left' }}>年龄:</div>
                                {this.state.unSelectChip.age.map(this.renderChipUnSelect, this)}
                            </div>
                        </div>
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
                                </div>
                            </div>
                        </Link>
                        <div className='my-card class-info'>
                            <div className='class-info-left'>
                                <img height={140} width={248} src={require("../static/class2.jpg")} />
                            </div>
                            <div className='class-info-right'>
                                <div className='class-info-right-title'>
                                    亲子野外游学
                                    <FlatButton label={<span style={{ fontSize: '20px', color: deepOrangeA700 }}>科隆</span>} primary={true} style={{ margin: ' 3px' }} />
                                    <FlatButton label={<span style={{ fontSize: '20px', color: deepOrangeA700 }}>冒险</span>} primary={true} style={{ margin: ' 3px' }} />
                                    <FlatButton label={<span style={{ fontSize: '20px', color: deepOrangeA700 }}>汉堡</span>} primary={true} style={{ margin: ' 3px' }} />
                                </div>
                                <div className='class-info-right-body' >行程：14-16天</div>
                                <div className='class-info-right-body' >适合年龄：12-19天</div>
                                <div className='class-info-right-body' >截止时间：2018-10-1</div>
                            </div>
                        </div>

                    </div>
                    <div className='right'>
                        <div className='my-card share'>
                            <div>
                                <Avatar src={avatar1} />
                                <span className='share-name'> 阳阳</span>
                            </div>
                            <div className='share-body'>
                                初次走出国门的我认识到了真正向往的教育环境，更重要的是懂得了“优秀的人从来不会满足于现状而停下脚步”
                                只有自己走向世界，用自己的眼睛观察世界，才能发现哪里才是最适合自己的，这样独立观察和选择的过程对成长非常有帮助
                            </div>
                        </div>
                        <div className='my-card share'>
                            <div>
                                <Avatar src={avatar2} />
                                <span className='share-name'> 萍萍</span>
                            </div>
                            <div className='share-body'>
                                历时五年 七次参加新东方国际游学项目接触到全球的小伙伴，对于各国了解不再局限在书本及电视，而是通过人与人之间交流亲身体会到文化之间的差异。
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default PageClassList;