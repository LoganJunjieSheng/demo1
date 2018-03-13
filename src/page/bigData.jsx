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
import ReactEcharts from 'echarts-for-react';
require('../global/global.css')
require('./classList.css')
var echarts = require('echarts');
class PageBigData extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    getOption = () => {
        echarts.registerMap('Germary', require('../static/Germany.json'));
        return {
            title: {
                text: '德国游学人数（2011）',
                // subtext: '人口密度数据来自Wikipedia',
            },
            tooltip: {
                trigger: 'item',
                formatter: '{b}<br/>{c} (人)'
            },
            // toolbox: {
            //     show: true,
            //     orient: 'vertical',
            //     left: 'right',
            //     top: 'center',
            //     feature: {
            //         dataView: { readOnly: false },
            //         restore: {},
            //         saveAsImage: {}
            //     }
            // },
            visualMap: {
                min: 800,
                max: 50000,
                text: ['High', 'Low'],
                realtime: false,
                calculable: true,
                inRange: {
                    color: ['lightskyblue', 'yellow', 'orangered']
                }
            },
            series: [
                {
                    name: '香港18区人口密度',
                    type: 'map',
                    map: 'Germary',
                    itemStyle: {
                        normal: { label: { show: true } },
                        emphasis: { label: { show: true } }
                    },
                    data: [
                        { name: '柏林', value: 20057},
                        { name: '勃兰登堡', value: 15477 },
                        { name: '不来梅', value: 31686 },
                        { name: '自由州巴伐利亚州', value: 6992 },
                        { name: '汉堡', value: 44045 },
                        { name: '黑森州', value: 40689 },
                        { name: '下萨克森州', value: 37659},
                        { name: '梅克伦堡 - 前波莫瑞州', value: 45180 },
                        { name: '北莱茵 - 威斯特伐利亚州', value: 55204 },
                        { name: '莱茵兰 - 普法尔茨', value: 21900 },
                        { name: '萨尔', value: 4918 },
                        { name: '萨克森', value: 5881},
                        { name: '萨克森 - 安哈尔特', value: 4178 },
                        { name: '石勒苏益格 - 荷尔斯泰因', value: 2227 },
                        { name: '图林根', value: 2180 },
                        { name: '巴登 - 符腾堡州', value: 9172 },
                        // { name: '西贡', value: 3368 },
                        // { name: '离岛', value: 806.98 }
                    ],
                    nameMap: {
                        'Berlin': '柏林',
                        'Brandenburg': '勃兰登堡',
                        'Bremen': '不来梅',
                        'Free State of Bavaria': '自由州巴伐利亚州',
                        'Hamburg': '汉堡',
                        'Hesse': '黑森州',
                        'Lower Saxony': '下萨克森州',
                        'Mecklenburg-Vorpommern': '梅克伦堡 - 前波莫瑞州',
                        'North Rhine-Westphalia': '北莱茵 - 威斯特伐利亚州',
                        'Rhineland-Palatinate': '莱茵兰 - 普法尔茨',
                        'Saarland': '萨尔',
                        'Saxony': '萨克森',
                        'Saxony-Anhalt': '萨克森 - 安哈尔特',
                        'Schleswig-Holstein': '石勒苏益格 - 荷尔斯泰因',
                        'Thuringia': '图林根',
                        'Baden-Württemberg': '巴登 - 符腾堡州',
                        // 'Yau Tsim Mong': '油尖旺',
                        // 'Yuen Long': '元朗'
                    }
                }
            ]
        }
    }
    
    render() {
        const avatar1 = require('../static/people1.jpg');
        // let echarts_instance = this.echarts_react.getEchartsInstance();
        return (
            <div className='body'>
                <PageHeader><small>德国游学大数据展示</small></PageHeader>
                <div>
                    <ReactEcharts
                        // ref={(e) => { this.echarts_react = e; }}
                        option={this.getOption()}
                        style={{ height: '700px' }}
                    />
                </div>

            </div>
        );
    }
}

export default PageBigData;