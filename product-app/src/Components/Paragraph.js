function Paragraph (props) {
    const { content , className , toolTip , styling , onClick ,  url } = props
    return(
        <p className={className} title={toolTip} style={styling} onClick={onClick} >
            <a href={url}>
                {content}
            </a>
        </p>
    )
}
export default Paragraph