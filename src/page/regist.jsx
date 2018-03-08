import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Dialog from 'material-ui/Dialog';
import { PageHeader, small, Carousel } from 'react-bootstrap';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
// import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
// require('./index.css')
// import ReactPlayer from 'react-player'
// import { DefaultPlayer as Video } from 'react-html5video';
require('../global/global.css')
require('./regist.css')
class PageRegist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            value: 1,
        };
    }
    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    clear = () => {
        localStorage.clear();
    }
    handleChange = (event, index, value) => this.setState({ value });
    render() {
        const actions = [
            <FlatButton
                label="取消"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="确定"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleClose}
            />,
        ];

        return (
            <div className='body'>
                <div className='wrap'>
                    <Card className='card'>
                        <CardTitle
                            title="注册"
                        />
                        <CardText className='text'>
                            <TextField
                                hintText="手机号码"
                                floatingLabelText="请输入手机号码"
                                fullWidth={true}
                            /><br />
                            <TextField
                                hintText="短信验证码"
                                floatingLabelText="请输入短信验证码"
                                style={{ width: '379px' }}
                            // fullWidth={true}
                            // type="password"
                            />
                            <RaisedButton label="获取" primary={true} onClick={this.handleOpen} />
                            <br />
                            <SelectField
                                floatingLabelText="孩子年龄"
                                value={this.state.value}
                                onChange={this.handleChange}
                                fullWidth={true}
                            >
                                <MenuItem value={1} primaryText="4岁以下" />
                                <MenuItem value={2} primaryText="4岁" />
                                <MenuItem value={3} primaryText="5岁" />
                                <MenuItem value={4} primaryText="6岁" />
                                <MenuItem value={5} primaryText="7岁" />
                                <MenuItem value={6} primaryText="8岁" />
                                <MenuItem value={7} primaryText="9岁" />
                                <MenuItem value={8} primaryText="9岁以上" />
                            </SelectField>
                            <br />
                            <div>
                                <Checkbox style={{ display: 'inline-block', width: '50px' }} label="" />
                                <span className='protocol'>我已阅读并同意<Link to=''>VIPKID用户注册协议》</Link></span>
                            </div>
                            <br />
                            <Link to='login'><RaisedButton label="立即注册" primary={true} fullWidth={true}  /></Link>
                        </CardText>
                    </Card>
                </div>
                <Dialog
                    title="请输入验证码"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    <div style={{ textAlign: 'center' }}><img alt="900x500" src={require("../static/number.png")} /></div>

                    <TextField
                        hintText="验证码"
                        floatingLabelText="请输入验证码"
                        fullWidth={true}
                        type="password"
                    /><br />
                </Dialog>
            </div>
        );
    }
}

export default PageRegist;