import MainLayout from "./layout/MainLayout";
import CourseDetail from "./pages/coursedetail";
import Home from "./pages/home";
import KhoaHoc from "./pages/khoahoc";
import Pay from "./pages/pay";
import Profile from "./pages/profile";
import Project from "./pages/project";
import Register from "./pages/register";
import Team from "./pages/team";
import Contact from "./pages/contact";
import Email from "./pages/email";
import Page404 from "./pages/Page404";
import Coin from "./pages/coin";
import Tab2 from "./pages/profile/components/Tab2";
import Tab1 from "./pages/profile/components/Tab1";
import Tab3 from "./pages/profile/components/Tab3";
import Tab4 from "./pages/profile/components/Tab4";
import Tab5 from "./pages/profile/components/Tab5";
import CountPage from "./pages/countPage";





const routers = [
    {
        path: '/email',
        component: Email
    },

    {
        path: '/',
        component: MainLayout,
        routers: [

            {
                path: '/team',
                component: Team
            },
            {
                path: '/contact',
                component: Contact
            },
            {
                path: '/thong-tin-ca-nhan',
                component: Profile,
                auth: true,
                routers: [
                    {
                        path: '/course',
                        component: Tab2
                    },
                    {
                        path: '/project',
                        component: Tab3
                    },
                    {
                        path: '/payment',
                        component: Tab4
                    },
                    {
                        path: '/coin',
                        component: Tab5
                    },
                    {
                        path: '/',
                        component: Tab1
                    }
                ]
            },
            {
                path: '/courses',
                component: KhoaHoc
            },
            {
                path: '/project',
                component: Project
            },
            {
                path: '/register/:slug',
                component: Register
            },
            {
                path: '/pay',
                component: Pay
            },
            {
                path: '/course/:slug',
                component: CourseDetail
            },
            {
                path: '/coin',
                component: Coin
            },
            {
                path: '/',
                component: Home,
                exact: true

            },
            {
                path: '/count',
                component: CountPage,
                exact: true
            },
            {
                component: Page404
            },

        ]
    },


]

export default routers