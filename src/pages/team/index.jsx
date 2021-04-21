import TeamList from "./components/TeamList";

export default function Team() {
    return (
        <main className="team" id="main">
            <section>
                <div className="container">
                    <div className="top">
                        <h2 className="main-title">cfd team</h2>
                        <p className="top-des">Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam tincidunt
                        elementum
                        sem non luctus
              </p>
                    </div>
                    <div className="list row">
                        <div className="item col-md-6 col-sm-6">
                            <TeamList teach_name="Trần Nghĩa" des="Founder & Creative Front-End Developer" image="/img/thumb-member.jpg" />
                        </div>
                        <div className="item col-md-6 col-sm-6">
                            <TeamList teach_name="Đặng Vương" des="Co-Founder & Fullstack Developer" image="/img/thumb-member.jpg" />
                        </div>
                        <div className="item col-md-6 col-sm-6">
                            <TeamList teach_name="Đặng Thuyền Quân" des="Co-Founder & Backend Developer" image="/img/thumb-member.jpg" />
                        </div>
                        <div className="item col-md-6 col-sm-6">
                            <TeamList teach_name="Nguyễn Đức Huy" des="Co-Founder & Front-End Developer" image="/img/thumb-member.jpg" />
                        </div>
                        <div className="item col-md-3 col-sm-4 col-xs-6">
                            <TeamList teach_name="Diệp anh thy" des="CFD1-Offline" image="/img/thumb-member.jpg" />
                        </div>
                        <div className="item col-md-3 col-sm-4 col-xs-6">
                            <TeamList teach_name="huỳnh tiến tài" des="CFD1-Offline" image="/img/thumb-member.jpg" />
                        </div>
                        <div className="item col-md-3 col-sm-4 col-xs-6">
                            <TeamList teach_name="Ngô thành long" des="CFD1-Offline" image="/img/thumb-member.jpg" />
                        </div>
                        <div className="item col-md-3 col-sm-4 col-xs-6">
                            <TeamList teach_name="trần anh tuấn" des="CFD1-Offline" image="/img/thumb-member.jpg" />
                        </div>
                        <div className="item col-md-3 col-sm-4 col-xs-6">
                            <TeamList teach_name="ngô thành long" des="CFD1-Offline" image="/img/thumb-member.jpg" />
                        </div>
                        <div className="item col-md-3 col-sm-4 col-xs-6">
                            <TeamList teach_name="nguyễn thành tùng" des="CFD1-Offline" image="/img/thumb-member.jpg" />
                        </div>
                        <div className="item col-md-3 col-sm-4 col-xs-6">
                            <TeamList teach_name="phạm thành trung" des="CFD1-Offline" image="/img/thumb-member.jpg" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}