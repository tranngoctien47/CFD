export default function Accordion({ title, content }) {
    return (
        <div className="accordion">
            <div className="accordion__title">
                <h2><strong>{title}</strong></h2>
            </div>
            <div className="content">
                {content}
            </div>
        </div>
    )
}