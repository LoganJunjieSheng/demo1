import PageIndex from '../page/index'
import PageFreeTrial from '../page/freeTrial'
import PageLogin from '../page/login'
import PageRegist from '../page/regist'
import PagePersonalCenter from '../page/personalCenter'
import PageClassInfo from '../page/classInfo'

const routes=[
    {
        path:'/login',
        component:PageLogin,
        // exact:true,
    },
    {
        path:'/regist',
        component:PageRegist,
        // exact:true,
    },
    {
        path:'/personalCenter',
        component:PagePersonalCenter,
        // exact:true,
    },
    {
        path:'/classInfo',
        component:PageClassInfo,
        // exact:true,
    },
    {
        path:'/freeTrial',
        component:PageFreeTrial,
        // exact:true,
    },
    {
        path:'',
        component:PageIndex,
        // exact:true,
    },
   
];

export default routes;