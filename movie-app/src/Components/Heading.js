export default function Heading ({title,className,toolTip,styling,onClick,url}) {
    return(
        <p className={className} title={toolTip} style={styling} onClick={onClick} >
            <a href={url}>
                {title}
            </a>
        </p>
    )
}
