import React, { Component } from 'react';
import { PageHeader, small, Carousel } from 'react-bootstrap';
import {
    Step,
    Stepper,
    StepLabel,
    StepContent,
} from 'material-ui/Stepper';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Chip from 'material-ui/Chip';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {
    orangeA700,
    indigo600,
    blueGrey400,
    grey50,
    deepOrangeA700
} from 'material-ui/styles/colors';
// require('./index.css')
// import ReactPlayer from 'react-player'
// import { DefaultPlayer as Video } from 'react-html5video';
require('../global/global.css')
require('./classList.css')
class PagePlan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            open: false,
            finished: false,
            stepIndex: 0,
        };
    }
    handleChange = (event, index, value) => this.setState({ value });
    handleStep = (val) => {
        console.log(val)
        this.setState({ stepIndex: val })
    }
    render() {
        return (
            <div className='body'>
                <PageHeader><small>游学一键规划</small></PageHeader>
                <div

                >
                    <Stepper activeStep={this.state.stepIndex} >
                        <Step>
                            <StepLabel>游学需求</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>推荐结果</StepLabel>
                        </Step>
                    </Stepper>
                    {
                        (this.state.stepIndex === 0)
                            ? <div
                                style={{ width: '500px', margin: '0 auto' }}
                            >
                                <SelectField
                                    floatingLabelText="城市"
                                    value={this.state.value}
                                    onChange={this.handleChange}
                                >
                                    <MenuItem value={1} primaryText="柏林" />
                                    <MenuItem value={2} primaryText="汉堡" />
                                    <MenuItem value={3} primaryText="多特蒙德" />
                                    <MenuItem value={4} primaryText="法兰克福" />
                                </SelectField>
                                <br />
                                <SelectField
                                    floatingLabelText="年龄"
                                    value={this.state.value}
                                    onChange={this.handleChange}
                                >
                                    <MenuItem value={1} primaryText="小学生" />
                                    <MenuItem value={2} primaryText="初中生" />
                                    <MenuItem value={3} primaryText="高中生" />
                                    <MenuItem value={4} primaryText="大学生" />
                                    <MenuItem value={5} primaryText="成人" />
                                </SelectField>
                                <br />
                                <SelectField
                                    floatingLabelText="游学倾向"
                                    value={this.state.value}
                                    onChange={this.handleChange}
                                >
                                    <MenuItem value={1} primaryText="英语学习与提升" />
                                    <MenuItem value={2} primaryText="世界名校参访交流" />
                                    <MenuItem value={3} primaryText="插班国外课堂学习" />
                                    <MenuItem value={4} primaryText="留学背景提升与生活体验" />
                                    <MenuItem value={5} primaryText="兴趣培养与潜能激发" />
                                </SelectField>
                                <br />
                                <RaisedButton onClick={()=>this.handleStep(1)} label={<span style={{ fontSize: '30px' }} >生成结果</span>} style={{ margin: '0 5px 0 0 ' }} buttonStyle={{ height: '72px', width: '320px' }} backgroundColor={blueGrey400} labelColor={grey50} keyboardFocused={true} />
                            </div>
                            : <div>
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
                                <RaisedButton onClick={()=>this.handleStep(0)} label={<span style={{ fontSize: '30px' }} >返回</span>} style={{ margin: '0 5px 0 0 ' }} buttonStyle={{ height: '72px', width: '320px' }} backgroundColor={blueGrey400} labelColor={grey50} keyboardFocused={true} />
                            </div>
                    }
                </div>

            </div>
        );
    }
}

export default PagePlan;