import ProductCard from "./ProductCard"

function ProductList(props){
    const {products, delProduct} = props

    return(
    <div className='product-grid'> 
        {products.map((product,index) => (
            <ProductCard key={index+1} indexProd={index} productUrl="#" productImgUrl={product.image} productName={product.title} productDesc={product.desc} productPrice={product.price} productStock={product.stock} delClick={delProduct}/>
        ))}
    </div>)
}

export default ProductList