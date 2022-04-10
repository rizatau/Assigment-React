import Button from "./Button"
import InputField from "./InputField"

function AddProductForm (props) {
    const { newProduct , onClick, onChange} = props

    return(
        <div className="add-product">
            <form className="product-form">
                    <InputField id="title" value={newProduct.title} inputType="text" className="input-product-name input-product" placeHolder="Nama produk" onChange={onChange} />
                    <InputField id="desc" value={newProduct.desc} inputType="text" className="input-product-desc input-product" placeHolder="Deskripsi" onChange={onChange}/>
                    <InputField id="price" value={newProduct.price} inputType="number" className="input-product-price input-product" placeHolder="Harga" onChange={onChange}/>
                    <InputField id="stock" value={newProduct.stock} inputType="number" className="input-product-stock input-product" placeHolder="Jumlah stock" onChange={onChange}/>
                    <InputField id="image" value={newProduct.image} inputType="text" className="input-product-image input-product" placeHolder="Url foto produk" onChange={onChange}/>
                    <Button  onClick={onClick} className="submit-form" btnLabel="Tambahkan Produk"/>
            </form>
        </div>
    )
}
export default AddProductForm
