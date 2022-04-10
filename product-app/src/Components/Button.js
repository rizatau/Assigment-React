function Button (props) {
    const { className, id, onClick, btnLabel, iconClass } = props
    return(
        <button className={className} id={id} onClick={onClick} ><i className={iconClass}></i>{btnLabel}</button> 
    )
}

export default Button