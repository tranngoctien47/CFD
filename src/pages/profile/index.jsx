
import { useContext } from "react";
import { useSelector } from "react-redux";
import { useRouteMatch } from "react-router";
import { NavLink } from "react-router-dom";

import { Context } from '../../core/AppProvider'







export default function Profile({ children }) {

    let { linkLoading } = useContext(Context)



    let { user } = useSelector(state => state.auth);
    let { url } = useRouteMatch();




    return (
        <main className="profile" id="main">
            <section>
                <div className="top-info">
                    <div className="avatar">
                        {/* <span class="text">H</span> */}
                        <img src="/img/avatar-lg.png" alt="" />
                        <div className="camera" />
                    </div>
                    <div className="name">{user.name}</div>
                    <p className="des">Thành viên của team CFD1-OFFLINE</p>
                </div>
                <div className="container">
                    <div className="tab">
                        <div className="tab-title">
                            <NavLink exact to={url}>Thông tin tài khoản</NavLink>
                            <NavLink to={`${url}/course`} onClick={linkLoading} >Khóa học của bạn</NavLink>
                            <NavLink to={`${url}/project`}>Dự án đã làm</NavLink>
                            <NavLink to={`${url}/Payment`}>Lịch sử thanh toán</NavLink>
                            <NavLink to={`${url}/coin`}>Quản lý COIN của tôi</NavLink>
                        </div>
                        <div className="tab-content">

                            {children}

                        </div>
                    </div>

                </div>
            </section>
        </main>
    )
}