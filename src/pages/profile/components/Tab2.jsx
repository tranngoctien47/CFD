import { useEffect, useState } from "react"
import userApi from "../../../api/userApi"
import useStateSession from "../../../core/useStateSession"

export default function Tab2() {

    let [course, setCourse] = useStateSession({
        api: true
    }, 'profile-Course')

    useEffect(async () => {
        let res = await userApi.course()
        setCourse({
            ...res,
            api: false
        })
    }, [])
    if (!course) return "loading..."



    return (


        <div className="tab2">
            {
                course?.data?.map((e, i) => <Course key={i} {...e.course} {...e} width='50%' nameWidth="50%" />)
            }


            {/* <Course name='Front-End Căn Bản' image='/img/img3.png' date='Khai giảng ngày 09/09/2019' time="54 giờ" video='35 video' student='20 học viên' width='50%' nameWidth="50%" status='Tiếp Tục Học' />
            <Course name='Front-End Nâng cao' image='/img/img7.png' date='Khai giảng ngày 09/09/2019' time="54 giờ" video='35 video' student='20 học viên' width='30%' nameWidth="30%" status='Tiếp Tục Học' /> */}

        </div>
    )
}


function Course({ title, opening_time, count_video, student, nameWidth, trang_thai, thumbnail, width }) {
    const Les = { width: "50%" }
    return (
        <div className="item">
            <div className="cover">
                <img src={thumbnail.link} alt="" />
            </div>
            <div className="info">
                <a href="#" className="name">
                    {title}
                </a>
                <div className="date">{opening_time}</div>
                <div className="row">
                    <div className>
                        <img src="/img/clock.svg" alt="" className="icon" />{opening_time}
                    </div>
                    <div className>
                        <img src="/img/play.svg" alt="" className="icon" />{count_video}
                    </div>
                    <div className>
                        <img src="/img/user.svg" alt="" className="icon" />{student}
                    </div>
                </div>
                <div className="process">
                    <div className="line">
                        <div className="rate" style={Les} />
                    </div>
                    {nameWidth}
                </div>
                <div className="btn overlay round btn-continue">
                    {trang_thai}
                </div>
            </div>
        </div>
    )
}