import MainLayout from "../../layout/MainLayout";
import Duan from "./components/Duan";

export default function Project() {
    return (
        <>
            <main className="projectpage" id="main">
                <section className="section-1">
                    <div className="container">
                        <h2 className="main-title">dự án</h2>
                        <p className="top-des">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam tincidunt elementum sem non
                            luctus
            </p>
                        <div className="list row">
                            <Duan name='furnitown' des='Hoàn thành với Trần Nghĩa ' image='/img/project/project (1).jpg' />
                            <Duan name='kymco' des='Hoàn thành với Huỳnh Tiến Tài' image='/img/project/project (2).jpg' />
                            <Duan name='gboxmb' des='Hoàn thành bởi Nguyễn Văn Tuấn' image='/img/project/project (5).jpg' />
                            <Duan name='wooder' des='Hoàn thành bởi Nguyễn Đức Huy' image='/img/project/project (4).jpg' />
                            <Duan name='gboxmb' des='Hoàn thành bởi Nguyễn Văn Tuấn' image='/img/project/project (6).jpg' />
                            <Duan name='gboxmb' des='Hoàn thành bởi Nguyễn Văn Tuấn' image='/img/project/project (3).jpg' />
                            <Duan name='gboxmb' des='Hoàn thành bởi Nguyễn Văn Tuấn' image='/img/project/project (1).jpg' />
                            <Duan name='gboxmb' des='Hoàn thành bởi Nguyễn Văn Tuấn' image='/img/project/project (6).jpg' />
                        </div>
                        <div className="bottom">
                            <div className="btn overlay round btn-more">
                                tải thêm
              </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}