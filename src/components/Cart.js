import Product from './Product';
import { getRandomNumber } from "./commonFunctions";

const Cart = (props) => {

    return (
        <div className='cart'>
            <div className='cartContents'>
                <button className='closeButton' onClick={e => props.hideCart(current => !current)}>X</button>
                <p className='cartTitle'>Your cart:</p>
                {
                    props.content && props.content.map(product => (
                        <Product key={`cart${product.id}-${getRandomNumber()}`} inCart={true} completeProduct={product} cartManagement={props.cartManagement}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Cart