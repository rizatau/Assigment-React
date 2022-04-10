import { useState} from 'react'
import AddProductForm from "./AddProductForm"
import Heading from './Heading'
import Paragraph from './Paragraph'

function AddProduct({saveProduct }) {
    const [ newProduct, setNewProduct ] = useState({
      title : '' ,
      price : '' ,
      desc : '' ,
      image : '' ,
      stock : ''
      })
  
    function handleNewProduct(e) {
        console.log(e.target.value);
        setNewProduct((currState) => {
            return { ...currState, [e.target.id]: e.target.value}
        })
    }
  
  
    function save(e) {
        e.preventDefault();
        let i = newProduct
        let error = '';
        let formIsValid = true;
        const allInput=document.querySelectorAll("input")
        
        if(!i.desc || !i.image || !i.price || !i.stock || !i.title){
            error = '';
                formIsValid = true;
        } else{
            saveProduct(newProduct);
            setNewProduct("")
            
            Array.from(allInput).forEach(
                input => (input.value = "")
              );    
        }
    }

    function warning(){
        let i = newProduct
        let error=""
        if(!i.desc || !i.image || !i.price || !i.stock || !i.title){
           error="Pastikan semua field terisi"
        }
    
    }

    return(
        // <div>
        <AddProductForm newProduct={newProduct} onClick={save} onChange={handleNewProduct}/>
        // <Paragraph content={warning} className="form-warning" />
        // </div>
    )
  }

  export default AddProduct