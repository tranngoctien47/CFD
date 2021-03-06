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
                            <div className="date"><strong>Khai gi???ng:</strong> 12/10/2020</div>
                            <div className="time"><strong>Th???i l?????ng:</strong> 18 bu???i</div>
                        </div>
                        <div className="btn white round" style={{ "--colorBtn": '#70b6f1' }}>????ng k??</div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="container">
                        <div className="video">
                            <div className="icon">
                                <img src="/img/play-icon-white.png" alt />
                            </div> <span>gi???i thi???u</span>
                        </div>
                        <div className="money">4.000.000 VND</div>
                    </div>
                </div>
            </section >
            <section className="section-2">
                <div className="container">
                    <p className="des">{course.long_description}</p>
                    <h2 className="title">gi???i thi???u v??? kh??a h???c</h2>
                    <div className="cover">
                        <img src={course.thumbnail.link} alt="" />
                    </div>

                    <h3 className="title">n???i dung kh??a h???c</h3>

                    {
                        course.content.map((e, i) => <Accordion handleAnccordion={handleAnccordion.bind(null, i)} active={state.currentContent === i} key={i} content={e.content} title={e.title} num={i + 1} />)
                    }

                    <h3 className="title">y??u c???u c???n c??</h3>
                    <div className="row row-check">
                        <div className="col-md-6">???? t???ng h???c qua HTML, CSS</div>
                        <div className="col-md-6">C??i ?????t ph???n m???m Photoshop,
              Adobe illustrator, Skype</div>
                    </div>
                    <h3 className="title">h??nh th???c h???c</h3>
                    <div className="row row-check">
                        <div className="col-md-6">H???c offline t???i v??n ph??ng, c??ng Tr???n Ngh??a v?? 3 ?????ng nghi???p.</div>
                        <div className="col-md-6">D???y v?? th???c h??nh th??m b??i t???p online
              th??ng qua Skype.</div>
                        <div className="col-md-6">???????c c??c mentor v?? c??c b???n trong team CFD h??? tr??? th??ng qua group CFD Facebook
              ho???c ph???n m???m ??i???u khi???n m??y t??nh.</div>
                        <div className="col-md-6">Th???c h??nh 2 d??? ??n th???c t??? v???i s??? h?????ng d???n c???a CFD Team.</div>
                    </div>
                    <h3 className="title">
                        <div className="date-start">l???ch h???c</div>
                        <div className="sub">*L???ch h???c v?? th???i gian c?? th??? th???ng nh???t l???i theo s??? ????ng h???c vi??n.</div>
                    </h3>
                    <p>
                        <strong>Ng??y b???t ?????u: </strong> 09/09/2020 <br />
                        <strong>Th???i gian h???c: </strong> {course.schedule}
                    </p>
                    <h3 className="title">Ng?????i d???y</h3>
                    <div className="teaches">

                        <Teacher teacher={course.teacher} />
                        {/* <Mentor mentor={course.mentor} /> */}
                    </div>
                    <div className="bottom">
                        <div className="user">
                            <img src="/img/user-group-icon.png" alt="" /> 12 b???n ???? ????ng k??
            </div>
                        <div className="btn main btn-register round">????ng k??</div>
                        <div className="btn-share btn overlay round btn-icon">
                            <img src="/img/facebook.svg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-3">
                <div className="container">
                    <div className="textbox">
                        <h3 className="sub-title">D??? ??N</h3>
                        <h2 className="main-title">TH??NH VI??N</h2>
                    </div>
                    <div className="list row">

                        <CourseDuan name="Reactjs" des="One of the best corporate fashion brands in Syndney" image="/img/img.png" teacher_img="/img/avt.png" teacher_name="V????ng ?????ng" />
                        <CourseDuan name="Animation" des="One of the best corporate fashion brands in Syndney" image="/img/img2.png" teacher_img="/img/avt.png" teacher_name="Tr???n Ngh??a" />
                        <CourseDuan name="Scss, Grunt JS v?? Boostrap 4" des="One of the best corporate fashion brands in Syndney" image="/img/img3.png" teacher_img="/img/avt.png" teacher_name="V????ng ?????ng" />

                    </div>
                </div>
            </section>
            <section className="section-4">
                <div className="container">
                    <div className="textbox">
                        <h3 className="sub-title">Kh??a h???c</h3>
                        <h2 className="main-title">Li??n quan</h2>
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