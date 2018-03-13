import PageIndex from '../page/index'
import PageFreeTrial from '../page/freeTrial'
import PageLogin from '../page/login'
import PageRegist from '../page/regist'
import PagePersonalCenter from '../page/personalCenter'
import PageClassList from '../page/classList'
import PageClassInfo from '../page/classInfo'
import PagePlan from '../page/plan'
import PageBigData from '../page/bigData'

const routes = [{
        path: '/login',
        component: PageLogin,
        // exact:true,
    },
    {
        path: '/regist',
        component: PageRegist,
        // exact:true,
    },
    {
        path: '/personalCenter',
        component: PagePersonalCenter,
        // exact:true,
    },
    {
        path: '/classInfo',
        component: PageClassInfo,
        exact: true,
    },
    {
        path: '/classList',
        component: PageClassList,
        routes: [{
            path: "/classInfo",
            component: PageClassInfo
        }, ]
    },

    {
        path: '/freeTrial/:id',
        component: PageFreeTrial,
        // exact:true,
    },
    {
        path: '/plan',
        component: PagePlan,
        // exact:true,
    },
    {
        path: '/bigData',
        component: PageBigData,
        // exact:true,
    },
    {
        path: '',
        component: PageIndex,
        exact: true,
    },

];

export default routes;