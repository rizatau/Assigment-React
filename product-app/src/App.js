import { useState} from 'react'
import './App.css';
import AddProduct from './Components/AddProduct';
import ProductList from './Components/ProductList';



function App() {
  const [products, setProducts] = useState( [
    {
      title : 'Eagle Lotus Sepatu Lari' ,
      price : 329000 ,
      desc : 'Lorem ipsum sepatu eagle breakaway in magnificent cinematic aurora wich really impress the parlement.' ,
      image : 'http://www.ansonika.com/allaia/img/products/shoes/product_detail_2.jpg' ,
      stock : 100
      },
      {
      title : 'Eagle Olympus' ,
      price : 329000 ,
      desc : 'Lorem ipsum sepatu eagle breakaway in magnificent cinematic aurora wich really impress the parlement.' ,
      image : 'http://cdn.elevenia.co.id/g/6/7/1/2/6/5/27671265_A2_V2.jpg' ,
      stock : 95
      },
      {
      title : 'Eagle Eclipse – Merah' ,
      price : 299000 ,
      desc : 'Lorem ipsum sepatu eagle breakaway in magnificent cinematic aurora wich really impress the parlement.' ,
      image : 'https://cdn.elevenia.co.id/g/1/4/5/7/7/0/29145770_B.jpg' ,
      stock : 90
      },
      {
      title : 'Eagle Eclipse – Abu-abu' ,
      price : 299000 ,
      desc : 'Lorem ipsum sepatu eagle breakaway in magnificent cinematic aurora wich really impress the parlement.' ,
      image : 'https://cdn.elevenia.co.id/g/1/4/5/7/7/0/29145770_A2.jpg' ,
      stock : 85
      },
      {
      title : 'Sepatu Badminton Eagle Winstar' ,
      price : 150000 ,
      desc : 'Lorem ipsum sepatu eagle breakaway in magnificent cinematic aurora wich really impress the parlement.' ,
      image : 'https://cdn.elevenia.co.id/g/8/1/1/9/7/7/27811977_A1.jpg' ,
      stock : 80
      },
      {
      title : 'Eagle Vortex Abu-abu Merah' ,
      price : 329000 ,
      desc : 'Lorem ipsum sepatu eagle breakaway in magnificent cinematic aurora wich really impress the parlement.' ,
      image : 'https://cdn.elevenia.co.id/g/2/9/4/0/2/5/29294025_A2.jpg' ,
      stock : 75
      },
      {
      title : 'Eagle Skywalker Sepatu Lari' ,
      price : 279000 ,
      desc : 'Lorem ipsum sepatu eagle breakaway in magnificent cinematic aurora wich really impress the parlement.' ,
      image : 'https://s2.bukalapak.com/img/22450562031/w-1000/2019_08_12T11_55_58_07_00.jpg' ,
      stock : 70
      },
      {
      title : 'Eagle Sepatu Lari Running Shoes X-Cell' ,
      price : 499000 ,
      desc : 'Lorem ipsum sepatu eagle breakaway in magnificent cinematic aurora wich really impress the parlement.' ,
      image : 'https://s2.bukalapak.com/img/7832337531/w-1000/Sepatu_Running_JAGUAR_by_EAGLE___Original_Kualitas_Oke.jpg' ,
      stock : 65
      },
      {
      title : 'Eagle Sepatu Badminton Bulutangkis Metro' ,
      price : 599000 ,
      desc : 'Lorem ipsum sepatu eagle breakaway in magnificent cinematic aurora wich really impress the parlement.' ,
      image : 'https://cdn.elevenia.co.id/g/1/4/5/6/0/0/29145600_B.jpg' ,
      stock : 60
      },
      {
      title : 'Eagle Sepatu Lari Running Shoes X-Cell' ,
      price : 899000 ,
      desc : 'Lorem ipsum sepatu eagle breakaway in magnificent cinematic aurora wich really impress the parlement.' ,
      image : 'https://s0.bukalapak.com/img/0911780303/w-1000/Sepatu_Olahraga_Eagle_SNIPER_Running_Lari_ORIGINAL.jpg' ,
      stock : 55
      },
      {
      title : 'Eagle Hybrid Sepatu Lari' ,
      price : 279000 ,
      desc : 'Lorem ipsum sepatu eagle breakaway in magnificent cinematic aurora wich really impress the parlement.' ,
      image : 'https://cdn.elevenia.co.id/g/2/9/4/0/2/5/29294025_A1.jpg' ,
      stock : 50
      },
      {
      title : 'Eagle Metro Sepatu Badminton' ,
      price : 329000 ,
      desc : 'Lorem ipsum sepatu eagle breakaway in magnificent cinematic aurora wich really impress the parlement.' ,
      image : 'https://cdn.elevenia.co.id/g/1/4/5/7/7/0/29145770_A2.jpg' ,
      stock : 45
      },
      {
      title : 'Eagle Metro Sepatu Badminton' ,
      price : 237000 ,
      desc : 'Lorem ipsum sepatu eagle breakaway in magnificent cinematic aurora wich really impress the parlement.' ,
      image : 'https://cdn.elevenia.co.id/g/1/4/5/7/7/0/29145770_A1.jpg' ,
      stock : 40
      },
      {
      title : 'Eagle Metro Sepatu Badminton' ,
      price : 297000 ,
      desc : 'Lorem ipsum sepatu eagle breakaway in magnificent cinematic aurora wich really impress the parlement.' ,
      image : 'https://ecs7.tokopedia.net/img/cache/700/product-1/2020/3/18/5249952/5249952_0df4d40d-fd2a-4dc3-83a8-7b7802a8cf59_700_700' ,
      stock : 35
      }
      ])

 

    function saveProduct(newProduct) {
        setProducts((currState) => {
            return [ ...currState, newProduct ]
        })

    }
    
    function deleteProduct(productName){

      const newProducts = [...products]
      const index = products.findIndex((product)=> product.title === productName)
      newProducts.splice(index,1)
      setProducts(newProducts)
      // console.log(index);
      // console.log(productIndex);
    }

 

  return (
    <div className="App">
      <div className='product-container'>
        <ProductList products={products} delProduct={deleteProduct}/>
      </div>
      <div className='form-container'>
        <AddProduct saveProduct={saveProduct}/>
      </div>
    </div>
  );
}


export default App;
