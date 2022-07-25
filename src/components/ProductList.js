import Product from './Product';
import Cart from './Cart';
import { getData, getRandomNumber } from './commonFunctions';
import { useState,useEffect } from 'react';

const ProductList = (props) => {

    const [productData,setProductData] = useState();
    const [filterContent, setFilterContent] = useState('');
    const [cart, setCart] = useState([]);
    const [cartDisplay, setCartDisplay] = useState(false);
    const filtering = (product) => {
        return product.title.toLowerCase().includes(filterContent);
    }

    useEffect(()=>{
        !productData && getData('https://dummyjson.com/products', setProductData)
    },[])

    return (
        <div className='productList'>
            <div className='topBar'>
                Searching for something specific? Try our filter:
                <input type='text' id='filterInput' onChange={e => setFilterContent(e.target.value.toLowerCase())}/>
                <button className='logoutButton' onClick={e => props.setLoginToken(false)}>Log out</button>
                <button className='showCart' onClick={e => setCartDisplay(current => !current)}>Show Cart</button>
            </div>
            { cartDisplay && <Cart hideCart={setCartDisplay} content={cart} cartManagement={setCart} /> }
            <div className='products'>
                {
                    productData && productData.products && productData.products.map(
                        (product) => (
                            filtering(product) && 
                                (<Product key={`item${product.id}-${getRandomNumber()}`} inCart={false} completeProduct={product} cartManagement={setCart}/>)
                        )
                    )
                }
            </div>
        </div>
    )
}

export default ProductList;