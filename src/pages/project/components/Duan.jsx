export default function Duan({ name, des, image }) {
    return (
        <a href="#" className="item col-md-6">
            <div className="wrap">
                <div className="cover">
                    <img src={image} alt="" />
                </div>
                <div className="info">
                    <div className="name">{name}</div>
                    <div className="makeby">{des} </div>
                </div>
            </div>
        </a>
    )
}