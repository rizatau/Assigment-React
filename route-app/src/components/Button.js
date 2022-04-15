export default function Button ({ className, id, onClick, btnLabel, iconClass }) {
    return(
        <button className={className} id={id} onClick={onClick} ><i className={iconClass}></i>{btnLabel}</button> 
    )
}

