export default function Teacher({ teacher }) {
    return (
        <div className="teacher">
            <div className="avatar">
                <img src={teacher.avatar.link} alt="" />
            </div>
            <div className="info">
                <div className="name">{teacher.title}</div>
                <div className="title">{teacher.position}</div>
                <p className="intro">
                    {teacher.description}
                </p>
                <p><strong>Website:</strong> <a href="#">{teacher.website}</a></p>
            </div>
        </div>
    )
}