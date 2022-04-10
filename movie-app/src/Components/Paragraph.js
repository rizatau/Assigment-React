export default function Paragraph ({ content , className , toolTip , styling , onClick ,  url }) {
    return(
        <p className={className} title={toolTip} style={styling} onClick={onClick} >
            <a href={url}>
                {content}
            </a>
        </p>
    )
}
