
import Course from "./Course";

export default function CourseList({ online, offline }) {
    return (
        <>
            <section className="section-courseoffline">
                <div className="container">
                    <p className="top-des">
                        The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                    </p>
                    <div className="textbox">
                        <h2 className="main-title">Khóa học Offline</h2>
                    </div>
                    <div className="list row">
                        {
                            offline.map((e, i) => <Course key={i}  {...e} />)
                        }
                        {/* <Course name="Reactjs" des="One of the best corporate fashion brands in Syndney" status='dang-dien-ra' image="/img/img1.png" teacher_img="/img/avt.png" teacher_name="Vương Đặng" />
                        <Course name="Web Responsive" des="One of the best corporate fashion brands in Syndney" status='da-ket-thuc' image="/img/img1.png" teacher_img="/img/avt.png" teacher_name="Vương Đặng" />
                        <Course name="Backend" des="One of the best corporate fashion brands in Syndney" status='dang-dien-ra' image="/img/img1.png" teacher_img="/img/avt.png" teacher_name="Vương Đặng" />
                        <Course name="Nodejs" des="One of the best corporate fashion brands in Syndney" status='' image="/img/img1.png" teacher_img="/img/avt.png" teacher_name="Vương Đặng" />
                        <Course name="PHP" des="One of the best corporate fashion brands in Syndney" status='' image="/img/img1.png" teacher_img="/img/avt.png" teacher_name="Vương Đặng" />
                        <Course name="Java" des="One of the best corporate fashion brands in Syndney" status='dang-dien-ra' image="/img/img1.png" teacher_img="/img/avt.png" teacher_name="Vương Đặng" /> */}
                    </div>
                </div>
            </section>
            <section className="section-courseonline section-blue">
                <div className="container">
                    <div className="textbox">
                        <h2 className="main-title">Khóa học Online</h2>
                    </div>
                    <div className="list row">
                        {
                            online.map((e, i) => <Course key={i}  {...e} />)
                        }
                        {/* <Course name="Reactjs" des="One of the best corporate fashion brands in Syndney" status='dang-dien-ra' image="/img/img1.png" teacher_img="/img/avt.png" teacher_name="Vương Đặng" />
                        <Course name="Web Responsive" des="One of the best corporate fashion brands in Syndney" status='da-ket-thuc' image="/img/img1.png" teacher_img="/img/avt.png" teacher_name="Vương Đặng" />
                        <Course name="Backend" des="One of the best corporate fashion brands in Syndney" status='dang-dien-ra' image="/img/img1.png" teacher_img="/img/avt.png" teacher_name="Vương Đặng" />
                        <Course name="Nodejs" des="One of the best corporate fashion brands in Syndney" status='' image="/img/img1.png" teacher_img="/img/avt.png" teacher_name="Vương Đặng" />
                        <Course name="PHP" des="One of the best corporate fashion brands in Syndney" status='' image="/img/img1.png" teacher_img="/img/avt.png" teacher_name="Vương Đặng" />
                        <Course name="Java" des="One of the best corporate fashion brands in Syndney" status='dang-dien-ra' image="/img/img1.png" teacher_img="/img/avt.png" teacher_name="Vương Đặng" /> */}
                    </div>
                    <div className="text-deco">C</div>
                </div>
            </section>
        </>
    )
}

