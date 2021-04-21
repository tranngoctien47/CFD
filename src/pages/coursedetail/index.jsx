import { useEffect, useState } from "react"
import { useParams } from "react-router"
import Course from "../../components/Course"
import CourseDuan from "../khoahoc/components/CourseDuan"

import Accordion from "./components/Accordion"
import Teacher from "./components/Teacher"
import Mentor from "./components/Mentor"
import courseApi from "../../api/courseApi"

export default function CourseDetail() {


    let { slug } = useParams()





    let [state, setState] = useState({
        course: null,
        related: null,
        currentContent: -1,

    })

    useEffect(() => {
        // fetch(`http://cfd-reactjs.herokuapp.com/elearning/v4/course/${slug}`)
        //     .then(res => res.json())
        //     .then(res => {
        //         setState({
        //             ...state,
        //             course: res.data
        //         })
        //     })

        // fetch(`http://cfd-reactjs.herokuapp.com/elearning/v4/course-related/${slug}`)
        //     .then(res => res.json)
        //     .then(res => {
        //         setState({
        //             ...state,
        //             related: res.data
        //         })
        //     })

        Promise.all([
            courseApi.detail(slug),
            courseApi.related(slug)
        ])
            .then(([res1, res2]) => {
                setState({
                    course: res1.data,

                    related: res2.data
                })
            })


    }, [slug])

    function handleAnccordion(i) {
        setState({
            ...state,
            currentContent: i === state.currentContent ? -1 : i,
        })
    }


    let { course } = state;

    if (!course) return 'Loading....'





    return (
        <main className="course-detail" id="main">
            <section

                className="banner style2"
                style={{ "--background": "#cde6fb" }}

            >
                <div className="container">
                    <div className="info">
                        <h1>{course.title}</h1>
                        <div className="row">
                            <div className="date"><strong>Khai giảng:</strong> 12/10/2020</div>
                            <div className="time"><strong>Thời lượng:</strong> 18 buổi</div>
                        </div>
                        <div className="btn white round" style={{ "--colorBtn": '#70b6f1' }}>đăng ký</div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="container">
                        <div className="video">
                            <div className="icon">
                                <img src="/img/play-icon-white.png" alt />
                            </div> <span>giới thiệu</span>
                        </div>
                        <div className="money">4.000.000 VND</div>
                    </div>
                </div>
            </section >
            <section className="section-2">
                <div className="container">
                    <p className="des">{course.long_description}</p>
                    <h2 className="title">giới thiệu về khóa học</h2>
                    <div className="cover">
                        <img src={course.thumbnail.link} alt="" />
                    </div>

                    <h3 className="title">nội dung khóa học</h3>

                    {
                        course.content.map((e, i) => <Accordion handleAnccordion={handleAnccordion.bind(null, i)} active={state.currentContent === i} key={i} content={e.content} title={e.title} num={i + 1} />)
                    }

                    <h3 className="title">yêu cầu cần có</h3>
                    <div className="row row-check">
                        <div className="col-md-6">Đã từng học qua HTML, CSS</div>
                        <div className="col-md-6">Cài đặt phần mềm Photoshop,
              Adobe illustrator, Skype</div>
                    </div>
                    <h3 className="title">hình thức học</h3>
                    <div className="row row-check">
                        <div className="col-md-6">Học offline tại văn phòng, cùng Trần Nghĩa và 3 đồng nghiệp.</div>
                        <div className="col-md-6">Dạy và thực hành thêm bài tập online
              thông qua Skype.</div>
                        <div className="col-md-6">Được các mentor và các bạn trong team CFD hổ trợ thông qua group CFD Facebook
              hoặc phần mềm điều khiển máy tính.</div>
                        <div className="col-md-6">Thực hành 2 dự án thực tế với sự hướng dẫn của CFD Team.</div>
                    </div>
                    <h3 className="title">
                        <div className="date-start">lịch học</div>
                        <div className="sub">*Lịch học và thời gian có thể thống nhất lại theo số đông học viên.</div>
                    </h3>
                    <p>
                        <strong>Ngày bắt đầu: </strong> 09/09/2020 <br />
                        <strong>Thời gian học: </strong> {course.schedule}
                    </p>
                    <h3 className="title">Người dạy</h3>
                    <div className="teaches">

                        <Teacher teacher={course.teacher} />
                        {/* <Mentor mentor={course.mentor} /> */}
                    </div>
                    <div className="bottom">
                        <div className="user">
                            <img src="/img/user-group-icon.png" alt="" /> 12 bạn đã đăng ký
            </div>
                        <div className="btn main btn-register round">đăng ký</div>
                        <div className="btn-share btn overlay round btn-icon">
                            <img src="/img/facebook.svg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-3">
                <div className="container">
                    <div className="textbox">
                        <h3 className="sub-title">DỰ ÁN</h3>
                        <h2 className="main-title">THÀNH VIÊN</h2>
                    </div>
                    <div className="list row">

                        <CourseDuan name="Reactjs" des="One of the best corporate fashion brands in Syndney" image="/img/img.png" teacher_img="/img/avt.png" teacher_name="Vương Đặng" />
                        <CourseDuan name="Animation" des="One of the best corporate fashion brands in Syndney" image="/img/img2.png" teacher_img="/img/avt.png" teacher_name="Trần Nghĩa" />
                        <CourseDuan name="Scss, Grunt JS và Boostrap 4" des="One of the best corporate fashion brands in Syndney" image="/img/img3.png" teacher_img="/img/avt.png" teacher_name="Vương Đặng" />

                    </div>
                </div>
            </section>
            <section className="section-4">
                <div className="container">
                    <div className="textbox">
                        <h3 className="sub-title">Khóa học</h3>
                        <h2 className="main-title">Liên quan</h2>
                    </div>
                    <div className="list row">

                        {
                            state.related.map(e => <Course key={e._id} {...e} />)
                        }


                    </div>
                </div>
            </section>
        </main >

    )
}