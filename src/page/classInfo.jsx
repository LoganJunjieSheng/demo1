import React, { Component } from 'react';
import { PageHeader, small, Carousel, Glyphicon } from 'react-bootstrap';
import MyCard from '../components/myCard'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ActionHome from 'material-ui/svg-icons/action/home';
require('../global/global.css')
require('./classInfo.css')
class PageClassInfo extends Component {
    render() {
        const card1 = require('../static/card1.jpg');
        const card2 = require('../static/card2.jpg');
        const card3 = require('../static/card3.jpg');
        const card4 = require('../static/card4.jpg');
        const card5 = require('../static/card5.jpg');
        return (
            <div className=''>
                <div className='top'>
                    <div className=''>1234</div>
                </div>
            </div>
        );
    }
}

export default PageClassInfo;