export default function List({divClass,ulClass,list,liClass}){
    return(
        <div className={divClass}>
            <ul className={ulClass}>
                {list.map((data , index)=> (
                <li className={liClass} key={index}>{data}</li>))}
            </ul>
        </div>
    )
}
