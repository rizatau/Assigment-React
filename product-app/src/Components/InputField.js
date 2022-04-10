function InputField (props) {
    const { inputType , className , placeHolder, onChange, id} = props
    return(
            <input id={id} type={inputType} className={className} placeholder={placeHolder} onChange={onChange}/>
    )
}
export default InputField