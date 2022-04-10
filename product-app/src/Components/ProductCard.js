import Heading from "./Heading"
import ImageMedia from "./ImageMedia"
import Paragraph from "./Paragraph"
import Button from "./Button"

function ProductCard (props) {
    const { productImgUrl , productName , productDesc , productPrice , productStock, delClick} = props

    const rupiah = (number)=>{
        return new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
          maximumFractionDigits: 0
        }).format(number);
    }
    

    return(
        <div className="product-card">
                <ImageMedia imgUrl={productImgUrl} className="product-img"/>
                <div className="product-body">
                    <Heading title={productName} className="product-name" url="#lalala"/>
                    <Paragraph content={productDesc} className="product-desc"/>
                    <div className="sub-body">
                        <Heading title={rupiah (productPrice)} className="product-price"/>
                        <Heading title={`Stok : ${productStock}`} className="product-price"/>
                    </div>
                <Button onClick={() => delClick(productName)}  className="delete-btn" iconClass='fa fa-remove' btnLabel="DELETE"/>
                </div>
        </div>
    )
}

export default ProductCard