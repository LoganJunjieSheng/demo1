import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
class MyCard extends Component {
    constructor(props) {
        super(props);
        this.state = { hover: true };
    }
    hover = () => {
        this.setState({
            hover: !this.state.hover
        })
    }
    render() {

        const style = {
            wrap: {
                display: 'inline-block',
                margin: '10px 20px 20px 0',
                cursor: 'pointer',
            },

            img: {
                borderRadius: '13px',
                height: '120px',
                width: '216px',
            },
            imghover: {
                transition: ' all 0.2s ease-in-out',
                borderRadius: '13px',
                height: '130px',
                width: '226px',
            },
            title: {
                padding: '0 10px',
            },
            titleHover: {
                padding: '0 10px',
                color: 'red',
            },
            info: {
                color: '#93999F',
                padding: '0 10px',
                fontWeight: '400',
            },
            infoInside: {
                marginRight: '25px',
            },
            price: {
                padding: '0 10px',
                marginTop: '7px',
            }
        }
        return (
            <div style={style.wrap} onMouseOver={this.hover} onMouseOut={this.hover}>
                <Link to='classInfo' className='link'>
                    <div style={style.top}>
                        <img style={this.state.hover
                            ? style.img
                            : style.imghover} alt="900x500" src={this.props.img} />
                        <h4 style={this.state.hover
                            ? style.title
                            : style.titleHover}>
                            {this.props.title}
                        </h4>
                        <div style={style.info}>
                            <span style={style.infoInside}>{this.props.difficulty}</span>
                            <span style={style.infoInside}>{this.props.num}人</span>
                        </div>
                        <div style={style.price}>
                            <span style={style.infoInside}>￥{this.props.price}</span>
                        </div>
                    </div>
                </Link>
            </div >
        );
    }
}

export default MyCard;
