function ImageMedia (props) {
    const { title , className , styling , onClick ,  imgUrl } = props
    return(
        <img src={imgUrl} className={className} title={title} style={styling} onClick={onClick} />
    )
}
export default ImageMedia