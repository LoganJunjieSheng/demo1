import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router';
import Dialog from 'material-ui/Dialog';
import { PageHeader, small, Carousel } from 'react-bootstrap';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
// require('./index.css')
// import ReactPlayer from 'react-player'
// import { DefaultPlayer as Video } from 'react-html5video';
require('../global/global.css')
require('./login.css')
class PageLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            redirect: false,
        };
    }
    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        localStorage.setItem('login',true);
        this.setState({
            open: false,
            redirect: true,
        });
    };
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
                {this.state.redirect
                    ? <Redirect to="/personalCenter" />
                    : <div></div>}
                <div className='wrap'>
                    <Card className='card'>
                        <CardTitle
                            title="登录"
                        />
                        <CardText className='text'>
                            <div className='regist'><Link to='regist'>立即注册</Link></div>
                            <TextField
                                hintText="手机号码"
                                floatingLabelText="请输入手机号码"
                                fullWidth={true}
                            /><br />
                            <TextField
                                hintText="登录密码"
                                floatingLabelText="请输入登录密码"
                                fullWidth={true}
                                type="password"
                            /><br />
                            <div className='bottom'>
                                <div className='toggle'>
                                    <Toggle
                                        label="下次自动登录"
                                        defaultToggled={true}
                                        onToggle={this.handleChange}
                                        labelPosition="right"

                                    />
                                </div>

                                <div className='forget'><Link to=''>忘记密码？</Link></div>
                            </div>
                            <RaisedButton label="登录" primary={true} fullWidth={true} onClick={this.handleOpen} />
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

export default PageLogin;