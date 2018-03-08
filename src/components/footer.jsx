import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { orangeA700, indigo600 } from 'material-ui/styles/colors';
// import AppBar from 'material-ui/AppBar';
// import Drawer from 'material-ui/Drawer';
// import { List, ListItem } from 'material-ui/List';
// import Menu from 'material-ui/Menu';
// import MenuItem from 'material-ui/MenuItem';
// import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
// import Home from 'material-ui/svg-icons/action/home';
// import Music from 'material-ui/svg-icons/image/music-note';
// import FontIcon from 'material-ui/FontIcon';
// import FlatButton from 'material-ui/FlatButton';

require('../global/global.css')
class Footer extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { drawer: false };
    // }
    render() {
        const style = {
            wrap: {
                backgroundColor: '#eee',
                height: '100px',
                // marginTop: '20px',
                color: '#777',
                fontSize: '20px',
                position: 'relative',
            },
            body: {
                width: '50%',
                margin: '0 auto',
                // position:'relative',
            },
            bottom: {
                width:'500px',
                textAlign: 'center',
                position:'absolute',
                bottom:'5px',
                left:'50%',
                marginLeft:'-250px'
            }
        }
        return (
            <div style={style.wrap}>
                <div style={style.body}>
                    <div></div>
                    <div style={style.bottom}>© 2018 kidsworld.com  京ICP备 13046642号-2</div>
                </div>
            </div >
        );
    }
}

export default Footer;
