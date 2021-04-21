export default function TeamList({ image, teach_name, des }) {
    return (
        <div className="wrap">
            <div className="cover">
                <img src={image} alt="" />
            </div>
            <div className="info">
                <div className="name">
                    {teach_name}
                </div>
                <p className="title">{des}</p>
            </div>
        </div>
    )
}