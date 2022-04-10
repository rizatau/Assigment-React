export default function ImageMedia ({title, id, className,styling,onClick,imgUrl}) {
    return(
        <img src={imgUrl} id={id} className={className} title={title} style={styling} onClick={onClick} />
    )
}
 