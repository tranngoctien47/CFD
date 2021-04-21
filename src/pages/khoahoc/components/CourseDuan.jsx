import { useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../../../core/AppProvider"

export default function CourseDuan({ name, image, des, teacher_name, teacher_img, slug }) {
    let { linkLoading } = useContext(Context)
    return (
        <div className="col-md-4 course">
            <div className="wrap">
                <a className="cover" href="#">
                    <img src={image} alt="" />
                </a>
                <div className="info">
                    <a className="name" href="#">
                        {name}
                    </a>
                    <p className="des">
                        {des}
                    </p>
                </div>
                <div className="bottom">
                    <div className="teacher">
                        <div className="avatar">
                            <img src={teacher_img} alt="" />
                        </div>
                        <div className="name">{teacher_name}</div>
                    </div>
                    <Link to='/register/ádasdasd' onClick={linkLoading} className="register-btn">Đăng Ký</Link>
                </div>
            </div>
        </div>
    )
}