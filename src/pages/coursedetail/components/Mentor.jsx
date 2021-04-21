export default function mentor({ mentor }) {
    return (
        <div className="teacher">
            <div className="avatar">
                <img src={mentor.avatar.link} alt="" />
            </div>
            <div className="info">
                <div className="name">{mentor.title}</div>
                <div className="title">{mentor.position}</div>
                <p className="intro">
                    {mentor.description}
                </p>
                <p><strong>Website:</strong> <a href="#">{mentor.website}</a></p>
            </div>
        </div>
    )
}