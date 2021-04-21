import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { Context } from '../core/AppProvider'
import { logout, popupLogin } from '../redux/reducers/authReducer'
// import useAuth from '../core/useAuth'



export default function Header() {

    let { linkLoading } = useContext(Context)

    let dispatch = useDispatch()

    let { user, login } = useSelector(state => state.auth)



    function openMenu() {
        document.body.classList.toggle('menu-is-show')

    }




    return (
        <>
            <header id="header">
                <div className="wrap">
                    <div className="menu-hambeger" onClick={openMenu}>
                        <div className="button">
                            <span />
                            <span />
                            <span />
                        </div>
                        <span className="text">menu</span>
                    </div>
                    <Link to="/" onClick={linkLoading} className="logo">
                        <img src="/img/logo.svg" alt="" />
                        <h1>CFD</h1>
                    </Link>
                    <div className="right">
                        {
                            login ? (
                                <div className="have-login">
                                    <div className="account">
                                        <a href="#" className="info">
                                            <div className="name">{user.name}</div>
                                            <div className="avatar">
                                                <img src="/img/avt.png" alt="" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="hamberger">
                                    </div>
                                    <div className="sub">
                                        <NavLink to="/thong-tin-ca-nhan/course">Khóa học của tôi</NavLink>
                                        <NavLink to="/thong-tin-ca-nhan">Thông tin tài khoản</NavLink>
                                        <NavLink to="/" onClick={() => dispatch(logout())}>Đăng xuất</NavLink>
                                    </div>
                                </div>
                            ) : (

                                <div className="not-login bg-none">
                                    <a href="#" className="btn-register" onClick={() => dispatch(popupLogin(true))}>Đăng nhập</a>
                                    <a href="login.html" className="btn main btn-open-login">Đăng ký</a>
                                </div>


                            )
                        }


                    </div>
                </div>
            </header>
            <nav className="nav">
                <ul>
                    <li className="li_login">
                        <a href="#">Đăng nhập</a>
                        <a href="#">Đăng ký</a>
                    </li>
                    <li >
                        <NavLink onClick={linkLoading} exact to="/">Trang chủ</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={linkLoading} to="/team">CFD Team</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={linkLoading} to="/courses">Khoá Học</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={linkLoading} to="/project">Dự Án</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={linkLoading} to="/contact">Liên hệ</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="overlay_nav" />
        </>
    )
}