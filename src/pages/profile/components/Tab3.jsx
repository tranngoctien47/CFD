export default function Tab3() {
    return (
        <div className="tab3" >
            <div className="row">
                <Duan name='Furnitown' des="Dự án hoàn thành trong khóa CFD1 Offline của CFD Team." teacher_name='Tràn Nghĩa' teacher_img='img/avt.png' image="/img/img8.png" />
                <Duan name='Furnitown' des="Dự án hoàn thành trong khóa CFD1 Offline của CFD Team." teacher_name='Tràn Nghĩa' teacher_img='img/avt.png' image="/img/img8.png" />
            </div>
            <div className="btn-wrap">
                <div className="btn overlay btn-icon round">
                    <img src="/img/icon-upload.svg" alt="" /> Tải lên
        </div>
            </div>
        </div>
    )
}

function Duan({ name, des, teacher_img, teacher_name, image }) {
    return (
        <div className="col-md-6 course">
            <div className="wrap">
                <a href="#" className="cover">
                    <img src={image} alt="" />
                </a>
                <div className="info">
                    <a href="#" className="name">
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
                    <div className="register-btn">Website</div>
                </div>
            </div>
        </div>
    )
}