function InputField ({ inputType , className , placeHolder, onChange, id , value}) {
    return(
            <input id={id} value={value} type={inputType} className={className} placeholder={placeHolder} onChange={onChange}/>
    )
}
export default InputField