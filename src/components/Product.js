import { useState } from 'react';
import ProductDetail from "./ProductDetail";
const Product = (props) => {

    const [detailShown, setDetailShown] = useState(false);

    return (
        <div className='product'>
            <div className='productContainer' onClick={e => setDetailShown(current => !current)}>
                <div className='productThumbnail'>
                    <img className='productImage' src={props.completeProduct.thumbnail} />
                </div>
                <div className='productName'>{props.completeProduct.title}</div>
                <div className='productPrice'>{props.completeProduct.price} €</div>
            </div>
        {
            detailShown && <ProductDetail hideDetail={setDetailShown} inCart={props.inCart} completeProduct={props.completeProduct} cartManagement={props.cartManagement}/>
        } 
        </div>
      );
    
}

export default Product