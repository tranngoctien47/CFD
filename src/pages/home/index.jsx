import { useEffect, useState } from "react";
import Login from "../../components/Login";
import MainLayout from "../../layout/MainLayout";
import Action from "./components/Action";
import Banner from "./components/Banner";
import CourseList from "../../components/CourseList";
import Different from "./components/Different";
import Gallery from "./components/Gallery";
import Terminal from "./components/Terminal";
import courseApi from "../../api/courseApi";
import useStateSession from "../../core/useStateSession";
import Loading from "react-loading";
import { useSelector } from "react-redux";
import CustomLoading from "../../components/Loading";

export default function Home() {

    let [state, setState] = useStateSession({
        online: [],
        offline: [],
        gallery: [],
        review: [],
        api: true,
        loading: true
    }, 'home')

    const { loading } = useSelector(state => state.auth)

    useEffect(async () => {
        if (state.api) {
            let res = await courseApi.home()
            setState({
                ...res,
                loading: false,
                api: false
            })
        }

    }, [])

    if (state.loading) return 'loading...'

    return (
        <>


            <main className="homepage" id="main">
                <Banner />
                <CourseList online={state.online} offline={state.offline} />
                <Different />
                {/* <section class="section-3">
            <div class="container">
                <div class="video">
                    <iframe id="video-intro"
                        src="https://www.youtube-nocookie.com/embed/6t-MjBazs3o?controls=0&showinfo=0&rel=0&enablejsapi=1&version=3&playerapiid=ytplayer"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen allowscriptaccess="always"></iframe>

                    <div class="video-src" data-src="video/CFD-video-intro.mp4"></div>
                    <div class="play-btn btn-video-intro">
                        <img src="/img/play-video-btn.png" alt="">
                    </div>
                </div>
            </div>
        </section> */}
                <Terminal review={state.review} />
                <Gallery gallery={state.gallery} />
                <Action />
            </main>

            {/* popup video homepage */}
            <div className="popup-video" style={{ display: 'none' }}>
                <div className="wrap">
                    <div className="video-src" />
                </div>
                <div className="close" />
            </div>
            <Login />
            <div className="popup-form popup-login" style={{ display: 'none' }}>
                <div className="wrap">
                    <h2 className="title">Đăng ký</h2>
                    <div className="btn btn-icon rect white btn-google">
                        <img src="/img/google.svg" alt="" />
              Google
            </div>
                    <p className="policy">
                        Bằng việc đăng kí, bạn đã đồng ý <a href="#">Điều khoản bảo mật</a> của CFD
            </p>
                    <div className="close">
                        <img src="/img/close-icon.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}