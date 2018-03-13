import React, { Component } from 'react';
import { PageHeader, small, Carousel, Glyphicon, Media } from 'react-bootstrap';
import MyCard from '../components/myCard'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ActionHome from 'material-ui/svg-icons/action/home';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {
    orangeA700,
    indigo600,
    blueGrey400,
    grey50
} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import { Tabs, Tab } from 'material-ui/Tabs';
import Dialog from 'material-ui/Dialog';
import {
    Step,
    Stepper,
    StepLabel,
    StepContent,
} from 'material-ui/Stepper';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
require('../global/global.css')
require('./classInfo.css')
class PageClassInfo extends Component {
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
    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    handleNext = () => {
        const { stepIndex } = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 2,
        });
    };

    handlePrev = () => {
        const { stepIndex } = this.state;
        if (stepIndex > 0) {
            this.setState({ stepIndex: stepIndex - 1 });
        }
    };
    renderStepActions(step) {
        return (
            <div style={{ margin: '12px 0' }}>
                <RaisedButton
                    label={this.state.stepIndex === 4 ? '关闭' : '下一步'}
                    disableTouchRipple={true}
                    disableFocusRipple={true}
                    primary={true}
                    onClick={this.handleNext}
                    style={{ marginRight: 12 }}
                />
                {step > 0 && (
                    <FlatButton
                        label="上一步"
                        disabled={this.state.stepIndex === 0}
                        disableTouchRipple={true}
                        disableFocusRipple={true}
                        onClick={this.handlePrev}
                    />
                )}
            </div>
        );
    }
    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return (<div className='body'>
                    <h3>学员信息</h3>
                    <TextField
                        // hintText="Message Field"
                        floatingLabelText="姓名"
                    />
                    <TextField
                        // hintText="Message Field"
                        floatingLabelText="手机号"
                    />
                    <TextField
                        // hintText="Message Field"
                        floatingLabelText="学校/单位"
                    />
                    <TextField
                        // hintText="Message Field"
                        floatingLabelText="身份证号"
                    />
                    <h3>监护人信息</h3>
                    <TextField
                        // hintText="Message Field"
                        floatingLabelText="姓名"
                    />
                    <TextField
                        // hintText="Message Field"
                        floatingLabelText="手机号"
                    />
                    <TextField
                        // hintText="Message Field"
                        floatingLabelText="身份证号"
                    />
                </div>);
            case 1:
                return (<div className='body'>
                    <div className='protocol'>
                        <p>尊敬的学员:</p>
                    </div>
                    <Checkbox
                        label=" 已经阅读，并同意条款。"
                    />
                </div>);
            case 2:
                return (<div className='body'>
                    <h3>温馨提示</h3>
                    <p>你所预约的线路，全国正在同步销售，名额有限，我们将以客户支付订金先后时间为准。 为确保您能顺利报名该团，建议您尽快完成订单支付， 采用在线支付预交订金，锁定名额。 请等待顾问与您联系。</p>
                    <h3>详细信息</h3>
                    <p><strong>德国多特蒙德足球协会霍姆布鲁赫</strong></p>
                    <div>出发日期：2018-06-27</div>
                    <div>返回日期：2018-07-10</div>
                    <h3>合计：<strong style={{ color: orangeA700 }}>3000.00元</strong></h3>
                </div>);
            case 3:
                return (<div className='body clearfix '>
                    <div style={{margin:'0 a'}}>
                        <div className='zfb'>
                            <h3>支付宝</h3>
                            <div>
                                <img height={200} width={200} src={require('../static/QR1.jpg')} />
                            </div>
                        </div>
                        <div className='wx'>
                            <h3>微信</h3>
                            <img height={200} width={200} src={require('../static/QR1.jpg')} />
                        </div>
                    </div>
                </div>);
            default:
                return '支付成功';
        }
    }

    renderDialog = () => {
        const customContentStyle = {
            width: '100%',
            maxWidth: 'none',
        };
        const actions = [
            <FlatButton
                label="关闭"
                primary={true}
                onClick={this.handleClose}
            />,
            // <FlatButton
            //     label="Submit"
            //     primary={true}
            //     onClick={this.handleClose}
            // />,
        ];
        return (<Dialog
            title="开始报名"
            actions={actions}
            modal={true}
            contentStyle={customContentStyle}
            open={this.state.open}
        >
            <Stepper
                activeStep={this.state.stepIndex}
            // orientation="vertical"
            >
                <Step>
                    <StepLabel>出行人信息</StepLabel>
                </Step>
                <Step>
                    <StepLabel>阅读协议</StepLabel>
                </Step>
                <Step>
                    <StepLabel>订单明细</StepLabel>
                </Step>
                <Step>
                    <StepLabel>支付</StepLabel>
                </Step>
            </Stepper>
            {this.getStepContent(this.state.stepIndex)}
            <div className='body'> {this.renderStepActions(this.state.stepIndex)}</div>

        </Dialog>)
    }
    render() {
        const card1 = require('../static/class1.jpg');
        const card2 = require('../static/class2.jpg');
        const card3 = require('../static/class3.jpg');
        const card4 = require('../static/class4.jpg');
        const card5 = require('../static/class5.jpg');
        return (
            <div className='clearfix'>
                {this.renderDialog()}
                <div className='body'>
                    <PageHeader><span style={{ color: blueGrey400 }}>德国多特蒙德足球训练营</span></PageHeader>
                    <div className='top'>
                        <div className='top-left'><div ><img height={470} width={800} style={{ borderRadius: '10px' }} src={require("../static/classInfo1.png")} /></div></div>
                        <div className='top-right'>
                            <div style={{ margin: '20px' }}>
                                <div style={{ margin: '20px 0' }}>
                                    <label>报名费 ：</label>
                                    <span style={{ color: '#ff7474' }}><strong>￥3000</strong></span>RMB
                                </div>
                                <div style={{ margin: '20px 0' }}>
                                    <label>招生对象： </label>
                                    <span>初一~高三</span>
                                </div>
                                <div style={{ margin: '20px 0' }}>
                                    <label>行程 ： </label>
                                    <span>15天</span>
                                </div>
                                <div style={{ margin: '20px 0' }}>
                                    <label>报名截止 ：  </label>
                                    <span>2018.03.17</span>
                                </div>
                                <div style={{ margin: '20px 0' }}>
                                    <label>包含 ：  </label>
                                    <span>课程、签证、机票、活动、食宿、保险、导师</span>
                                </div>
                                <div style={{ margin: '20px 0' }}>
                                    <label>团期 ：  </label>
                                    <SelectField
                                        // floatingLabelText="团期"
                                        value={this.state.value}
                                        onChange={this.handleChange}
                                    >
                                        <MenuItem value={1} primaryText="2018.05.31 | 混龄团" />
                                        <MenuItem value={2} primaryText="2018.06.01 | 初中生" />
                                        <MenuItem value={3} primaryText="2018.06.13 | 初中生" />
                                        <MenuItem value={4} primaryText="2018.06.13 | 高中生" />
                                        <MenuItem value={5} primaryText="2018.06.15 | 高中生" />

                                    </SelectField>
                                </div>
                                <div style={{ margin: '20px auto' }}>
                                    <RaisedButton onClick={this.handleOpen} label={<span style={{ fontSize: '30px' }} >立即购买</span>} style={{ margin: '0 5px 0 0 ' }} buttonStyle={{ height: '72px', width: '320px' }} backgroundColor={blueGrey400} labelColor={grey50} keyboardFocused={true} />
                                    {/* <RaisedButton label={<span style={{ fontSize: '30px' }}>免费预订</span>} backgroundColor={grey50} labelColor={blueGrey400} buttonStyle={{ height: '72px', width: '160px' }} /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='dark'>
                    <div className='body'>
                        <PageHeader><small>课程详情</small></PageHeader>
                        <div style={{ color: '#78909C' }}>
                            <Tabs tabItemContainerStyle={{ backgroundColor: blueGrey400 }}>
                                <Tab label="项目介绍" >
                                    <div>
                                        {/* <h2 >项目主要内容</h2> */}
                                        <p>
                                            &nbsp; &nbsp; &nbsp; &nbsp;该项目的主要内容为组织国内青少年赴德国多特蒙德参与以培训为首要目标的夏/冬令营活动，与当地具有优良足球传统的足球协会霍姆布鲁赫 09/72合作，对参与活动的青少年团体进行系统的足球培训，附带相关德语语言培训，从而加强活动参与者的技术水平并且开拓其国际视野。参加活动的学生一方面可以得到与体育协会/足球俱乐部球队切磋的机会， 项目另包括观摩德甲顶级球队多特蒙德BVB09的主场比赛及参观旅游活动。
                                        </p>
                                        <Media>
                                            <Media.Left>
                                                <img width={90} height={90} src={require('../static/classInfo2.png')} alt="Image" />
                                            </Media.Left>
                                            <Media.Body>
                                                <Media.Heading>霍姆布鲁赫足球协会</Media.Heading>
                                                <p>
                                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                                    德国多特蒙德市霍姆布鲁赫足球协会（全称 Hombrucher Sportverein 09/72，简称 HSV 09/72）已经有超过百年的历史。1909 年秋位于多特蒙德市霍姆布鲁赫区的日耳曼足球协会成立，1922 年起该协会正式改名为霍姆布鲁赫足球协会。
                                                    </p>
                                                <p>
                                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                                    徽标由红蓝白三色组成， 白色的底色上有两个同心圆， 两院之间的空白处环绕排列着蓝色的HSV的德语全称， 内圆中为蓝色简称HSV 09/7
                                                </p>
                                                <p>
                                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                                    通过当时德甲联赛和德乙联赛的两位专业人士的培训， 霍姆布鲁赫区球队首次以职业球队的面貌投入比赛， 并且在1957/1958年度的德国业余联赛中获得德国冠军，这也使得该足球协会的声誉达到当时的顶峰。
                                                </p>
                                                <p>
                                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                                    2002年多特蒙德霍姆布鲁赫足球协会(HVF09)和霍姆布鲁赫联队(Hombruch  FC Eintracht 1972)重组成为新的霍姆布鲁赫足球协会 (HSV 09/72), 奠定了该协会现在的坚实基础， 直至今日在足球教育领域都在续写辉煌。
                                                </p>
                                            </Media.Body>
                                        </Media>
                                        <Media>

                                            <Media.Body>
                                                <Media.Heading>多特蒙德城市简介</Media.Heading>
                                                <p>
                                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                                    多特蒙德是鲁尔区东部的经济文化中心， 位于莱茵河支流埃姆施尔河畔，属北莱茵-威斯特法伦州，面积为280平方公 里，人口数量为583600。
                                                    </p>
                                                <p>
                                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                                    多特蒙德最早在公元855年年前后见于记载。它原是查理大帝的皇家要塞及莱茵河与威悉河之间的商路要站。10到13世纪，曾在这里举行过好几次帝国会议。1220年多特蒙德成为帝国自由市，后来又加入汉萨同盟。14世纪是它极为繁荣的黄金时代，据说英王爱德华三世为了向多特蒙德富商借债，竟以王冠作抵押，由此可见该市商业势力之一斑。但由于三十年战争的惨烈破坏，多特蒙德一蹶不振，直到1815年并入普鲁士时，还只是一个4000人口的区区小镇。自19世纪30年代起，随着工业化的勃兴，多特蒙德以地下有煤的优势，重振雄风。发展为煤钢基地，啤酒酿造中心和水陆交通枢纽。第二次世界大战中它的旧城区几乎全部被摧毁，战后才得以重建。目前多特蒙德拥有多特蒙德大学、数个研究所、剧院和数所博物馆、农产品交易所、赛马场、动植物园；钢铁厂、数家大型啤酒酿造厂和内陆港。石煤采掘也不再象从前那么多，目前只有一个煤矿在运作。1220年建立的圣母大教堂在1945年以后得到重新修建。当代的建筑有1949-52 年间修建的威斯特法伦大厅、1956-65年修建的城市剧院和1949-51年修建的州立图书馆。
                                                </p>
                                                <p>
                                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                                    多特蒙德是一个举世闻名的体育活动中心。第25届（1959）和第41届（1991）世界乒乓球锦标赛以及1974年的世界杯足球赛等许多国际大赛都在这里举行。 多特蒙德拥有威斯特法伦馆，威斯特法伦体育场， 红地(Rote Erde) 田径运动场和室内田径馆等近百处体育设施。威斯特法伦馆(Westfalenhalle)建于1952年，高22米，为钢架与玻璃构成的圆形建筑物，可容纳2.2万名观众，是欧洲最大的体育馆之一。 当年，容国团就是在这里力挫群雄，一举夺魁的。而威斯特法伦体育场，又称西格纳伊度纳公园（Signal Iduna Park），可容纳83000名观众，是德国老牌劲旅波鲁西娅· 多特蒙德（BVB09）足球俱乐部的主场。
                                                </p>
                                            </Media.Body>
                                            <Media.Right>
                                                <img width={330} height={200} src={require('../static/classInfo3.png')} alt="Image" />
                                            </Media.Right>
                                        </Media>
                                    </div>
                                </Tab>
                                <Tab label="行程安排" >
                                    <div>
                                        <h2 >夏令营</h2>
                                        <p>
                                            3周时间 （具体日程需根据报名情况及德方训练安排确定）
                                        </p>
                                        <ol>
                                            <li>入境日期：7月中旬 </li>
                                            <li>训练日期：入境后大约2周半</li>
                                            <li>旅行日期：训练结束后3-5天</li>
                                            <li>离境日期: 8月上旬</li>
                                        </ol>
                                        <p>
                                            5周时间 （具体日程需根据报名情况及德方训练安排确定）
                                        </p>
                                        <ol>
                                            <li>入境日期：7月中旬 </li>
                                            <li>训练日期：入境后大约2周半</li>
                                            <li>旅行日期：训练结束后3-5天</li>
                                            <li>离境日期: 8月上旬</li>
                                        </ol>
                                        <h2 >冬令营</h2>
                                        <p>
                                            5周时间 （具体日程需根据报名情况及德方训练安排确定）
                                        </p>
                                        <ol>
                                            <li>入境日期：7月中旬 </li>
                                            <li>训练日期：入境后大约2周半</li>
                                            <li>旅行日期：训练结束后3-5天</li>
                                            <li>离境日期: 8月上旬</li>
                                        </ol>
                                        <h3>备注：上述项目所有的参与者必须选择同一方案  </h3>
                                    </div>
                                </Tab>
                                <Tab label="具体方案" >
                                    <div>
                                        <h2>流程</h2>
                                        <ol>
                                            <li>国内各中小学生报名，每个夏/冬令营小组不少于12人且原则上不超过20人，国内附一名随队老师</li>
                                            <li>德国公司和体育协会/俱乐部发出邀请函  </li>
                                            <li>委托国内旅行社办理机票签证手续</li>
                                            <li>机场接送，带领学生及随队老师到达住宿地点，分发注意事项等材料</li>
                                            <li>进行培训（培训课程安排见第五项）</li>
                                            <li>参加比赛，现场观摩比赛</li>
                                            <li>培训结束后由德方体育协会/俱乐部颁发官方纪念证书 </li>
                                            <li>进行旅游，返回中国</li>
                                        </ol>
                                        <h2>冬/夏令营培训课程内容</h2>
                                        <ul>
                                            <li>第一大类  (场上训练)：体能训练，个人技术训练，团队战术配合训练  </li>
                                            <li>第二大类  (场外培训)：足球术语，足球理论，训练录像分析</li>
                                            <li>第三大类  (比赛参观): 参加友谊赛，参观足球博物馆、多特蒙德BVB09主体育场等相关场所，现场观摩德甲比赛（冬令营除外）</li>
                                        </ul>
                                        <p>训练时间为每周一至周五。具体课程设置需成团后由教练制定安排</p>
                                    </div>
                                </Tab>
                                <Tab label="费用说明" >
                                    <div>
                                        <h2 >价格包括</h2>
                                        <ol>
                                            <li>德国境内保险费，包含签证医保，运动伤害险，第三责任险等必要险种</li>
                                            <li> 食宿费，旺季需根据预定情况）二人、四人或六人间，独立卫生间，早中晚三餐</li>
                                            <li>足球培训费:教练费，训练场地器材租用费，参赛费等（冬令营根据天气情况可能为室内场地）</li>
                                            <li>课室租用费:战术课，录像分析课教室租用</li>
                                            <li>地陪、随队翻译费:参观项目和训练中的地陪/翻译费用</li>
                                            <li>各类参观项目  参观如德意志足球博物馆，德甲赛场等等有关足球文化的场馆，观摩一场德甲比赛（球票费用自理，需在报名时提前支付预订，费用为每人90欧。首选 BVB主场比赛，如订不到票可退还球票费用。由于票源紧张，球   票需提前预订，冬令营由于冬歇期不能安排德甲观摩，但可安排场馆参观）</li>
                                            <li>当地交通费:机场服务费，公共交通费，大巴租用费，司机劳务费，小费等</li>
                                            <li>旅游费用:此旅游项目的报价不含自费参观项目，此旅游项目可根据需求取消</li>
                                        </ol>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
                <div className=''>
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
            </div>
        );
    }
}

export default PageClassInfo;