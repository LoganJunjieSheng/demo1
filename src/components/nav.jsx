import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router';
import { orangeA700, indigo600,blueGrey400} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import { List, ListItem } from 'material-ui/List';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import Home from 'material-ui/svg-icons/action/home';
import Music from 'material-ui/svg-icons/image/music-note';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
    
require('../global/global.css')
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drawer: false,
            redirect: false,
        };
    }
    handleToggle = () => this.setState({ drawer: !this.state.open });

    handleClose = () => this.setState({ drawer: false });
    clear = () => { localStorage.clear(); }
    render() {
        const avatar = require('../static/card5.jpg');
        let unlogin = (!localStorage.login
            ? <div>
                <Link to='login' className='link'> <FlatButton style={{ color: 'white' }} label="登录" /></Link>
                <Link to='regist' className='link'> <FlatButton style={{ color: 'white' }} label="申请免费试听" /></Link>
            </div>
            : <div>
                <Link to='personalCenter' className='link'> <Avatar src={avatar} /></Link>
                <FlatButton style={{ color: 'white' }} label="退出" onClick={this.clear} />
            </div>);
        return (
            <div>
                {this.state.redirect
                    ? <Redirect to="" />
                    : <div></div>}
                <AppBar
                    title={<Link to='' style={{textDecoration: 'none',color:'white',}}>希舸德国游学</Link>}
                    titleStyle={{ cursor: 'pointer' }}
                    // onTitleClick={() => { this.setState({ redirect: true })}}
                    onLeftIconButtonClick={this.handleToggle}
                    iconElementRight={unlogin}
                    style={{
                        background: blueGrey400,
                        position: 'fixed',
                        
                    }}
                />
                <Drawer
                    docked={false}
                    width={300}
                    open={this.state.drawer}
                    onRequestChange={(drawer) => this.setState({ drawer })}
                >
                    <div>
                        {/* <List>
                            <Link to='index' className='nav'><ListItem primaryText="首页" leftIcon={<Home />} onClick={this.handleClose} /></Link>
                            <Link to='index' className='nav'><ListItem primaryText="免费试听" leftIcon={<Music />} onClick={this.handleClose} /></Link>
                            <ListItem
                                primaryText="媒体授课"
                                leftIcon={<Home />}
                                initiallyOpen={false}
                                primaryTogglesNestedList={true}
                                nestedItems={[
                                    <ListItem
                                        key={1}
                                        primaryText="课程体系"
                                        leftIcon={<Home />}
                                    />
                                ]}
                            />
                        </List> */}
                    </div>
                    <div>
                        <Menu desktop={true} autoWidth={false} width={299}>
                            <Link to='' className='link'> <MenuItem primaryText="首页" leftIcon={<Home />} onClick={this.handleClose} /></Link>
                            <Link to='freeTrial/junjie' className='link'> <MenuItem primaryText="免费试听" leftIcon={<Home />} onClick={this.handleClose} /></Link>
                            <div>
                                <MenuItem
                                    primaryText="媒体授课"
                                    leftIcon={<Home />}
                                    rightIcon={<ArrowDropRight />}
                                    menuItems={[
                                        <Link to='index' className='link'> <MenuItem primaryText="首页" leftIcon={<Home />} onClick={this.handleClose} /></Link>,
                                        <Link to='index' className='link'> <MenuItem primaryText="首页" leftIcon={<Home />} onClick={this.handleClose} /></Link>,
                                        <Link to='index' className='link' > <MenuItem primaryText="首页" leftIcon={<Home />} onClick={this.handleClose} /></Link>,
                                    ]}
                                />
                            </div>

                        </Menu>
                    </div>
                </Drawer>
            </div>
        );
    }
}

export default Nav;
